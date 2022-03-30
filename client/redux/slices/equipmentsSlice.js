import { createSlice } from '@reduxjs/toolkit';


export const equipments = [
   {
      id: "eq-android-tv",
      name: "Android TV",
      mark: "ГОД СЕРИАЛОВ В ПОДАРОК",
      text: "Играйте в игры, смотрите видео, слушайте музыку и общайтесь с друзьями без каких-либо ограничений. Наслаждайтесь реалистичным качеством картинки.",
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
      dataView: "androidtv",
      link: "/uploads/docs/2020/ATV_KM8_user_manual_032021.pdf",
      plan: [
         { name: '36 мес', value: 169, checked: true },
         { name: '24 мес', value: 249, checked: false }
      ],
      switch: false
   },
   {
      id: "eq-FR100-1",
      name: "Роутер FR100-1",
      mark: "РАССРОЧКА",
      text: "Мощный Wi-Fi роутер для стабильного интернета в любом уголке вашего дома. Привезем и настроим бесплатно.",
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
      dataView: "fr100",
      link: "/uploads/docs/2020/MegaFon%20FR100.pdf",
      plan: [
         { name: '36 мес', value: 99, checked: true },
         { name: '24 мес', value: 149, checked: false }
      ],
      switch: false
   },
   {
      id: "eq-FR1000-2",
      name: "Роутер FR1000-2",
      speed: "(1 Гбит/с)",
      mark: "РАССРОЧКА",
      text: "Высокоскоростной Wi‑Fi‑роутер для стабильного интернета. Ловит по всему дому. Бесплатная доставка и настройка.",
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
      dataView: "fr10002",
      link: "/uploads/docs/2020/MegaFon%20FR1000.pdf",
      plan: [
         { name: '36 мес', value: 129, checked: true },
         { name: '24 мес', value: 199, checked: false }
      ],
      switch: false
   },
   {
      id: "eq-MFTV",
      name: "ТВ-приставка МегаФон ТВ",
      mark: "РАССРОЧКА",
      text: "Управляйте эфиром, перематывайте, ставьте на паузу – смотрите как удобно и когда удобно.",
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
      dataView: "mftv",
      link: "/uploads/docs/2020/MegaFon%20Q5.pdf",
      plan: [
         { name: '36 мес', value: 159, checked: true },
         { name: '24 мес', value: 139, checked: false }
      ],
      switch: false
   },
   {
      id: "eq-almond",
      name: "Умный дом",
      text: "Wi-Fi роутер Almond с системой охраны дома.",
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
      dataView: "almond",
      switch: false,
      equipments: []
   }
]


export const equipmentsSlice = createSlice( {
   name: 'equipments',
   initialState: equipments,
   reducers: {
      changePlan( state, action ) {
         state
            .find( eq => eq.id === action.payload.id ).plan
            .map( p => p.checked = !p.checked )
      },
      sumAlmondTotalPriceEq( state ) {
         const almond = state.find( eq => eq.id === 'eq-almond' )
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
         const almond = state.find( eq => eq.id === 'eq-almond' )

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
         const almond = state.find( eq => eq.id === 'eq-almond' )

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