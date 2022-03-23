import { toPlug } from "../redux/slices/tariffsSlice";
import Link from 'next/link';


export const tariffsPageHome = [
   {
      id: "internet",
      tariffId: 4271,
      dataView: "internet",
      name: "Интернет",
      marks: [ "Акция" ],
      sale: "Скидка 40% на SIM-карты",
      speed: 100,
      oldPrice: 399,
      price: 350,
      iconInfo: true,
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
         }
      ]
   },
   {
      id: "vse",
      tariffId: 4273,
      dataView: "vse",
      name: "Всё",
      marks: [ "Акция" ],
      sale: "Скидка 40% на SIM-карты",
      speed: 100,
      tvId: 6,
      tvLength: "188 каналов",
      oldPrice: 550,
      price: 275,
      iconInfo: true,
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
         }
      ]
   },
   {
      id: "turbo",
      tariffId: 4276,
      dataView: "turbo",
      name: "Турбо",
      marks: [
         "Акция",
         "Роутер в подарок"
      ],
      sale: "Скидка 40% на SIM-карты",
      speed: 500,
      price: 600,
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
      equipments: [
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
            speed: "(1 Гбит/с)",
            mark: "",
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
            price: null,
            dataView: "fr1000",
            switch: true,
            plan: null
         }
      ]
   },
   {
      id: "premium",
      tariffId: 4275,
      dataView: "maximum",
      name: "Максимум",
      marks: [],
      sale: "Скидка 40% на SIM-карты",
      speed: 300,
      tvId: 7,
      tvLength: "250 каналов",
      price: 950,
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
            price: 10,
            dataView: "fr100",
            switch: false,
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
            price: 10,
            dataView: "fr1000",
            switch: false,
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
            price: 10,
            dataView: "mftv",
            switch: false,
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
         }
      ]
   }
]

export const templateIconInfo = {
   internet: <>Для участия в <span onClick={ () => toPlug( 'faq-0-0' ) } className="link">
      Акции</span> необходимо быть абонентом МегаФон и подключить услугу ДляДома</>,
   vse: <>С учетом <Link href="/internetvse"><a>скидки</a></Link> 50% с 61 месяца</>
}

export default {
   name: '#ДляДома',
   tariffDefault: 'turbo',
   header: {
      title: 'Цена меньше',
      titleBr: ' с каждым днём',
      desc: 'Подключай интернет и ТВ',
      img: {
         desktop: '/images/headerHome/head_banner_desktop.webp',
         mobile: '/images/headerHome/head_banner_mob.webp'
      }
   },
   FAQ: [
      {
         "col": [
            {
               "question": "Специальные условия на домашний интернет",
               "answer": "С 4 октября 2021 по 1 октября 2022 года подключите тариф #ДляДома Всё и получите растущую скидку. Чем дольше будете пользоваться тарифом, тем больше будет скидка!<br>\n — 5% первые 6 месяцев.<br>\n — 10% с 7-го по 18-й месяц;<br>\n— 15% с 19-го по 30-й месяц;<br>\n — 25% с 31-го по 60-й месяц;<br>\n — 50% с 61-го месяца.<br><br>\n При смене тарифа скидка отключается."
            },
            {
               "question": "Дополнительное оборудование (Wi-Fi роутер)",
               "answer": "Вы можете использовать свой роутер, но для стабильности сигнала мы\n" +
                  " рекомендуем пользоваться роутером FR1000-1 (1 Гбит/с):<br>— 4 внутренние антенны,\n" +
                  " которые работают в диапазонах 2,4 ГГц и 5 ГГц;<br>— удобный доступ по USB к вашим фото, видео\n" +
                  " и музыке;<br>— подключение 3G/4G модема;<br>— автоматическое обновление ПО.<br><br>Инструкции\n" +
                  " по настройке Wi-Fi-роутеров: <a href=\"https://moscow.megafon.ru/download/~federal/obedinyaj/router.pdf\" class=\"faq__text-link link\" target=\"_blank\">FR1000-1 (1 Гбит/с)</a> и <a href=\"https://moscow.megafon.ru/download/~federal/obedinyaj/router2.pdf\" class=\"faq__text-link link\" target=\"_blank\">FR100-1 (100 Мбит/с) </a>.<br><br>Если вы\n" +
                  " хотите взять или вернуть дополнительное оборудование, обратитесь в контактный центр по\n" +
                  " телефону <a href=\"tel:0500\" class=\"faq__text-link link\">0500</a>."
            },
            {
               "question": "Функции ТВ-приставки",
               "answer": "На ТВ-приставке МегаФон ТВ доступны следующие функции:<br>— управление\n" +
                  " эфиром: бесплатная перемотка, пауза, запись;<br>— родительский контроль, который вы можете\n" +
                  " активировать в разделе «Детям», чтобы ребёнок смотрел только детский контент;<br>— работа\n" +
                  " приставки по Wi-Fi: в комплект входит Bluetooth-пульт, для работы которого не требуется\n" +
                  " прямая видимость.<br><br>Наш специалист производит бесплатную настройку МегаФон ТВ на любых устройствах —  до 5 устройств на одном номере."
            }
         ]
      },
      {
         "col": [
            {
               "question": "Подключение к домашнему интернету",
               "answer": "Подключение к домашнему интернету осуществляется в удобное для вас время по технологии Ethernet. Наш специалист проведёт все необходимые работы под ключ."
            },
            {
               "question": "Подробнее о домашнем интернете #ДляДома",
               "answer": "<a target=\"_blank\" href=\"/uploads/docs/2020/oferta_for_home.pdf\">Скачать полные условия оказания услуги</a>"
            }
         ]
      }
   ]
}
