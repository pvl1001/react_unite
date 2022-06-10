import { createSlice } from '@reduxjs/toolkit';
import { store } from "../store";
import { showModal } from "./modalsSlice";
import { HYDRATE } from 'next-redux-wrapper';
import { equipments } from "./equipmentsSlice";
import { tariffAround } from './tariffAroundSlice';


const sim = {
   id: "sim",
   oldPrice: 380,
   price: 228,
   cnt: 1,
   switch: false
}

export const getEquipments = arr => {
   let newArr = []
   arr.forEach( el => el.id === "sim"
      ? newArr = [ ...newArr, sim ]
      : newArr = [ ...newArr, { ...equipments.find( eq => eq.id === el.id ), ...el } ]
   )
   return newArr
}

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


const initialState = {
   hit: { tvId: 2 },
   their: {
      tvId: 3,
      dop_params: [
         'Аренда роутера за 0 ₽',
         'Безлимитный мобильный интернет на соц. сети и Youtube'
      ]
   },
   vse: {
      tvId: 3
   },
   turbo: {
      dop_params: [ 'Wi-Fi роутер в подарок' ] },
   econom: {
      tvId: 1 },
   maximum: {
      tvId: 4},
   premium: {
      tvId: 4,
      dop_params: [
         'Аренда роутера и ТВ-приставки за 0 ₽',
         'Безлимитный мобильный интернет на соц. сети и Youtube'
      ]
   }
         }

const tariffsSlice = createSlice( {
   name: 'tariffs',
   initialState,
   reducers: {
      optionSwitch( state, action ) {
         const id = action.payload.id
         const i = action.payload.index
         const checked = action.payload.checked
         const currentTariff = state[id]
         const optionCard = currentTariff.equipments[i]
         optionCard.switch = checked
      },
      counterSim( state, action ) {
         const id = action.payload.id
         const i = action.payload.index
         const name = action.payload.name
         const optionCard = state[id].equipments[i]

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
         const id = action.payload.id
         const i = action.payload.index
         const cardOption = state[id].equipments[i]
         cardOption.plan.map( p => p.checked = !p.checked )
         cardOption.price = cardOption.plan.find( p => p.checked ).value
      },
      sumTotalPrice( state, action ) {
         const id = action.payload.id
         const currentTariff = state[id]

         const reducePrice = currentTariff.equipments
            .map( eq => {
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
         currentTariff.totalPrice = currentTariff.price + reducePrice
         currentTariff.totalOldPrice = currentTariff.oldPrice + reducePrice
      },
      switchAlmond( state, action ) {
         const data = action.payload.data
         const checked = action.payload.checked
         const cnt = action.payload.cnt
         const id = action.payload.tariffID

         const almond = state[id].equipments.find( eq => eq.id === 'almond' )

         almond.equipments[data.index] = { ...data, cnt, checked }
      },
      counterAlmond( state, action ) {
         let cnt = action.payload.cnt
         const name = action.payload.name
         const data = action.payload.data
         const id = action.payload.tariffID
         const currentTariff = state[id]
         const almond = currentTariff.equipments.find( eq => eq.id === 'almond' )

         if ( name === 'plus' ) {
            almond.equipments[data.index] = { ...data, cnt: ++cnt, checked: true }
         }
         if ( name === 'minus' ) {
            almond.equipments[data.index] = { ...almond.equipments[data.index], cnt: --cnt }
         }
      },
      sumAlmondTotalPrice( state, action ) {
         const almond = state
            .find( tariff => tariff.id === action.payload ).equipments
            .find( eq => eq.id === 'almond' )

         const arrPrices = almond.equipments
            .filter( alEq => alEq.checked )
            .map( alEq => alEq.price * alEq.cnt )

         almond.totalPrice = arrPrices.length
            ? arrPrices.reduce( ( a, b ) => a + b )
            : null
      },
      changeAlmondTotalPrice( state, action ) {
         const id = action.payload.id
         const i = action.payload.index
         const almond = state[id].equipments[i]
         almond.currentPrice = almond.totalPrice || almond.price
      },
      setChannels( state, action ) {
         // debugger
         const id = action.payload.id
         const channels = action.payload.channels
         Object.values(state).forEach( tariff => {
            if ( tariff.tvId === id ) {
               tariff.channels = channels
            }
         } )
      },
      setInitialStateTariffs( state, action ) {
         const tariffs = action.payload
         const dvainet = tariffs[101]
         const econom = tariffs[102]
         const hit = tariffs[103]
         const their = tariffs[104]
         const films = tariffs[105]
         const premium = tariffs[106]
         const vezde = tariffs[55]

         const internet = tariffs[201]
         const turbo = tariffs[202]
         const vse = tariffs[203]
         const maximum = tariffs[204]


         return {
            internet: {...state.internet, ...internet},
            dvainet: {...state.dvainet, ...dvainet},
            hit: {...state.hit, ...hit},
            their: {...state.their, ...their},
            vse: {...state.vse, ...vse},
            turbo: {...state.turbo, ...turbo},
            econom: {...state.econom, ...econom},
            films: {...state.internet, ...internet},
            maximum: {...state.maximum, ...maximum},
            premium: {...state.premium, ...premium},
            vezde: {...state.vezde, ...vezde},
         }
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