import { createSlice } from '@reduxjs/toolkit'
import { store } from "../store";
import { showModal } from "./modalsSlice";
import produce from "immer";
import { HYDRATE } from 'next-redux-wrapper';
import { equipments } from "./equipmentsSlice";
import { tariffAround } from './tariffAroundSlice';


const sim = {
   id: "eq-sim",
   dataView: 'sim',
   oldPrice: 380,
   price: 228,
   cnt: 1,
   switch: false
}

export const getEquipments = arr => {
   let newArr = []
   arr.forEach( el => el.id === "eq-sim"
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

const iconInfo = <><span onClick={ () => toPlug( 'faq-0-0' ) } className="link">
         Скидка</span> на абонентскую плату при подключения до 01.05.2022</>


const initialState = [
   {
      id: 'for-their',
      tariffId: 5330,
      dataView: "their",
      name: "Для своих",
      marks: [ "Акция" ],
      web: 50,
      min: 2100,
      speed: 300,
      sale: "Скидка 40% на SIM-карты",
      mftv: [
         {
            name: "START",
            icon: "start",
            desc: "START подарил зрителям «Содержанок», «Бывших», «257 причин, чтобы жить», «Вампиров средней полосы», «Текст» и другие сериалы и фильмы, перевернувшие представление о том, каким может быть российский контент. Новинки кино и сериалов каждую неделю, эксклюзивные премьеры хитов проката — всё это START."
         },
         {
            name: "Мировое кино",
            icon: "mf-tv",
            desc: "Пакет «Мировое кино». 3478 фильмов, 729 сериалов."
         }
      ],
      tvId: 3,
      tvLength: "188 каналов",
      oldPrice: 950,
      price: 0,
      totalPrice: 650,
      get iconInfo() {
         return this.oldPrice && iconInfo
      },
      youtube: true,
      rentDevice: [
         {
            text: "Аренда ТВ-приставки",
            price: "0"
         },
         {
            text: "Аренда Android TV",
            price: 199
         },
         {
            text: "Аренда Wi-Fi роутера <nobr>(1 Гбит/с)</nobr>",
            price: "0"
         }
      ],
      equipments: getEquipments( [
         {
            id: "eq-android-tv"
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2 (1 Гбит/с)",
            plan: null,
            price: '0',
            switch: true
         },
         {
            id: "eq-MFTV",
            plan: null,
            price: '0',
            switch: true
         },
         {
            id: "eq-sim"
         }
      ] ),
      link: "/uploads/docs/2021/home/tariff_5609_chuvashia.pdf"
   },
   {
      id: 'two-web',
      tariffId: 5328,
      dataView: "dvainet",
      name: "Два интернета",
      marks: [],
      web: 30,
      min: 1200,
      speed: 100,
      sale: "Скидка 40% на SIM-карты",
      tvId: null,
      oldPrice: 600,
      price: 0,
      totalPrice: 700,
      get iconInfo() {
         return this.oldPrice && iconInfo
      },
      rentDevice: [
         {
            text: "Аренда Wi-Fi роутера <nobr>(1 Гбит/с)</nobr>",
            price: 99
         },
         {
            text: "Аренда Android TV",
            price: 199
         }
      ],
      equipments: getEquipments( [
         {
            id: "eq-android-tv"
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1 (100 Мбит/с)"
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2 (1 Гбит/с)"
         },
         { id: "eq-sim" }
      ] ),
      link: "/uploads/docs/2021/home/tariff_5608_chuvashia.pdf"
   },
   {
      id: 'hit',
      tariffId: 5329,
      dataView: "hit",
      name: "Хит",
      marks: [ "Популярное" ],
      web: 30,
      min: 1500,
      speed: 100,
      sale: "Скидка 40% на SIM-карты",
      tvId: 2,
      tvLength: "188 каналов",
      oldPrice: 700,
      price: 0,
      totalPrice: 850,
      get iconInfo() {
         return this.oldPrice && iconInfo
      },
      rentDevice: [
         {
            text: "Аренда ТВ-приставки",
            price: 159
         },
         {
            text: "Аренда Android TV",
            price: 199
         },
         {
            text: "Аренда Wi-Fi роутера <nobr>(1 Гбит/с)</nobr>",
            price: 99
         }
      ],
      equipments: getEquipments( [
         {
            id: "eq-android-tv"
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1 (100 Мбит/с)"
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2 (1 Гбит/с)"
         },
         {
            id: "eq-MFTV"
         },
         {
            id: "eq-sim"
         }
      ] ),
      link: "/uploads/docs/2021/home/tariff_5612_chuvashia.pdf"
   },
   {
      id: 'films',
      tariffId: 5331,
      dataView: "films",
      name: "Кино и сериалы",
      marks: [],
      web: 30,
      min: 1500,
      speed: 100,
      sale: "Скидка 40% на SIM-карты",
      mftv: [
         {
            name: "START",
            icon: "start",
            desc: "START подарил зрителям «Содержанок», «Бывших», «257 причин, чтобы жить», «Вампиров средней полосы», «Текст» и другие сериалы и фильмы, перевернувшие представление о том, каким может быть российский контент. Новинки кино и сериалов каждую неделю, эксклюзивные премьеры хитов проката — всё это START."
         },
         {
            name: "Мировое кино",
            icon: "mf-tv",
            desc: "Пакет «Мировое кино». 3478 фильмов, 729 сериалов."
         }
      ],
      tvId: null,
      tvLength: null,
      oldPrice: 700,
      price: 0,
      totalPrice: 850,
      get iconInfo() {
         return this.oldPrice && iconInfo
      },
      rentDevice: [
         {
            text: "Аренда ТВ-приставки",
            price: 159
         },
         {
            text: "Аренда Android TV",
            price: 199
         },
         {
            text: "Аренда Wi-Fi роутера <nobr>(1 Гбит/с)</nobr>",
            price: 99
         }
      ],
      equipments: getEquipments( [
         {
            id: "eq-android-tv"
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1 (100 Мбит/с)"
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2 (1 Гбит/с)"
         },
         {
            id: "eq-MFTV"
         },
         {
            id: "eq-sim"
         }
      ] ),
      link: "/uploads/docs/2021/home/tariff_5610_chuvashia.pdf"
   },
   {
      id: 'premium',
      tariffId: 5347,
      dataView: "premium",
      name: "Премиум",
      marks: [],
      web: 50,
      min: 2500,
      speed: 500,
      sale: "Скидка 40% на SIM-карты",
      mftv: [
         {
            name: "START",
            icon: "start",
            desc: "START подарил зрителям «Содержанок», «Бывших», «257 причин, чтобы жить», «Вампиров средней полосы», «Текст» и другие сериалы и фильмы, перевернувшие представление о том, каким может быть российский контент. Новинки кино и сериалов каждую неделю, эксклюзивные премьеры хитов проката — всё это START."
         },
         {
            name: "Мировое кино",
            icon: "mf-tv",
            desc: "Пакет «Мировое кино». 3478 фильмов, 729 сериалов."
         },
         {
            name: "Амедиатека",
            icon: "amediateka",
            desc: "AMEDIATEKA – это премьеры лучших сериалов планеты одновременно со всем миром. Вас ждут новинки и хиты ведущих студий мира, включая HBO, Showtime, CBS, Sky, LIONSGATE и др. «Игра Престолов», «Чернобыль», «Мир Дикого Запада», «Убивая Еву», «Миллиарды», «Секс в большом городе», «Эйфория», «Отыграть назад» - все это и многое другое можно смотреть в онлайн-сервисе AMEDIATEKA."
         },
         {
            name: "more.tv",
            icon: "more",
            desc: "Громкие эксклюзивные сериалы - ЧИКИ, Трудные подростки. Премьеры до эфира на ТВ и огромная библиотека главных российских телеканалов и мировых студий. Также только у нас смотрите премьеры нашумевших зарубежных сериалов – РАССКАЗ СЛУЖАНКИ, ФАРГО, ВЕЛИКАЯ и многое другое."
         }
      ],
      tvId: 4,
      tvLength: "250 каналов",
      oldPrice: 1500,
      price: 0,
      totalPrice: 1900,
      get iconInfo() {
         return this.oldPrice && iconInfo
      },
      youtube: true,
      rentDevice: [
         {
            text: "Аренда ТВ-приставки",
            price: 159
         },
         {
            text: "Аренда Android TV",
            price: 199
         },
         {
            text: "Аренда Wi-Fi роутера <nobr>(100 Мбит/с)</nobr>",
            price: 55
         }
      ],
      equipments: getEquipments( [
         {
            id: "eq-android-tv"
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2 (1 Гбит/с)",
            price: "0",
            plan: null,
            switch: true
         },
         {
            id: "eq-MFTV",
            price: "0",
            plan: null,
            switch: true
         },
         {
            id: "eq-sim"
         }
      ] ),
      link: "/uploads/docs/2021/home/tariff_5611_chuvashia.pdf"
   },
   {
      id: 'economic',
      tariffId: 5327,
      dataView: "econom",
      name: "Эконом",
      marks: [],
      web: 20,
      min: 700,
      speed: 100,
      sale: "Скидка 40% на SIM-карты",
      tvId: 1,
      tvLength: "61 канал",
      oldPrice: 550,
      price: 0,
      totalPrice: 650,
      get iconInfo() {
         return this.oldPrice && iconInfo
      },
      rentDevice: [
         {
            text: "Аренда ТВ-приставки",
            price: 159
         },
         {
            text: "Аренда Android TV",
            price: 199
         },
         {
            text: "Аренда Wi-Fi роутера <nobr>(100 Мбит/с)</nobr>",
            price: 99
         }
      ],
      equipments: getEquipments( [
         {
            id: "eq-android-tv"
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1 (100 Мбит/с)"
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2 (1 Гбит/с)"
         },
         {
            id: "eq-MFTV"
         },
         {
            id: "eq-sim"
         }
      ] ),
      link: "/uploads/docs/2021/home/tariff_5607_chuvashia.pdf"
   },
   tariffAround
]


export const tariffsSlice = createSlice( {
   name: 'tariffs',
   initialState,
   reducers: {
      optionSwitch( state, action ) {
         return produce( state, setState => {
            const id = action.payload.id
            const i = action.payload.index
            const checked = action.payload.checked
            const currentTariff = setState.find( tariff => tariff.id === id )
            const optionCard = currentTariff.equipments[i]
            optionCard.switch = checked
         } )
      },
      counterSim( state, action ) {
         return produce( state, setState => {
            const id = action.payload.id
            const i = action.payload.index
            const name = action.payload.name
            const optionCard = setState.find( tariff => tariff.id === id ).equipments[i]

            if ( name === 'plus' ) {
               optionCard.cnt++
               optionCard.switch = true
            }
            if ( name === 'minus' ) {
               optionCard.cnt--
            }
            optionCard.sumPrice = optionCard.price * optionCard.cnt
            optionCard.sumOldPrice = optionCard.oldPrice * optionCard.cnt
         } )
      },
      tariffRadioPlan( state, action ) {
         return produce( state, setState => {
            const id = action.payload.id
            const i = action.payload.index
            const cardOption = setState.find( tariff => tariff.id === id ).equipments[i]
            cardOption.plan.map( p => p.checked = !p.checked )
            cardOption.price = cardOption.plan.find( p => p.checked ).value
         } )
      },
      sumTotalPrice( state, action ) {
         return produce( state, setState => {
            const id = action.payload.id
            const currentTariff = setState.find( tariff => tariff.id === id )

            const reducePrice = currentTariff.equipments
               .map( eq => {
                  if ( eq.switch ) {
                     if ( eq.id === 'eq-almond' && eq.currentPrice ) {
                        return typeof eq.currentPrice === 'string'
                           ? parseInt( eq.currentPrice.match( /\d+/ ) )
                           : eq.currentPrice
                     }
                     if ( typeof eq.price === 'string' ) return parseInt( eq.price.match( /\d+/ ) )
                     if ( eq.id === 'eq-sim' ) return eq.sumPrice || eq.price
                     if ( eq.plan ) return eq.plan.find( p => p.checked ).value
                     return eq.price
                  }
                  return 0
               } )
               .reduce( ( a, b ) => a + b )
            currentTariff.totalPrice = currentTariff.price + reducePrice
            currentTariff.totalOldPrice = currentTariff.oldPrice + reducePrice
         } )
      },
      switchAlmond( state, action ) {
         return produce( state, setState => {

            const data = action.payload.data
            const checked = action.payload.checked
            const cnt = action.payload.cnt
            const id = action.payload.tariffID

            const almond = setState
               .find( tariff => tariff.id === id ).equipments
               .find( eq => eq.id === 'eq-almond' )

            almond.equipments[data.index] = { ...data, cnt, checked }
         } )
      },
      counterAlmond( state, action ) {
         return produce( state, setState => {
            let cnt = action.payload.cnt
            const name = action.payload.name
            const data = action.payload.data
            const id = action.payload.tariffID
            const currentTariff = setState.find( tariff => tariff.id === id )
            const almond = currentTariff.equipments.find( eq => eq.id === 'eq-almond' )

            if ( name === 'plus' ) {
               almond.equipments[data.index] = { ...data, cnt: ++cnt, checked: true }
            }
            if ( name === 'minus' ) {
               almond.equipments[data.index] = { ...almond.equipments[data.index], cnt: --cnt }
            }
         } )
      },
      sumAlmondTotalPrice( state, action ) {
         return produce( state, setState => {

            const almond = setState
               .find( tariff => tariff.id === action.payload ).equipments
               .find( eq => eq.id === 'eq-almond' )

            const arrPrices = almond.equipments
               .filter( alEq => alEq.checked )
               .map( alEq => alEq.price * alEq.cnt )

            almond.totalPrice = arrPrices.length
               ? arrPrices.reduce( ( a, b ) => a + b )
               : null
         } )
      },
      changeAlmondTotalPrice( state, action ) {
         return produce( state, setState => {
            const id = action.payload.id
            const i = action.payload.index
            const almond = setState.find( tariff => tariff.id === id ).equipments[i]
            almond.currentPrice = almond.totalPrice || almond.price
         } )
      },
      setChannels( state, action ) {
         return produce( state, setState => {
            const id = action.payload.id
            const channels = action.payload.channels
            setState.forEach( tariff => {
               if ( tariff.tvId === id ) {
                  tariff.channels = channels
               }
            } )
         } )
      },
      setInitialStateTariffs( state, action ) {
         return action.payload
      }
   },
   extraReducers: {
      [HYDRATE]: ( state, action ) => {
         return action.payload.tariffs
      },
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