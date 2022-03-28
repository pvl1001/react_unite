import { toPlug } from "../redux/slices/tariffsSlice";
import Link from 'next/link';
import { getEquipments } from '../redux/slices/tariffsSlice';


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
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
            plan: true
         },
      ] )
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
      equipments: []
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
      equipments: getEquipments( [
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2 (1 Гбит/с)",
            plan: null,
            price: null,
            switch: true
         },
      ] )
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
      equipments: getEquipments( [
         {
            id: "eq-android-tv"
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2 (1 Гбит/с)",
            plan: null,
            price: 10
         },
         {
            id: "eq-MFTV",
            plan: null,
            price: 10
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
            plan: true
         },
      ] )
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
               "question": "Специальные условия на тарифе «ДляДома Интернет»",
               "answer": "С 6 апреля 2021 года по 6 апреля 2022 года подключите #ДляДома\n" +
                  "Интернет и получите специальные условия на домашний интернет.<br>необходимо иметь SIM-карту МегаФона с любым тарифом, кроме «Домашний интернет», и подключить домашний интернет по тарифу «#ДляДома Интернет».<br>После подключения услуги для\n" +
                  "абонентов устанавливается специальная абонентская плата услуги.<br><a href=\"/uploads/docs/2020/usloviya_akcii_specialnye_usloviya_forhome.pdf\" target=\"_blank\">Подробные условия акции</a>"
            },
            {
               "question": "Специальные условия на тарифе «ДляДома Всё»",
               "answer": "С 4 октября 2021 по 1 октября 2022 года подключите домашний интернет «#ДляДома Всё» и получите растущую скидку. Чем дольше будете пользоваться, тем больше будет скидка:\n" +
                  "<br>— 5% первые 6 месяцев;\n" +
                  "<br>— 10% с 7-го по 18-й месяц;\n" +
                  "<br>— 15% с 19-го по 30-й месяц;\n" +
                  "<br>— 25% с 31-го по 60-й месяц;\n" +
                  "<br>— 50% с 61-го  месяца.\n" +
                  "<br><br>При смене тарифа скидка отключается."
            },
            {
               "question": "Специальные условия на тарифе «ДляДома Турбо»",
               "answer": "С 3 ноября 2021 по 01 ноября 2022 года подключите услугу #ДляДома Турбо вместе с покупкой Wi‑Fi‑роутера в рассрочку и получите ежемесячную скидку, равную стоимости платежа по рассрочке.<br>\n" +
                  "Акция действует только при первом подключении услуги и приобретении Wi‑Fi‑роутера 1 Гбит/с в рассрочку на 36 месяцев. При смене услуги или полной оплате стоимости оборудования, в том числе при досрочном погашении рассрочки, скидка отключается."
            },
            {
               "question": "Дополнительное оборудование — Wi-Fi-роутер",
               "answer": "Вы можете использовать свой роутер, но для стабильности сигнала мы\n" +
                  "рекомендуем пользоваться роутером FR1000-1 (1 Гбит/с):<br>— 4 внутренние антенны,\n" +
                  "которые работают в диапазонах 2,4 ГГц и 5 ГГц;<br>— удобный доступ по USB к вашим фото, видео\n" +
                  "и музыке;<br>— подключение 3G/4G модема;<br>— автоматическое обновление ПО.<br><br>Инструкции\n" +
                  "по настройке Wi-Fi-роутеров: <a href=\"https://moscow.megafon.ru/download/~federal/obedinyaj/router.pdf\" class=\"faq__text-link link\" target=\"_blank\">FR1000-1 (1 Гбит/с)</a> и <a href=\"https://moscow.megafon.ru/download/~federal/obedinyaj/router2.pdf\" class=\"faq__text-link link\" target=\"_blank\">FR100-1 (100 Мбит/с) </a>.<br><br>Если вы\n" +
                  "хотите взять или вернуть дополнительное оборудование, обратитесь в контактный центр по\n" +
                  "телефону <a href=\"tel:0500\" class=\"faq__text-link link\">0500</a>."
            }
         ]
      },
      {
         "col": [
            {
               "question": "Функции ТВ-приставки",
               "answer": "На ТВ-приставке МегаФон ТВ доступны следующие функции:<br>— управление\n" +
                  "эфиром: бесплатная перемотка, пауза, запись;<br>— родительский контроль, который вы можете\n" +
                  "активировать в разделе «Детям», чтобы ребёнок смотрел только детский контент;<br>— работа\n" +
                  "приставки по Wi-Fi: в комплект входит Bluetooth-пульт, для работы которого не требуется\n" +
                  "прямая видимость.<br><br>Наш специалист производит бесплатную настройку МегаФон ТВ на любых устройствах —  до 5 устройств на одном номере."
            },
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
   ],
   footer: 'Услуги предоставляются ООО «Нэт Бай Нэт Холдинг»и ПАО «МегаФон» на территории присутствия операторов при наличии технической возможности. Подробности на megafon.ru'
}
