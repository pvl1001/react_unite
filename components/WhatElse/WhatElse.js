import megaDisk from '../../assets/img/pic/megaDisk.webp'
import films from '../../assets/img/pic/films.webp'
import sales from '../../assets/img/pic/sales.webp'
import {connect} from "react-redux";
import showModal from "../../redux/actions/showModal";
import {setDataOrder} from "../../redux/reducers/orderReducer";


function WhatElse(props) {

   const data = [
      {
         "dataView": "megafonPlus",
         "img": megaDisk,
         "alt": "мегадиск",
         "title": "1 терабайт бесплатно <br> в облачном хранилище",
         "text": "Сохраняйте ваши фото и видео и обменивайтесь ими с друзьями на защищённом МегаДиске. Создавайте резервные копии контактов и документов."
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
         "text": "Общайтесь выгодно: подключите до 10 человек к тарифу «Без переплат. Всё» со скидкой 40 % по"
      }
   ]

   function showModalTariffAll() {
      props.showModal({modal: 'tariffAll', bool: true})
   }

   function showModalOrder(dataView) {
      props.showModal({modal: 'order', bool: true})
      props.setDataOrder({
         tariffName: props.tariff.name,
         tariffId: props.tariff.tariffId,
         eventLabel: {
            order: `click_button_order_${dataView}`,
            send: `click_button_what-else_${dataView}_send_equipment`
         }
      })
   }


   return (
      <section className="what-else">
         <div className="wrapper">

            <h1>Что еще доступно</h1>

            <div className="what-else__cards">

               {data.map(el => (

                  <div key={el.dataView} className="what-else__card card-what-else">

                     <div className="card-what-else__img">
                        <img src={el.img.src} alt={el.img}/>
                     </div>

                     <h2 className="card-what-else__title" dangerouslySetInnerHTML={{__html: el.title}}/>

                     {el.dataView !== 'vse'
                        ? <p className="card-what-else__text" dangerouslySetInnerHTML={{__html: el.text}}/>
                        : <p className="card-what-else__text">
                           {el.text} <span className='link'
                                           onClick={showModalTariffAll}>акции</span>.
                        </p>
                     }

                     <span
                        className="card-what-else__link link"
                        onClick={() => showModalOrder(el.dataView)}>
                        Подключить
                     </span>
                  </div>

               ))}
            </div>
         </div>

      </section>
   )
}


export default connect(
   state => ({
      tariff: state.tariffs.find(tariff => tariff.id === 'for-their')
   }),
   {
      showModal,
      setDataOrder,
   }
)(WhatElse)