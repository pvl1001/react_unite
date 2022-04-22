import s from './WhatElse.module.sass'
import films from '../../public/images/what-else/films.webp'
import sales from '../../public/images/what-else/sales.webp'
import Brus from '../../public/images/what-else/Brus.webp'
import { connect, useSelector } from "react-redux";
import { showModal } from "../../redux/slices/modalsSlice";
import { setDataOrder } from "../../redux/slices/orderSlice";
import CardWE from "./CardWE/CardWE";


function WhatElse( props ) {
   const tariffDefault = useSelector( state => state.page.tariffDefault )
   const pageName = useSelector( state => state.page.name )
   const megaTariff = useSelector( state => state.megaTariff )
   const tariff = useSelector( state => state.tariffs.find( tariff => tariff.id === tariffDefault ) )

   const data = [
      {
         "dataView": "megafonPlus",
         "img": Brus,
         "alt": "Брюс",
         "title": "Мультиподписка <nobr>«МегаФон Плюс»</nobr> <br>30 дней бесплатно",
         "text": "Безлимитный интернет на фильмы, сериалы, музыку и аудиокниги при подключении МегаФон Плюса. Выгодное комбо из популярных сервисов."
      },
      {
         "dataView": "mftv",
         "img": films,
         "alt": "фильмы",
         "title": "100 000 фильмов и сериалов, <br> а также более 70 ТВ-каналов",
         "text": "Смотрите МегаФон ТВ на всех устройствах. Если начали дома на SMART-телевизоре, продолжайте с того же места на смартфоне в дороге."
      },
      {
         "dataView": "vse",
         "img": sales,
         "alt": "скидки",
         "title": "Тариф со скидкой 40% <br> для ваших близких",
         "text": `Общайтесь выгодно: подключите до 10 человек к тарифу «Без переплат. ${ megaTariff.name }» со скидкой 40 % по`
      }
   ]

   function showModalTariffAll() {
      props.showModal( {
         modal: 'tariffAll',
         bool: true
      } )
   }

   function showModalOrder( dataView ) {
      props.showModal( {
         modal: 'order',
         bool: true
      } )
      props.setDataOrder( {
         tariffName: `${ pageName } ${ tariff.name }`,
         tariffId: tariff.tariffId,
         eventLabel: {
            order: `click_button_order_${ dataView }`,
            send: `click_button_what_else_${ dataView }_send_equipment`
         }
      } )
   }


   return (
      <section className={ s.container }>
         <div className="wrapper">

            <h1>Что еще доступно</h1>

            <div className={ s.cards }>

               { data.map( el =>
                  <CardWE
                     key={ el.dataView }
                     card={ el }
                     showModalTariffAll={ showModalTariffAll }
                     showModalOrder={ showModalOrder }
                  />
               ) }
            </div>
         </div>

      </section>
   )
}


export default connect( null, {
   showModal,
   setDataOrder,
} )( WhatElse )