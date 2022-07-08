import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { equipments } from './equipmentsSlice'
import { amediateka, mir, more, start } from "../../modules/mftv.module";


const { sim, mftv, fr100, fr1000, androidtv, router_4g } = equipments

const tariffsSlice = createSlice( {
   name: 'tariffs',
   initialState: {
      internet: {
         tariffId: 4271,
         equipments: {
            androidtv,
            fr1000,
            mftv,
            sim
         },
      },
      dvainet: {
         tariffId: 5328,
         equipments: {
            androidtv,
            fr1000,
            mftv,
            sim
         },
      },
      hit: {
         tariffId: 5329,
         tvId: 2,
         equipments: {
            androidtv,
            fr1000,
            mftv,
            sim
         }
      },
      their: {
         tariffId: 5330,
         tvId: 3,
         dop_params: [
            'Аренда роутера за 0 ₽',
            'Безлимитный мобильный интернет на соц. сети и Youtube'
         ],
         equipments: {
            androidtv,
            fr1000,
            mftv,
            sim
         },
         mftv: [
            start,
            mir
         ],
      },
      vse: {
         tariffId: 4273,
         tvId: 3,
         equipments: {
            androidtv,
            fr1000,
            mftv,
            sim
         },
      },
      turbo: {
         tariffId: 4276,
         dop_params: [ 'Wi-Fi роутер в подарок' ],
         equipments: {
            fr1000,
         }
      },
      econom: {
         tariffId: 5327,
         tvId: 1,
         equipments: {
            androidtv,
            fr100,
            mftv,
            sim
         }
      },
      films: {
         tariffId: 5331,
         equipments: {
            androidtv,
            fr100,
            mftv,
            sim
         },
         mftv: [
            start,
            mir
         ],
      },
      maximum: {
         tariffId: 4275,
         tvId: 4,
         equipments: {
            androidtv,
            fr1000,
            mftv,
         },
      },
      premium: {
         tariffId: 5347,
         tvId: 4,
         dop_params: [
            'Аренда роутера и ТВ-приставки за 0 ₽',
            'Безлимитный мобильный интернет на соц. сети и Youtube'
         ],
         equipments: {
            androidtv,
            fr1000,
            mftv,
            sim
         },
         mftv: [
            start,
            mir,
            amediateka,
            more
         ],
      },
      vezde: {
         tariffId: 3981,
         tvId: 1,
         rentDevice: [
            {
               text: "Аренда 4G Wi-Fi роутера",
               price: 100
            }
         ],
         equipments: { router_4g },
         link: "/uploads/docs/2022/home/tariff_5687_chuvashia.pdf"
      }
   },
   reducers: {
      optionSwitch( state, action ) {
         const { id, eqKey, checked } = action.payload
         const currentTariff = state[id]
         const optionCard = currentTariff.equipments[eqKey]
         optionCard.switch = checked
      },
      counterSim( state, action ) {
         const { id, eqKey, name } = action.payload
         const optionCard = state[id].equipments[eqKey]

         if ( name === 'plus' ) {
            optionCard.cnt++
            optionCard.switch = true
         }
         if ( name === 'minus' ) {
            optionCard.cnt--
         }
         optionCard.sumPrice = optionCard.price * optionCard.cnt
         optionCard.sumOldPrice = optionCard.oldPrice * optionCard.cnt
      },
      tariffRadioPlan( state, action ) {
         const { id, eqKey } = action.payload
         const cardOption = state[id].equipments[eqKey]
         cardOption.plan.forEach( p => p.checked = !p.checked )
         cardOption.price = cardOption.plan.find( p => p.checked ).value
      },
      sumTotalPrice( state, action ) {
         const { id } = action.payload
         const currentTariff = state[id]
         const equipments = { ...currentTariff.equipments }

         const reducePrice = Object.values( equipments ).map( eq => {
            if ( eq.switch ) {
               if ( eq.id === 'almond' && eq.currentPrice ) {
                  return typeof eq.currentPrice === 'string'
                     ? parseInt( eq.currentPrice.match( /\d+/ ) )
                     : eq.currentPrice
               }
               if ( typeof eq.price === 'string' ) return parseInt( eq.price.match( /\d+/ ) )
               if ( eq.id === 'sim' ) return eq.sumPrice || eq.price
               if ( eq.plan ) return eq.plan.find( p => p.checked ).value
               return eq.price
            }
            return 0
         } )
            .reduce( ( a, b ) => a + b )
         currentTariff.totalPrice = +currentTariff.price + reducePrice
         currentTariff.totalOldPrice = currentTariff.oldPrice + reducePrice
      },
      switchAlmond( state, action ) {
         const { data, checked, cnt, tariffID } = action.payload
         const almond = state[tariffID].equipments.almond
         almond.equipments[data.index] = { ...data, cnt, checked }
      },
      counterAlmond( state, action ) {
         let { cnt, name, data, tariffID } = action.payload
         const { index } = data
         const currentTariff = state[tariffID]
         const { almond } = currentTariff.equipments

         if ( name === 'plus' ) {
            almond.equipments[index] = { ...data, cnt: ++cnt, checked: true }
         }
         if ( name === 'minus' ) {
            almond.equipments[index] = { ...almond.equipments[index], cnt: --cnt }
         }
      },
      sumAlmondTotalPrice( state, action ) {
         const { almond } = state[action.payload].equipments

         const arrPrices = almond.equipments
            .filter( alEq => alEq.checked )
            .map( alEq => alEq.price * alEq.cnt )

         almond.totalPrice = arrPrices.length
            ? arrPrices.reduce( ( a, b ) => a + b )
            : null
      },
      changeAlmondTotalPrice( state, action ) {
         const { id, eqKey } = action.payload
         const almond = state[id].equipments[eqKey]
         almond.currentPrice = almond.totalPrice || almond.price
      },
      setInitialChannels( state, action ) {
         const responses = action.payload

         responses.forEach( ( { data } ) => {
            const { id, channels } = Object.values( data.packages )[0]
            Object.values( state ).forEach( tariff => {
               if ( tariff.tvId === id ) {
                  tariff.channels = channels
               }
            } )
         } )
      },
      setInitialStateTariffs( state, action ) {
         const tariffs = action.payload

         const payloadTariffs = {
            dvainet: tariffs[101],
            econom: tariffs[102],
            hit: tariffs[103],
            their: tariffs[104],
            films: tariffs[105],
            premium: tariffs[106],
            vezde: tariffs[55],
            internet: tariffs[201],
            turbo: tariffs[202],
            vse: tariffs[203],
            maximum: tariffs[204]
         }

         const data = new Map()

         for ( const key in payloadTariffs ) {
            const payloadTariff = payloadTariffs[key]
            if ( payloadTariff ) {
               const group = payloadTariff.name.split( ' ' )[0]
               payloadTariff.oldPrice = +payloadTariff.price

               group === 'Объединяй!'  // скидка
                  ? payloadTariff.price = Math.ceil( payloadTariff.price * 0.5 )
                  : payloadTariff.price = Math.ceil( payloadTariff.price * 0.7 )

               const initialState = tariffsSlice.getInitialState()[key]
               data.set( key, { ...initialState, ...payloadTariff } )
            }
         }
         return Object.fromEntries( data )
      }
   },
   extraReducers: {
      [HYDRATE]: ( state, action ) => action.payload.tariffs
   },
} )

// export const getChannels = ( tvId ) => async ( dispatch ) => {
//    try {
//       const { data } = await axios( `https://home.megafon.ru/billing/bt/json/gettvchannelsbygroup?pack_id=${ tvId }` )
//       dispatch( setChannels( data.packages[tvId] ) )
//    } catch ( err ) {
//       console.log( 'Ошибка getChannels', err )
//    }
// }


export const {
   optionSwitch,
   counterSim,
   tariffRadioPlan,
   sumTotalPrice,
   switchAlmond,
   counterAlmond,
   sumAlmondTotalPrice,
   changeAlmondTotalPrice,
   setInitialChannels,
   setInitialStateTariffs
} = tariffsSlice.actions
export default tariffsSlice.reducer