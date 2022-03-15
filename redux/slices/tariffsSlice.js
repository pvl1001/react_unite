import { createSlice } from '@reduxjs/toolkit'
import { store } from "../store";
import { showModal } from "./modalsSlice";
import produce from "immer";
import { HYDRATE } from 'next-redux-wrapper';


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


const initialState = [
   {
      id: 'for-their',
      tariffId: 5330,
      dataView: "their",
      name: "Для своих",
      marks: [ "Акция" ],
      speed: 500,
      min: 2100,
      web: "Безлимитный интернет",
      sale: "Скидка 40% на SIM-карты",
      infoProgress: [
         {
            title: "Мобильный интернет",
            value: "<span class='icon-infinity'></span> ГБ"
         },
         {
            title: "Звонки",
            value: "2100 минут"
         },
         {
            title: "Домашний&nbsp;<br>интернет",
            value: "500 Мбит/с"
         }
      ],
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
      oldPrice: 1300,
      price: 650,
      totalPrice: 650,
      iconInfo: <><span onClick={ () => toPlug( 'faq-0-0' ) } className="link">
         Скидка</span> на абонентскую плату действует 3 месяца после подключения</>,
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
      infoModal: [
         {
            title: "Мобильная связь",
            icon: "mob_bold",
            options: [
               {
                  name: "Мобильный интернет",
                  description: "",
                  value: "50 ГБ"
               },
               {
                  name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                  description: "",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на номера МегаФона России",
                  description: "Не расходуют пакет минут",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на мобильные номера других операторов России",
                  description: "",
                  value: "2100 минут"
               },
               {
                  name: "Интернет на социальные сети и YouTube",
                  description: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе. <br>Эти приложения не расходуют интернет по тарифу: WhatsApp, Viber, Telegram, eMotion, Facebook Messenger, ТамТам, Snapchat.",
                  value: "Безлимитно"
               },
               {
                  name: "SMS на номера России",
                  value: "50 сообщений"
               }
            ]
         },
         {
            title: "Интернет",
            icon: "wi-fi_bold",
            options: [
               {
                  name: "Скорость",
                  description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                  value: "500 Мбит/с"
               },
               {
                  name: "Трафик",
                  description: "",
                  value: "Безлимитно"
               }
            ]
         },
         {
            title: "ТВ",
            icon: "TV_bold",
            options: [
               {
                  name: "Мегафон ТВ",
                  description: "",
                  value: "188 каналов"
               },
               {
                  name: "Трафик",
                  description: "",
                  value: "Безлимитно"
               }
            ]
         }
      ],
      equipments: [
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
            switch: false,
            plan: [
               { name: '36 мес', value: 169, checked: true },
               { name: '24 мес', value: 249, checked: false }
            ],
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
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
            price: "0",
            dataView: "fr100",
            switch: true,
            plan: null
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
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
            price: "0",
            dataView: "fr1000",
            switch: true,
            plan: null
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
            price: "0",
            dataView: "mftv",
            switch: true,
            plan: null
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
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
         },
         {
            id: "equipment-sim",
            dataView: 'sim',
            oldPrice: 600,
            price: 360,
            cnt: 1,
            switch: false
         }
      ],
   },
   {
      id: 'two-web',
      tariffId: 5328,
      dataView: "dvainet",
      name: "Два интернета",
      marks: [ "Только нужное" ],
      speed: 200,
      min: 1200,
      web: "Безлимитный интернет",
      sale: "Скидка 40% на SIM-карты",
      infoProgress: [
         {
            title: "Мобильный интернет",
            value: "<span class='icon-infinity'></span> ГБ"
         },
         {
            title: "Звонки",
            value: "1200 минут"
         },
         {
            title: "Домашний&nbsp;<br>интернет",
            value: "200 Мбит/с"
         }
      ],
      tvId: null,
      oldPrice: null,
      price: 700,
      totalPrice: 700,
      iconInfo: <><span onClick={ () => toPlug( 'faq-0-1' ) } className="link">
         Скидка</span> на абонентскую плату действует 3 месяца после подключения</>,
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
      infoModal: [
         {
            title: "Мобильная связь",
            icon: "mob_bold",
            options: [
               {
                  name: "Мобильный интернет",
                  description: "",
                  value: "Безлимитно"
               },
               {
                  name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                  description: "",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на номера МегаФона России",
                  description: "Не расходуют пакет минут",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на мобильные номера других операторов России",
                  description: "",
                  value: "1200 минут"
               },
               {
                  name: "МегаДиск",
                  description: "Облачное хранилище для ваших фотографий и файлов",
                  value: "1 ТБ"
               }
            ]
         },
         {
            title: "Интернет",
            icon: "wi-fi_bold",
            options: [
               {
                  name: "Скорость",
                  description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                  value: "200 Мбит/с"
               },
               {
                  name: "Трафик",
                  description: "",
                  value: "Безлимитно"
               }
            ]
         }
      ],
      equipments: [
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
            switch: false,
            plan: [
               { name: '36 мес', value: 169, checked: true },
               { name: '24 мес', value: 249, checked: false }
            ],
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
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
            switch: false,
            plan: [
               { name: '36 мес', value: 99, checked: true },
               { name: '24 мес', value: 149, checked: false }
            ],
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
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
            dataView: "fr1000",
            switch: false,
            plan: [
               { name: '36 мес', value: 129, checked: true },
               { name: '24 мес', value: 199, checked: false }
            ],
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
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
         },
         {
            id: "equipment-sim",
            dataView: 'sim',
            oldPrice: 600,
            price: 360,
            cnt: 1,
            switch: false
         }
      ],
   },
   {
      id: 'hit',
      tariffId: 5329,
      dataView: "hit",
      name: "Хит",
      marks: [ "Популярное" ],
      speed: 300,
      min: 1500,
      web: "Безлимитный интернет",
      sale: "Скидка 40% на SIM-карты",
      infoProgress: [
         {
            title: "Мобильный интернет",
            value: "<span class='icon-infinity'></span> ГБ"
         },
         {
            title: "Звонки",
            value: "1500 минут"
         },
         {
            title: "Домашний&nbsp;<br>интернет",
            value: "300 Мбит/с"
         }
      ],
      tvId: 2,
      tvLength: "188 каналов",
      oldPrice: null,
      price: 850,
      totalPrice: 850,
      iconInfo: false,
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
      infoModal: [
         {
            title: "Мобильная связь",
            icon: "mob_bold",
            options: [
               {
                  name: "Мобильный интернет",
                  description: "",
                  value: "Безлимитно"
               },
               {
                  name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                  description: "",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на номера МегаФона России",
                  description: "Не расходуют пакет минут",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на мобильные номера других операторов России",
                  description: "",
                  value: "1500 минут"
               },
               {
                  name: "МегаДиск",
                  description: "Облачное хранилище для ваших фотографий и файлов",
                  value: "1 ТБ"
               }
            ]
         },
         {
            title: "Интернет",
            icon: "wi-fi_bold",
            options: [
               {
                  name: "Скорость",
                  description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                  value: "300 Мбит/с"
               },
               {
                  name: "Трафик",
                  description: "",
                  value: "Безлимитно"
               }
            ]
         },
         {
            title: "ТВ",
            icon: "TV_bold",
            options: [
               {
                  name: "Мегафон ТВ",
                  description: "",
                  value: "188 каналов"
               },
               {
                  name: "Трафик",
                  description: "",
                  value: "Безлимитно"
               }
            ]
         }
      ],
      equipments: [
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
            switch: false,
            plan: [
               { name: '36 мес', value: 169, checked: true },
               { name: '24 мес', value: 249, checked: false }
            ],
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
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
            switch: false,
            plan: [
               { name: '36 мес', value: 99, checked: true },
               { name: '24 мес', value: 149, checked: false }
            ],
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
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
            dataView: "fr1000",
            switch: false,
            plan: [
               { name: '36 мес', value: 129, checked: true },
               { name: '24 мес', value: 199, checked: false }
            ],
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
            switch: false,
            plan: [
               { name: '36 мес', value: 159, checked: true },
               { name: '24 мес', value: 239, checked: false }
            ],
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
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
         },
         {
            id: "equipment-sim",
            dataView: 'sim',
            oldPrice: 600,
            price: 360,
            cnt: 1,
            switch: false
         }
      ],
   },
   {
      id: 'films',
      tariffId: 5331,
      dataView: "films",
      name: "Кино и сериалы",
      marks: [],
      speed: 300,
      min: 1500,
      web: "Безлимитный интернет",
      sale: "Скидка 40% на SIM-карты",
      infoProgress: [
         {
            title: "Мобильный интернет",
            value: "<span class='icon-infinity'></span> ГБ"
         },
         {
            title: "Звонки",
            value: "1500 минут"
         },
         {
            title: "Домашний&nbsp;<br>интернет",
            value: "300 Мбит/с"
         }
      ],
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
      oldPrice: null,
      price: 850,
      totalPrice: 850,
      iconInfo: false,
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
      infoModal: [
         {
            title: "Мобильная связь",
            icon: "mob_bold",
            options: [
               {
                  name: "Мобильный интернет",
                  description: "",
                  value: "Безлимитно"
               },
               {
                  name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                  description: "",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на номера МегаФона России",
                  description: "Не расходуют пакет минут",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на мобильные номера других операторов России",
                  description: "",
                  value: "1500 минут"
               },
               {
                  name: "МегаДиск",
                  description: "Облачное хранилище для ваших фотографий и файлов",
                  value: "1 ТБ"
               }
            ]
         },
         {
            title: "Интернет",
            icon: "wi-fi_bold",
            options: [
               {
                  name: "Скорость",
                  description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                  value: "300 Мбит/с"
               },
               {
                  name: "Трафик",
                  description: "",
                  value: "Безлимитно"
               }
            ]
         }
      ],
      equipments: [
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
            switch: false,
            plan: [
               { name: '36 мес', value: 169, checked: true },
               { name: '24 мес', value: 249, checked: false }
            ],
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
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
            switch: false,
            plan: [
               { name: '36 мес', value: 99, checked: true },
               { name: '24 мес', value: 149, checked: false }
            ],
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
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
            dataView: "fr1000",
            switch: false,
            plan: [
               { name: '36 мес', value: 129, checked: true },
               { name: '24 мес', value: 199, checked: false }
            ],
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
            switch: false,
            plan: [
               { name: '36 мес', value: 159, checked: true },
               { name: '24 мес', value: 239, checked: false }
            ],
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
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
         },
         {
            id: "equipment-sim",
            dataView: 'sim',
            oldPrice: 600,
            price: 360,
            cnt: 1,
            switch: false
         }
      ]
   },
   {
      id: 'premium',
      tariffId: 5347,
      dataView: "premium",
      name: "Премиум",
      marks: [],
      speed: 500,
      min: 3000,
      web: "Безлимитный интернет",
      sale: "Скидка 40% на SIM-карты",
      infoProgress: [
         {
            title: "Мобильный интернет",
            value: "<span class='icon-infinity'></span> ГБ"
         },
         {
            title: "Звонки",
            value: "3000 минут"
         },
         {
            title: "Домашний&nbsp;<br>интернет",
            value: "500 Мбит/с"
         }
      ],
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
      oldPrice: null,
      price: 1900,
      totalPrice: 1900,
      iconInfo: false,
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
      infoModal: [
         {
            title: "Мобильная связь",
            icon: "mob_bold",
            options: [
               {
                  name: "Мобильный интернет",
                  description: "",
                  value: "50 ГБ"
               },
               {
                  name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                  description: "",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на номера МегаФона России",
                  description: "Не расходуют пакет минут",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на мобильные номера других операторов России",
                  description: "",
                  value: "3000 минут"
               },
               {
                  name: "Интернет на социальные сети и YouTube",
                  description: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе. <br>Эти приложения не расходуют интернет по тарифу: WhatsApp, Viber, Telegram, eMotion, Facebook Messenger, ТамТам, Snapchat.",
                  value: "Безлимитно"
               },
               {
                  name: "SMS на номера России",
                  value: "300 сообщений"
               }
            ]
         },
         {
            title: "Интернет",
            icon: "wi-fi_bold",
            options: [
               {
                  name: "Скорость",
                  description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                  value: "500 Мбит/с"
               },
               {
                  name: "Трафик",
                  description: "",
                  value: "Безлимитно"
               }
            ]
         },
         {
            title: "ТВ",
            icon: "TV_bold",
            options: [
               {
                  name: "Мегафон ТВ",
                  description: "",
                  value: "250 каналов"
               },
               {
                  name: "Трафик",
                  description: "",
                  value: "Безлимитно"
               }
            ]
         }
      ],
      equipments: [
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
            switch: false,
            plan: [
               { name: '36 мес', value: 169, checked: true },
               { name: '24 мес', value: 249, checked: false }
            ],
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
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
            price: "0",
            dataView: "fr100",
            switch: true,
            plan: null
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
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
            price: "0",
            dataView: "fr1000",
            switch: true,
            plan: null
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
            price: "0",
            dataView: "mftv",
            switch: true,
            plan: null
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
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
         },
         {
            id: "equipment-sim",
            dataView: 'sim',
            oldPrice: 600,
            price: 360,
            cnt: 1,
            switch: false
         }
      ],
   },
   {
      id: 'economic',
      tariffId: 5327,
      dataView: "econom",
      name: "Эконом",
      marks: [],
      speed: 100,
      min: 700,
      web: "30 ГБ",
      sale: "Скидка 40% на SIM-карты",
      infoProgress: [
         {
            title: "Мобильный интернет",
            value: "30 ГБ"
         },
         {
            title: "Звонки",
            value: "700 минут"
         },
         {
            title: "Домашний&nbsp;<br>интернет",
            value: "100 Мбит/с"
         }
      ],
      tvId: 1,
      tvLength: "61 канал",
      oldPrice: null,
      price: 650,
      totalPrice: 650,
      iconInfo: false,
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
      infoModal: [
         {
            title: "Мобильная связь",
            icon: "mob_bold",
            options: [
               {
                  name: "Мобильный интернет",
                  description: "",
                  value: "30 ГБ"
               },
               {
                  name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                  description: "",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на номера МегаФона России",
                  description: "Не расходуют пакет минут",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на мобильные номера других операторов России",
                  description: "",
                  value: "700 минут"
               },
               {
                  name: "МегаДиск",
                  description: "Облачное хранилище для ваших фотографий и файлов",
                  value: "1 ТБ"
               }
            ]
         },
         {
            title: "Интернет",
            icon: "wi-fi_bold",
            options: [
               {
                  name: "Скорость",
                  description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                  value: "100 Мбит/с"
               },
               {
                  name: "Трафик",
                  description: "",
                  value: "30 ГБ"
               }
            ]
         },
         {
            title: "ТВ",
            icon: "TV_bold",
            options: [
               {
                  name: "Мегафон ТВ",
                  description: "",
                  value: "61 канал"
               },
               {
                  name: "Трафик",
                  description: "",
                  value: "Безлимитно"
               }
            ]
         }
      ],
      equipments: [
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
            switch: false,
            plan: [
               { name: '36 мес', value: 169, checked: true },
               { name: '24 мес', value: 249, checked: false }
            ],
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
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
            switch: false,
            plan: [
               { name: '36 мес', value: 99, checked: true },
               { name: '24 мес', value: 149, checked: false }
            ],
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
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
            dataView: "fr1000",
            switch: false,
            plan: [
               { name: '36 мес', value: 129, checked: true },
               { name: '24 мес', value: 199, checked: false }
            ],
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
            switch: false,
            plan: [
               { name: '36 мес', value: 159, checked: true },
               { name: '24 мес', value: 239, checked: false }
            ],
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
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
         },
         {
            id: "equipment-sim",
            dataView: 'sim',
            oldPrice: 600,
            price: 360,
            cnt: 1,
            switch: false
         }
      ],
   },
   {
      id: 'around',
      tariffId: 3981,
      dataView: "vezde",
      name: "Везде",
      marks: [],
      speed: 150,
      min: 2100,
      web: "Безлимитный интернет",
      sale: null,
      infoProgress: [
         {
            title: "Мобильный интернет",
            value: "<span class='icon-infinity'></span> ГБ"
         },
         {
            title: "Звонки",
            value: "2100 минут"
         },
         {
            title: "Домашний&nbsp;<br>интернет",
            value: "150 Мбит/с"
         }
      ],
      tvId: 1,
      tvLength: "61 канал",
      oldPrice: null,
      price: 1400,
      totalPrice: 1400,
      priceSale: 960,
      iconInfo: false,
      rentDevice: [
         {
            text: "Аренда 4G Wi-Fi роутера",
            price: 100
         }
      ],
      infoModal: [
         {
            title: "Мобильная связь",
            icon: "mob_bold",
            options: [
               {
                  name: "Мобильный интернет",
                  description: "",
                  value: "Безлимитно"
               },
               {
                  name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                  description: "",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на номера МегаФона России",
                  description: "Не расходуют пакет минут",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на мобильные номера других операторов России",
                  description: "",
                  value: "2100 минут"
               },
               {
                  name: "МегаДиск",
                  description: "Облачное хранилище для ваших фотографий и файлов",
                  value: "1 ТБ"
               }
            ]
         },
         {
            title: "Интернет",
            icon: "wi-fi_bold",
            options: [
               {
                  name: "Скорость",
                  description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                  value: "150 Мбит/с"
               },
               {
                  name: "Трафик",
                  description: "",
                  value: "Безлимитно"
               }
            ]
         },
         {
            title: "ТВ",
            icon: "TV_bold",
            options: [
               {
                  name: "Мегафон ТВ",
                  description: "",
                  value: "61 канал"
               },
               {
                  name: "Трафик",
                  description: "",
                  value: "Безлимитно"
               }
            ]
         }
      ],
      equipments: [
         {
            id: "eq-unite",
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
            dataView: "router-4g",
            switch: true,
            plan: null
         }
      ],
   },
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

            currentTariff.totalPrice = currentTariff.equipments
               .map( eq => {
                  if ( eq.switch ) {
                     if ( eq.id === 'eq-almond' && eq.currentPrice ) {
                        return typeof eq.currentPrice === 'string'
                           ? parseInt( eq.currentPrice.match( /\d+/ ) )
                           : eq.currentPrice
                     }
                     if ( typeof eq.price === 'string' ) return parseInt( eq.price.match( /\d+/ ) )
                     if ( eq.id === 'equipment-sim' ) return eq.sumPrice || eq.price
                     if ( eq.plan ) return eq.plan.find( p => p.checked ).value
                     return eq.price
                  }
                  return 0
               } )
               .reduce( ( a, b ) => a + b, currentTariff.price )
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