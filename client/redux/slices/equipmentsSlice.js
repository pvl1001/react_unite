import { createSlice } from '@reduxjs/toolkit';


export const equipments = {
   androidtv: {
      id: "androidtv",
      name: "Android TV",
      marks: [
         {
            "text": "Год сериалов в подарок",
            "color": "var(--mf-fiolet)"
         },
         {
            "text": "Рассрочка",
            "color": "var(--mf-blue)"
         }
      ],
      text: "Мощный Wi-Fi-роутер для стабильного интернет... ",
      params: [
         {
            icon: "fiolet_googleplay",
            text: "1000+ приложений в Google Play"
         },
         {
            icon: "fiolet_4k",
            text: "Поддержка 4K UHD и HDR"
         },
         {
            icon: "fiolet_voice-message",
            text: "Голосовое управление"
         },
         {
            icon: "fiolet_video",
            text: "Google Chromecast"
         }
      ],
      img: "pristavka",
      price: 199,
      link: "/uploads/docs/2020/ATV_KM8_user_manual_032021.pdf",
      plan: [
         { name: '36 мес', value: 169, checked: true },
         { name: '24 мес', value: 249, checked: false }
      ],
      switch: false
   },
   fr100: {
      id: "fr100",
      name: "Роутер FR100-1",
      marks: [
         {
            "text": "до 70 м2",
            "color": "var(--mf-orange)"
         },
         {
            "text": "Рассрочка",
            "color": "var(--mf-blue)"
         }
      ],
      text: "Мощный Wi-Fi роутер для стабильного интернета... ",
      params: [
         {
            icon: "fiolet_speed",
            text: "Скорость до 100 Мбит/с"
         },
         {
            icon: "fiolet_hertz",
            text: "Диапазон частот 2,4 и 5 ГГц"
         },
         {
            icon: "fiolet_mobile-internet",
            text: "Возможность подключения 4G"
         },
         {
            icon: "fiolet_zone",
            text: "Зона покрытия до 70 м<sup>2</sup>"
         },
         {
            icon: "fiolet_settings",
            text: "Лёгкость настройки"
         },
         {
            icon: "fiolet_block",
            text: "Родительский контроль"
         }
      ],
      img: "fr100",
      price: 55,
      link: "/uploads/docs/2020/MegaFon%20FR100.pdf",
      plan: [
         { name: '36 мес', value: 99, checked: true },
         { name: '24 мес', value: 149, checked: false }
      ],
      switch: false
   },
   fr1000: {
      id: "fr1000",
      name: "Роутер FR1000-2",
      speed: "(1 Гбит/с)",
      marks: [
         {
            "text": "более 70 м2",
            "color": "var(--mf-orange)"
         },
         {
            "text": "Рассрочка",
            "color": "var(--mf-blue)"
         }
      ],
      text: "Высокоскоростной Wi‑Fi‑роутер для стабильного интернета... ",
      params: [
         {
            icon: "fiolet_speed",
            text: "Скорость до 1 Гбит/с"
         },
         {
            icon: "fiolet_hertz",
            text: "Диапазон частот 2,4 и 5 ГГц"
         },
         {
            icon: "fiolet_mobile-internet",
            text: "Возможность подключения 4G"
         },
         {
            icon: "fiolet_zone",
            text: "Зона покрытия более 70 м<sup>2</sup>"
         },
         {
            icon: "fiolet_router",
            text: "4 внешние антенны MU‑MIMO"
         },
         {
            icon: "fiolet_block",
            text: "Родительский контроль"
         }
      ],
      img: "fr1000-2",
      price: 88,
      link: "/uploads/docs/2020/MegaFon%20FR1000.pdf",
      plan: [
         { name: '36 мес', value: 129, checked: true },
         { name: '24 мес', value: 199, checked: false }
      ],
      switch: false
   },
   mftv: {
      id: "mftv",
      name: "ТВ-приставка МегаФон ТВ",
      marks: [
         {
            "text": "Год сериалов в подарок",
            "color": "var(--mf-fiolet)"
         },
         {
            "text": "Рассрочка",
            "color": "var(--mf-blue)"
         }
      ],
      text: "Управляйте эфиром, перематывайте, ставьте на паузу... ",
      params: [
         {
            icon: "fiolet_umnyj-dom",
            text: "Работает везде, где есть интернет"
         },
         {
            icon: "fiolet_4k",
            text: "Поддерживает видео UHD и HD"
         },
         {
            icon: "fiolet_wi-fi",
            text: "Подключается через Wi‑Fi"
         },
         {
            icon: "fiolet_pult",
            text: "Управляется Bluetooth‑пультом"
         }
      ],
      img: "tv_new",
      price: 99,
      link: "/uploads/docs/2020/MegaFon%20Q5.pdf",
      plan: [
         { name: '36 мес', value: 159, checked: true },
         { name: '24 мес', value: 139, checked: false }
      ],
      switch: false
   },
   almond: {
      id: "almond",
      name: "Умный дом",
      marks: [
         {
            "text": "Умный дом",
            "color": "var(--mf-fiolet)"
         },
         {
            "text": "Рассрочка",
            "color": "var(--mf-blue)"
         }
      ],
      text: "Wi-Fi роутер Almond с системой охраны дома... ",
      params: [
         "Настройте за несколько секунд",
         "Управляйте Wi-Fi через приложение",
         "Объедините устройства в умный дом",
         "Получайте сигналы, если в дом кто-то проникнет"
      ],
      img: "almond",
      price: "от 229",
      icons: [
         {
            icon: "settings",
            text: "Настройте за несколько секунд"
         },
         {
            icon: "phone",
            text: "Управляйте Wi-Fi через приложение"
         },
         {
            icon: "safety",
            text: "Объедините устройства в умный дом"
         },
         {
            icon: "message",
            text: "Получайте сигналы,<br> если в дом кто-то проникнет"
         }
      ],
      switch: false,
      equipments: []
   },
   sim: {
      id: "sim",
      oldPrice: 380,
      get price() {
         return this.oldPrice * 0.6
      },
      cnt: 1,
      switch: false
   },
   router_4g: {
      id: "router-4g",
      name: "4G Wi-Fi роутер",
      params: [
         {
            icon: "fiolet_speed",
            text: "Скорость до 150 Мбит/с"
         },
         {
            icon: "fiolet_hertz",
            text: "Wi-Fi 2,4 и 5 ГГц"
         },
         {
            icon: "fiolet_zone",
            text: "Уверенный сигнал и большая зона покрытия"
         },
         {
            icon: "fiolet_settings",
            text: "Простое подключение до 50 пользователей"
         },
         {
            icon: "fiolet_razmer",
            text: "Компактные размеры"
         }
      ],
      img: "router_info",
      price: 200,
      switch: true,
      plan: null,
      link: "/download/~federal/~federal/oferta/wi_fi/rukovodstvo_polzovatelya.pdf"
   }
}

const { androidtv, fr100, fr1000, mftv } = equipments


export const equipmentsSlice = createSlice( {
   name: 'equipments',
   initialState: { androidtv, fr100, fr1000, mftv },
   reducers: {
      changePlan( state, action ) {
         const { id } = action.payload
         state[id].plan.forEach( p => p.checked = !p.checked )
      },
      sumAlmondTotalPriceEq( state ) {
         const { almond } = state
         const arrPrices = almond.equipments
            .filter( alEq => alEq.checked )
            .map( alEq => alEq.price * alEq.cnt )

         almond.totalPrice = arrPrices.length
            ? arrPrices.reduce( ( a, b ) => a + b )
            : null
      },
      counterAlmondEq( state, action ) {
         let cnt = action.payload.cnt
         const name = action.payload.name
         const data = action.payload.data
         const { almond } = state

         if ( name === 'plus' ) {
            almond.equipments[data.index] = { ...data, cnt: ++cnt, checked: true }
         }
         if ( name === 'minus' ) {
            almond.equipments[data.index] = { ...almond.equipments[data.index], cnt: --cnt }
         }
      },
      switchAlmondEq( state, action ) {
         const data = action.payload.data
         const checked = action.payload.checked
         const cnt = action.payload.cnt
         const { almond } = state

         almond.equipments[data.index] = { ...data, cnt, checked }
      }
   }
} )


export const {
   changePlan,
   sumAlmondTotalPriceEq,
   counterAlmondEq,
   switchAlmondEq
} = equipmentsSlice.actions
export default equipmentsSlice.reducer