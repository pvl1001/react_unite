import produce from "immer";
import {CHANGE_PLAN} from "../types";

const initialState = [
   {
      "id": "eq-android-tv",
      "name": "Android TV",
      "mark": "ГОД СЕРИАЛОВ В ПОДАРОК",
      "text": "Играйте в игры, смотрите видео, слушайте музыку и общайтесь с друзьями без каких-либо ограничений. Наслаждайтесь реалистичным качеством картинки.",
      "params": [
         {
            "icon": "fiolet_googleplay",
            "text": "1000+ приложений в Google Play"
         },
         {
            "icon": "fiolet_4k",
            "text": "Поддержка 4K UHD и HDR"
         },
         {
            "icon": "fiolet_voice-message",
            "text": "Голосовое управление"
         },
         {
            "icon": "fiolet_video",
            "text": "Google Chromecast"
         }
      ],
      "img": "pristavka",
      "price": 199,
      "dataView": "androidtv",
      "plan": [
         {name: '36 мес', value: 169, checked: true},
         {name: '24 мес', value: 249, checked: false}
      ]
   },
   {
      "id": "eq-FR100-1",
      "name": "Роутер FR100-1",
      "mark": "РАССРОЧКА",
      "text": "Мощный Wi-Fi роутер для стабильного интернета в любом уголке вашего дома. Привезем и настроим бесплатно.",
      "params": [
         {
            "icon": "fiolet_speed",
            "text": "Скорость до 100 Мбит/с"
         },
         {
            "icon": "fiolet_hertz",
            "text": "Диапазон частот 2,4 и 5 ГГц"
         },
         {
            "icon": "fiolet_mobile-internet",
            "text": "Возможность подключения 4G"
         },
         {
            "icon": "fiolet_zone",
            "text": "Зона покрытия до 70 м<sup>2</sup>"
         },
         {
            "icon": "fiolet_settings",
            "text": "Лёгкость настройки"
         },
         {
            "icon": "fiolet_block",
            "text": "Родительский контроль"
         }
      ],
      "img": "fr100",
      "price": 55,
      "dataView": "fr100",
      "plan": [
         {name: '36 мес', value: 99, checked: true},
         {name: '24 мес', value: 149, checked: false}
      ]
   },
   {
      "id": "eq-FR1000-2",
      "name": "Роутер FR1000-2",
      "speed": "(1 Гбит/с)",
      "mark": "РАССРОЧКА",
      "text": "Высокоскоростной Wi‑Fi‑роутер для стабильного интернета. Ловит по всему дому. Бесплатная доставка и настройка.",
      "params": [
         {
            "icon": "fiolet_speed",
            "text": "Скорость до 1 Гбит/с"
         },
         {
            "icon": "fiolet_hertz",
            "text": "Диапазон частот 2,4 и 5 ГГц"
         },
         {
            "icon": "fiolet_mobile-internet",
            "text": "Возможность подключения 4G"
         },
         {
            "icon": "fiolet_zone",
            "text": "Зона покрытия более 70 м<sup>2</sup>"
         },
         {
            "icon": "fiolet_router",
            "text": "4 внешние антенны MU‑MIMO"
         },
         {
            "icon": "fiolet_block",
            "text": "Родительский контроль"
         }
      ],
      "img": "fr1000-2",
      "price": 88,
      "dataView": "fr10002",
      "plan": [
         {name: '36 мес', value: 129, checked: true},
         {name: '24 мес', value: 199, checked: false}
      ]
   },
   {
      "id": "eq-MFTV",
      "name": "ТВ-приставка МегаФон ТВ",
      "mark": "РАССРОЧКА",
      "text": "Управляйте эфиром, перематывайте, ставьте на паузу – смотрите как удобно и когда удобно.",
      "params": [
         {
            "icon": "fiolet_umnyj-dom",
            "text": "Работает везде, где есть интернет"
         },
         {
            "icon": "fiolet_4k",
            "text": "Поддерживает видео UHD и HD"
         },
         {
            "icon": "fiolet_wi-fi",
            "text": "Подключается через Wi‑Fi"
         },
         {
            "icon": "fiolet_pult",
            "text": "Управляется Bluetooth‑пультом"
         }
      ],
      "img": "tv_new",
      "price": 99,
      "dataView": "mftv",
      "plan": [
         {name: '36 мес', value: 159, checked: true},
         {name: '24 мес', value: 139, checked: false}
      ]
   },
   {
      "id": "eq-almond",
      "name": "Умный дом",
      "text": "Wi-Fi роутер ModalAlmond с системой охраны дома.",
      "params": [
         "Настройте за несколько секунд",
         "Управляйте Wi-Fi через приложение",
         "Объедините устройства в умный дом",
         "Получайте сигналы, если в дом кто-то проникнет"
      ],
      "img": "almond",
      "price": "от 229",
      "icons": [
         {
            "icon": "settings",
            "text": "Настройте за несколько секунд"
         },
         {
            "icon": "phone",
            "text": "Управляйте Wi-Fi через приложение"
         },
         {
            "icon": "safety",
            "text": "Объедините устройства в умный дом"
         },
         {
            "icon": "message",
            "text": "Получайте сигналы,<br> если в дом кто-то проникнет"
         }
      ],
      "dataView": "almond",
      "routers": [
         {
            "id": "almond-0",
            "name": "Роутер ModalAlmond 3",
            "img": "ModalAlmond-3_about",
            "params": [
               {
                  "icon": "speed-2_w",
                  "text": "Скорость <br> до 300 Мбит/с"
               },
               {
                  "icon": "zone-24_w",
                  "text": "Зона покрытия <br> до 120 м<sup>2</sup>"
               },
               {
                  "icon": "hertz_24_w",
                  "text": "Диапазоны частот <br> 2,4 и 5 Ггц"
               }
            ],
            "price": 229,
            "totalPrice": 0,
            "cnt": 1,
            "status": false
         },
         {
            "id": "almond-1",
            "name": "Роутер ModalAlmond 3S",
            "img": "ModalAlmond-3S_about",
            "params": [
               {
                  "icon": "speed-2_w",
                  "text": "Скорость <br> до 300 Мбит/с"
               },
               {
                  "icon": "Whats-left_24",
                  "text": "Встроенный <br> аккумулятор"
               },
               {
                  "icon": "zone-24_w",
                  "text": "Зона покрытия <br> до 120 м<sup>2</sup>"
               },
               {
                  "icon": "Sim-card_24",
                  "text": "LTE <br> резервирование"
               },
               {
                  "icon": "hertz_24_w",
                  "text": "Диапазоны частот <br> 2,4 и 5 Ггц"
               }
            ],
            "price": 339,
            "totalPrice": 0,
            "cnt": 1,
            "status": false
         }
      ],
      "sensors": [
         {
            "id": "sensor-0",
            "name": "Wi-Fi камера",
            "img": "Wi-Fi-kamera_about",
            "desc": "Наблюдайте за происходящим дома в реальном времени, где бы вы ни были",
            "price": 120,
            "totalPrice": 0,
            "cnt": 1,
            "status": false
         },
         {
            "id": "sensor-1",
            "name": "Датчик движения",
            "img": "Datchik-dvizheniya_about",
            "desc": "Будьте в курсе любых передвижений в доме",
            "price": 50,
            "totalPrice": 0,
            "cnt": 1,
            "status": false
         },
         {
            "id": "sensor-2",
            "name": "Датчик открытия и закрытия",
            "img": "Datchik-otkrytiya-i-zakrytiya_about",
            "desc": "Будьте в курсе всех незваных гостей",
            "price": 50,
            "totalPrice": 0,
            "cnt": 1,
            "status": false
         },
         {
            "id": "sensor-3",
            "name": "Датчик протечки воды",
            "img": "Datchik-protechki-vody_about",
            "desc": "Узнавайте даже о незаметных протечках, чтобы вовремя их устранять",
            "price": 50,
            "totalPrice": 0,
            "cnt": 1,
            "status": false
         }
      ]
   }
]

export function equipmentsReducer(state = initialState, action) {
   switch (action.type) {

      case CHANGE_PLAN:
         return produce( state, setState => {
            setState
               .find( eq => eq.id === action.payload ).plan
               .map( p => p.checked = !p.checked )
         } )

      default:
         return state
   }
}