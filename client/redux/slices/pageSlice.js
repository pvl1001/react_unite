import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { stateMegaTariff } from './megaTariffSlice';

const initialState = {
   region: {
      name: "Москва и область",
      id: 1
   },
   name: 'Объединяй!',
   tariffDefault: 'for-their',
   header: {
      title: 'Домашний интернет,',
      titleBr: ' ТВ и связь',
      desc: 'В тарифах «Объединяй!»',
      img: {
         desktop: '/images/header/head_banner_desktop.png',
         mobile: '/images/header/head_banner_mob.png',
      }
   },
   FAQ: [
      {
         "col": [
            {
               "question": "Скидка для новых абонентов тарифов «Объединяй!»",
               "answer":
                  "                           <p class=\"faq__text\">С 28 февраля по 1 мая 2022 года вы можете получить скидку 100 % на абонентскую плату по тарифу линейки Объединяй! на первый месяц.</p> \n" +
                  "                           <p class=\"faq__text\">Акция не распространяется на тариф «Объединяй! Везде» и действует только при первом подключении тарифа.</p>\n"
            },
            {
               "question": `Скидка на тариф «Без переплат. ${ stateMegaTariff.name }»`,
               "answer": `Подключите своим близким тариф «Без переплат. ${ stateMegaTariff.name }» со скидкой 40% на абонентскую плату. Для заказа\n               SIM-карт позвоните по номеру 8 800 550-00-01 (максимум 10 SIM-карт). <br>\n               <a class=\"text-link link\" href=\"#\"\n                  target=\"_blank\">Скачать подробную информацию о тарифе</a>`
            },
            {
               "question": "Подключение к домашнему интернету",
               "answer": " Подключение к домашнему интернету осуществляется в удобное для вас время по технологиям Ethernet. Наш специалист проведёт все необходимые работы под ключ."
            },
            {
               "question": "Дополнительное оборудование (Wi-Fi роутер)",
               "answer": "Вы можете использовать свой роутер, но для стабильности сигнала мы рекомендуем\n                     пользоваться роутером fr1000-1 (1 Гбит/с): <br>\n                     — 4 внутренние Wi-Fi антенны, которые работают в диапазонах 2,4 ГГц и 5 ГГц;<br>\n                     — удобный доступ по USB к вашим фото, видео и музыке;<br>\n                     — подключение 3G/4G модема;<br>\n                     — автоматическое обновление ПО. <br>\n                     <br>\n                     Инструкции по настройке Wi-Fi роутеров:\n                     <a href=\"https://moscow.megafon.ru/download/~federal/obedinyaj/router.pdf\" class=\"text-link link\" target=\"_blank\">fr1000-1 (1 Гбит/с)</a>\n                     и\n                     <a href=\"https://moscow.megafon.ru/download/~federal/obedinyaj/router2.pdf\" class=\"text-link link\" target=\"_blank\">FR100-1 (100 Мбит/с)\n                     </a>.<br>\n                     <br>\n                     Если вы хотите взять или вернуть дополнительное оборудование, обратитесь в контактный\n                     центр по телефону\n                     <a href=\"tel:0500\" class=\"text-link link\">0500</a>."
            },
            {
               "question": "Функции ТВ-приставки",
               "answer": "На ТВ-приставке МегаФон ТВ доступны следующие функции: <br>\n                     — управление эфиром: бесплатная перемотка, пауза, запись;<br>\n                     — родительский контроль, который вы можете активировать в разделе «Детям», чтобы ребёнок\n                     смотрел только детский контент;<br>\n                     — работа приставки по Wi-Fi: в комплект входит Bluetooth-пульт, для работы которого не требуется\n                     прямая видимость. <br>\n                     <br>\n                     Если вы перешли на тариф из линейки Объединяй! с WifirеTV, вы можете\n                     подключить дополнительные пакеты в сервисе «МегаФон ТВ» со скидкой. Пакеты будут\n                     выбраны автоматически при составлении заявки на подключение продукта. <br>\n                     <br>\n                     Наш специалист производит бесплатную настройку МегаФон ТВ на любых устройствах (до 5 устройств\n                     на одном номере)."
            },
            {
               "question": "Функции и выкуп Android ТВ-приставки",
               "answer": "На Android ТВ‑приставке доступны следующие функции:<br>\n                     — прямой доступ к МегаФон ТВ при помощи пульта, который входит в комплект;<br>\n                     — просмотр видео на YouTube;<br>\n                     — возможность транслировать видео со смартфона, планшета или компьютера на телевизор с помощью Chromecast built‑in;<br>\n                     — доступ к магазину приложений Google Play.<br>\n                     Если вы хотите взять или выкупить Android ТВ-приставку, обратитесь в контактный центр по телефону <a href=\"tel:0500\" class=\"text-link link\">0500</a>."
            }
         ]
      },
      {
         "col": [
            {
               "question": "Списание абонентской платы",
               "answer": "По тарифу <br>\n                     При подключении тарифа на вашем счёте должна быть сумма,\n                     достаточная для списания абонентской платы за месяц и дополнительных услуг,\n                     указанных в заявке. <br>\n                     <br>\n                     В день перехода на тариф списывается полная сумма абонентской\n                     платы, далее списания происходят раз в месяц в тот же день.<br>\n                     <br>\n                     Если в день списания у вас недостаточно средств на счёте,\n                     абонентская плата не списывается, доступ к цифровому телевидению, мобильному и домашнему\n                     интернету будет заблокирован, а все звонки будут оплачиваться поминутно. Когда вы пополните\n                     счёт на сумму, достаточную для списания абонентской платы, доступ к услугам\n                     будет восстановлен.<br>\n                     <br>\n                     За дополнительное оборудование<br>\n                     Абонентская плата за аренду оборудования для домашнего интернета\n                     списывается одновременно с абонентской платой по тарифу.<br>\n                     <br>\n                     Если в день списания у вас недостаточно средств на счёте,\n                     абонентская плата не списывается, доступ к цифровому телевидению, мобильному и домашнему\n                     интернету будет заблокирован. Когда вы пополните счёт на сумму, достаточную для\n                     списания абонентской платы, доступ к услугам будет восстановлен.<br>\n                     <br>\n                     При подключении аренды оборудования для домашнего интернета в середине\n                     расчётного периода списывается часть абонентской платы по тарифу пропорционально числу\n                     дней до следующего списания."
            },
            {
               "question": "Услуги, входящие в тариф",
               "answer": "<ul>\n                        <li><a href=\"https://www.megafon.ru/go/sms-balans\" target=\"_blank\" class=\"text-link link\">SMS-чек</a>\n                        </li>\n                        <li><a href=\"https://www.megafon.ru/go/ya_v_seti\" target=\"_blank\" class=\"text-link link\">Я\n                           в сети</a>\n                        </li>\n                        <li><a href=\"https://www.megafon.ru/go/ja_zv_plus\" target=\"_blank\" class=\"text-link link\">Я\n                           звонил+</a>\n                        </li>\n                        <li><a href=\"https://www.megafon.ru/go/whocalled_plus\" target=\"_blank\" class=\"text-link link\">Кто звонил+</a></li>\n                        <li><a href=\"https://www.megafon.ru/go/ozhidanie-vyz\" target=\"_blank\" class=\"text-link link\">Ожидание вызова</a></li>\n                        <li><a href=\"https://www.megafon.ru/go/callhold\" target=\"_blank\" class=\"text-link link\">Удержание\n                           вызова</a></li>\n                        <li><a href=\"https://www.megafon.ru/go/anti\" target=\"_blank\" class=\"text-link link\">Разовый\n                           АнтиАОН</a></li>\n                        <li><a href=\"https://www.megafon.ru/go/kaleydoskop\" target=\"_blank\" class=\"text-link link\">Калейдоскоп</a>\n                        </li>\n                        <li><a href=\"https://www.megafon.ru/go/service\" target=\"_blank\" class=\"text-link link\">Определитель\n                           номера</a></li>\n                        <li><a href=\"https://www.megafon.ru/go/otpusk_bez_zabot\" target=\"_blank\" class=\"text-link link\">Отпуск без забот</a></li>\n                        <li><a href=\"https://www.megafon.ru/go/zam-gudok\" target=\"_blank\" class=\"text-link link\">Замени\n                           Гудок</a></li>\n                        <li><a href=\"https://www.megafon.ru/go/konnekt\" target=\"_blank\" class=\"text-link link\">Коннект</a>\n                        </li>\n                     </ul>\n                  "
            },
            {
               "question": "Услуги, доступные для подключения",
               "answer": " <ul>\n                  <li><a href=\"http://www.megafon.ru/go/kaspersky\" target=\"_blank\" class=\"text-link link\">Антивирусы\n                     Kaspersky</a></li>\n                  <li><a href=\"http://www.megafon.ru/go/eset_all\" target=\"_blank\" class=\"text-link link\">Антивирусы\n                     ESET</a></li>\n                  <li><a href=\"https://www.megafon.ru/go/kasp_kids\" target=\"_blank\" class=\"text-link link\">Родительский\n                     контроль Kaspersky Safe Kids</a></li>\n                  <li><a href=\"http://www.megafon.ru/go/static_ip\" target=\"_blank\" class=\"text-link link\">Статический\n                     IP</a></li>\n               </ul>"
            },
            {
               "question": "Переход из Нэт Бай Нэт Холдинг",
               "answer": "Для действующих абонентов ООО «Нэт Бай Нэт Холдинг» с подключённой\n                     услугой домашнего телевидения доступны следующие способы перехода в МегаФон: <br>\n                     — при использовании ТВ-приставки старого поколения потребуется замена\n                     оборудования в рамках бесплатного выезда монтажника;<br>\n                     — при использовании ТВ-приставки нового поколения потребуется обновление ПО,\n                     которое произойдёт автоматически при активации тарифа из линейки\n                     <a href=\"#\" class=\"text-link link\">Объединяй!</a><br>\n                     <br>\n                     При переходе будут доступны ТВ-пакеты в сервисе «МегаФон ТВ»\n                     со скидкой. Пакеты будут выбраны автоматически при составлении заявки на подключение\n                     продукта.<br>\n                     <br>\n                     Более подробная информация по настройке ТВ-приставки в\n                     <a class=\"text-link link\" href=\"https://moscow.megafon.ru/download/~federal/obedinyaj/pristavka.pdf\" target=\"_blank\">файле</a> .\n                     Управлять дополнительными ТВ-каналами вы можете на сайте\n                     и в приложении МегаФон ТВ. Если вы хотите взять или вернуть дополнительное\n                     оборудование, обратитесь в контактный центр по телефону\n                     <a href=\"tel:0500\" class=\"text-link link\">0500</a>.\n                  "
            },
            {
               "question": "Подробная информация о тарифах",
               "answer": "<ul class=\"faq__text\">\n" +
                  "          <li>— <a target=\"_blank\" href=\"/uploads/docs/2021/home/tariff_5608_chuvashia.pdf\" class=\" faq__text-link link\">Скачать подробную информацию о тарифе «Объединяй! Два интернета»</a> (PDF)</li>\n" +
                  "          <li>— <a target=\"_blank\" href=\"/uploads/docs/2021/home/tariff_5607_chuvashia.pdf\" class=\" faq__text-link link\">Скачать подробную информацию о тарифе «Объединяй! Эконом»</a> (PDF)</li>\n" +
                  "          <li>— <a target=\"_blank\" href=\"/uploads/docs/2021/home/tariff_5612_chuvashia.pdf\" class=\" faq__text-link link\">Скачать подробную информацию о тарифе «Объединяй! хит»</a> (PDF)</li>\n" +
                  "          <li>— <a target=\"_blank\" href=\"/uploads/docs/2021/home/tariff_5609_chuvashia.pdf\" class=\" faq__text-link link\">Скачать подробную информацию о тарифе «Объединяй! Для своих»</a> (PDF)</li> \n" +
                  "          <li>— <a target=\"_blank\" href=\"/uploads/docs/2021/home/tariff_5610_chuvashia.pdf\" class=\" faq__text-link link\">Скачать подробную информацию о тарифе «Объединяй! Кино и сериалы»</a> (PDF)</li> \n" +
                  "          <li>— <a target=\"_blank\" href=\"/uploads/docs/2021/home/tariff_5611_chuvashia.pdf\" class=\" faq__text-link link\">Скачать подробную информацию о тарифе «Объединяй! Премиум»</a> (PDF)</li> \n" +
                  "          <li>— <a target=\"_blank\" href=\"/uploads/docs/2022/home/tariff_5687_chuvashia.pdf\" class=\" faq__text-link link\">Скачать подробную информацию о тарифе «Объединяй! Везде»</a> (PDF)</li> \n" +
                  "       </ul>"
            }
         ]
      }
   ],
   footer: ' Услуги предоставляются ООО «Нэт Бай Нэт Холдинг» и ПАО «МегаФон» на территории присутствия операторов при\n' +
      ' наличии технической возможности. Выгода указана для тарифа «Объединяй! Для своих» по сравнению с\n' +
      ' тарифами операторов на аналогичные услуги при раздельном подключении. Подробности на megafon.ru'
}

const pageSlice = createSlice( {
   name: 'page',
   initialState,
   reducers: {
      setRegion( state, action ) {
         state.region = action.payload
      },
      setInitialStatePage( state, action ) {
         return action.payload
      }
   },
   extraReducers: {
      [HYDRATE]: ( state, action ) => action.payload.page
   }
} )

export const { setInitialStatePage, setRegion } = pageSlice.actions
export default pageSlice.reducer