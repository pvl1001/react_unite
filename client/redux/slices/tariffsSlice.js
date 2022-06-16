import { createSlice } from '@reduxjs/toolkit';
import { store } from "../store";
import { showModal } from "./modalsSlice";
import { HYDRATE } from 'next-redux-wrapper';
import { equipments } from './equipmentsSlice'
import { amediateka, mir, more, start } from "../../modules/mftv.module";

const { sim, almond, mftv, fr100, fr1000, androidtv, router_4g } = equipments

export const templateEqAlmond = [
   {
      id: "almond-0",
      name: "Роутер Almond 3",
      img: "Almond-3_about",
      params: [
         {
            icon: "speed-2_w",
            text: "Скорость <br> до 300 Мбит/с"
         },
         {
            icon: "zone-24_w",
            text: "Зона покрытия <br> до 120 м<sup>2</sup>"
         },
         {
            icon: "hertz_24_w",
            text: "Диапазоны частот <br> 2,4 и 5 Ггц"
         }
      ],
      price: 229
   },
   {
      id: "almond-1",
      name: "Роутер Almond 3S",
      img: "Almond-3S_about",
      params: [
         {
            icon: "speed-2_w",
            text: "Скорость <br> до 300 Мбит/с"
         },
         {
            icon: "Whats-left_24",
            text: "Встроенный <br> аккумулятор"
         },
         {
            icon: "zone-24_w",
            text: "Зона покрытия <br> до 120 м<sup>2</sup>"
         },
         {
            icon: "Sim-card_24",
            text: "LTE <br> резервирование"
         },
         {
            icon: "hertz_24_w",
            text: "Диапазоны частот <br> 2,4 и 5 Ггц"
         }
      ],
      price: 339
   },
   {
      id: "sensor-0",
      name: "Wi-Fi камера",
      img: "Wi-Fi-kamera_about",
      desc: "Наблюдайте за происходящим дома в реальном времени, где бы вы ни были",
      price: 120
   },
   {
      id: "sensor-1",
      name: "Датчик движения",
      img: "Datchik-dvizheniya_about",
      desc: "Будьте в курсе любых передвижений в доме",
      price: 50
   },
   {
      id: "sensor-2",
      name: "Датчик открытия и закрытия",
      img: "Datchik-otkrytiya-i-zakrytiya_about",
      desc: "Будьте в курсе всех незваных гостей",
      price: 50
   },
   {
      id: "sensor-3",
      name: "Датчик протечки воды",
      img: "Datchik-protechki-vody_about",
      desc: "Узнавайте даже о незаметных протечках, чтобы вовремя их устранять",
      price: 50
   }
]


const closeModal = ( modal ) => {
   store.getState().modals[modal].show && store.dispatch( showModal( { modal, bool: false } ) )
}

export function toPlug( id ) {
   closeModal( 'tariff' )

   const element = document.querySelector( `#${ id } button` )

   const handleClick = () => element.classList.contains( 'collapsed' ) && element.click()

   scrollTo( element, handleClick )
}

export function scrollTo( element, callback = null ) {
   const maxScroll = document.body.scrollHeight - window.innerHeight
   const onScroll = () => {
      if ( Math.ceil( window.scrollY ) >= element.offsetTop || Math.ceil( window.scrollY ) === maxScroll ) {
         callback && callback()
         window.removeEventListener( 'scroll', onScroll )
      }
   }

   window.addEventListener( 'scroll', onScroll )

   onScroll()

   setTimeout( () => window.scrollTo( 0, element.offsetTop ), 0 )
}


const tariffs = {
   internet: {
      equipments: {
         androidtv,
         fr1000,
         mftv,
         almond,
         sim
      },
   },
   dvainet: {
      equipments: {
         androidtv,
         fr1000,
         mftv,
         almond,
         sim
      },
   },
   hit: {
      tvId: 2,
      equipments: {
         androidtv,
         fr1000,
         mftv,
         almond,
         sim
      }
   },
   their: {
      tvId: 3,
      dop_params: [
         'Аренда роутера за 0 ₽',
         'Безлимитный мобильный интернет на соц. сети и Youtube'
      ],
      equipments: {
         androidtv,
         fr1000,
         mftv,
         almond,
         sim
      },
      mftv: [
         start,
         mir
      ],
   },
   vse: {
      tvId: 3
   },
   turbo: {
      dop_params: [ 'Wi-Fi роутер в подарок' ],
      equipments: {
         fr1000,
      }
   },
   econom: {
      tvId: 1,
      equipments: {
         androidtv,
         fr100,
         mftv,
         almond,
         sim
      }
   },
   films: {
      equipments: {
         androidtv,
         fr100,
         mftv,
         almond,
         sim
      },
      mftv: [
         start,
         mir
      ],
   },
   maximum: {
      tvId: 4,
      equipments: {
         androidtv,
         fr1000,
         mftv,
         almond,
      },
   },
   premium: {
      tvId: 4,
      dop_params: [
         'Аренда роутера и ТВ-приставки за 0 ₽',
         'Безлимитный мобильный интернет на соц. сети и Youtube'
      ],
      equipments: {
         androidtv,
         fr1000,
         mftv,
         almond,
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
}

const tariffsSlice = createSlice( {
   name: 'tariffs',
   initialState: tariffs,
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

         const reducePrice = Object.values(equipments).map( eq => {
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
      setChannels( state, action ) {
         const id = action.payload.id
         const channels = action.payload.channels
         Object.values( state ).forEach( tariff => {
            if ( tariff.tvId === id ) {
               tariff.channels = channels
            }
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
            const tariff = payloadTariffs[key]
            const group = tariff.name.split( ' ' )[0]
            tariff.oldPrice = +tariff.price

            if ( group === 'Объединяй!' ) { // скидка
               tariff.price = Math.ceil( tariff.price * 0.5 )
            } else {
               tariff.price = Math.ceil( tariff.price * 0.7 )
            }

            data.set( key, { ...state[key], ...tariff } )
         }
         return Object.fromEntries( data )
      }
   },
   extraReducers: {
      [HYDRATE]: ( state, action ) => action.payload.tariffs
   },
} )

export const getChannels = ( tvId ) => async ( dispatch ) => {
   try {
      const res = await fetch( `https://home.megafon.ru/billing/bt/json/gettvchannelsbygroup?pack_id=${ tvId }` )
      const data = await res.json()
      dispatch( setChannels( data.packages[tvId] ) )
   } catch ( err ) {
      console.log( 'Ошибка getChannels', err )
   }
}


export const {
   optionSwitch,
   counterSim,
   tariffRadioPlan,
   sumTotalPrice,
   switchAlmond,
   counterAlmond,
   sumAlmondTotalPrice,
   changeAlmondTotalPrice,
   setChannels,
   setInitialStateTariffs
} = tariffsSlice.actions
export default tariffsSlice.reducer