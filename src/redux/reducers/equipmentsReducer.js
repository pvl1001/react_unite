import fiolet_googleplay from "../../img/svg/fiolet_googleplay.svg";
import fiolet_4k from "../../img/svg/fiolet_4k.svg";
import fiolet_voice_message from "../../img/svg/fiolet_voice-message.svg";
import fiolet_video from "../../img/svg/fiolet_video.svg";
import pristavka from "../../img/pic/pristavka.png";
import fiolet_speed from "../../img/svg/fiolet_speed.svg";
import fiolet_hertz from "../../img/svg/fiolet_hertz.svg";
import fiolet_mobile_internet from "../../img/svg/fiolet_mobile-internet.svg";
import fiolet_zone from "../../img/svg/fiolet_zone.svg";
import fiolet_settings from "../../img/svg/fiolet_settings.svg";
import fiolet_block from "../../img/svg/fiolet_block.svg";
import fr100 from "../../img/pic/fr100.png";
import fiolet_router from "../../img/svg/fiolet_router.svg";
import fr1000_2 from "../../img/pic/fr1000-2.png";
import fiolet_umnyj_dom from "../../img/svg/fiolet_umnyj-dom.svg";
import fiolet_wi_fi from "../../img/svg/fiolet_wi-fi.svg";
import fiolet_pult from "../../img/svg/fiolet_pult.svg";
import tv_new from "../../img/pic/tv_new.png";
import almond from "../../img/pic/almond.png";

const initialState = [
   {
      "id": "eq-android-tv",
      "name": "Android TV",
      "mark": "ГОД СЕРИАЛОВ В ПОДАРОК",
      "text": "Играйте в игры, смотрите видео, слушайте музыку и общайтесь с друзьями без каких-либо ограничений. Наслаждайтесь реалистичным качеством картинки.",
      "params": [
         {
            "icon": fiolet_googleplay,
            "text": "1000+ приложений в Google Play"
         },
         {
            "icon": fiolet_4k,
            "text": "Поддержка 4K UHD и HDR"
         },
         {
            "icon": fiolet_voice_message,
            "text": "Голосовое управление"
         },
         {
            "icon": fiolet_video,
            "text": "Google Chromecast"
         }
      ],
      "img": pristavka,
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
            "icon": fiolet_speed,
            "text": "Скорость до 100 Мбит/с"
         },
         {
            "icon": fiolet_hertz,
            "text": "Диапазон частот 2,4 и 5 ГГц"
         },
         {
            "icon": fiolet_mobile_internet,
            "text": "Возможность подключения 4G"
         },
         {
            "icon": fiolet_zone,
            "text": "Зона покрытия до 70 м<sup>2</sup>"
         },
         {
            "icon": fiolet_settings,
            "text": "Лёгкость настройки"
         },
         {
            "icon": fiolet_block,
            "text": "Родительский контроль"
         }
      ],
      "img": fr100,
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
            "icon": fiolet_speed,
            "text": "Скорость до 1 Гбит/с"
         },
         {
            "icon": fiolet_hertz,
            "text": "Диапазон частот 2,4 и 5 ГГц"
         },
         {
            "icon": fiolet_mobile_internet,
            "text": "Возможность подключения 4G"
         },
         {
            "icon": fiolet_zone,
            "text": "Зона покрытия более 70 м<sup>2</sup>"
         },
         {
            "icon": fiolet_router,
            "text": "4 внешние антенны MU‑MIMO"
         },
         {
            "icon": fiolet_block,
            "text": "Родительский контроль"
         }
      ],
      "img": fr1000_2,
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
            "icon": fiolet_umnyj_dom,
            "text": "Работает везде, где есть интернет"
         },
         {
            "icon": fiolet_4k,
            "text": "Поддерживает видео UHD и HD"
         },
         {
            "icon": fiolet_wi_fi,
            "text": "Подключается через Wi‑Fi"
         },
         {
            "icon": fiolet_pult,
            "text": "Управляется Bluetooth‑пультом"
         }
      ],
      "img": tv_new,
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
      "text": "Wi-Fi роутер Almond с системой охраны дома.",
      "params": [
         "Настройте за несколько секунд",
         "Управляйте Wi-Fi через приложение",
         "Объедините устройства в умный дом",
         "Получайте сигналы, если в дом кто-то проникнет"
      ],
      "img": almond,
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
            "name": "Роутер Almond 3",
            "img": "Almond-3_about.png",
            "params": [
               {
                  "icon": "speed-2_w.svg",
                  "text": "Скорость <br> до 300 Мбит/с"
               },
               {
                  "icon": "zone-24_w.svg",
                  "text": "Зона покрытия <br> до 120 м<sup>2</sup>"
               },
               {
                  "icon": "hertz_24_w.svg",
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
            "name": "Роутер Almond 3S",
            "img": "Almond-3S_about.png",
            "params": [
               {
                  "icon": "speed-2_w.svg",
                  "text": "Скорость <br> до 300 Мбит/с"
               },
               {
                  "icon": "Whats-left_24.svg",
                  "text": "Встроенный <br> аккумулятор"
               },
               {
                  "icon": "zone-24_w.svg",
                  "text": "Зона покрытия <br> до 120 м<sup>2</sup>"
               },
               {
                  "icon": "Sim-card_24.svg",
                  "text": "LTE <br> резервирование"
               },
               {
                  "icon": "hertz_24_w.svg",
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
            "img": "Wi-Fi-kamera_about.png",
            "desc": "Наблюдайте за происходящим дома в реальном времени, где бы вы ни были",
            "price": 120,
            "totalPrice": 0,
            "cnt": 1,
            "status": false
         },
         {
            "id": "sensor-1",
            "name": "Датчик движения",
            "img": "Datchik-dvizheniya_about.png",
            "desc": "Будьте в курсе любых передвижений в доме",
            "price": 50,
            "totalPrice": 0,
            "cnt": 1,
            "status": false
         },
         {
            "id": "sensor-2",
            "name": "Датчик открытия и закрытия",
            "img": "Datchik-otkrytiya-i-zakrytiya_about.png",
            "desc": "Будьте в курсе всех незваных гостей",
            "price": 50,
            "totalPrice": 0,
            "cnt": 1,
            "status": false
         },
         {
            "id": "sensor-3",
            "name": "Датчик протечки воды",
            "img": "Datchik-protechki-vody_about.png",
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
   switch(action.type) {
      default: return state
   }
}