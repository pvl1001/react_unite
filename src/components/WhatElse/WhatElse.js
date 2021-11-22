import './WhatElse.scss'
import megaDisk from '../../img/pic/megaDisk.png'
import films from '../../img/pic/films.png'
import sales from '../../img/pic/sales.png'
import ModalOrder from "../modals/ModalOrder/ModalOrder";
import {useState} from "react";
import ModalTariffAll from "../modals/ModalTariffAll/ModalTariffAll";


export default function WhatElse() {

   const [statusModalOrder, setStatusModalOrder] = useState( false )
   const [showModalWhatElse, setShowModalWhatElse] = useState( false )

   const data = [
      {
         "dataView": "megadisk",
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


   return (
      <section className="what-else">
         <div className="wrapper">

            <h1>Что еще доступно</h1>

            <div className="what-else__cards">

               {data.map( el => (

                  <div key={el.dataView} className="what-else__card card-what-else">

                     <div className="card-what-else__img">
                        <img src={el.img} alt={el.img}/>
                     </div>

                     <h2 className="card-what-else__title" dangerouslySetInnerHTML={{__html: el.title}}/>
                     {
                        el.dataView !== 'vse'
                           ? <p className="card-what-else__text" dangerouslySetInnerHTML={{__html: el.text}}/>
                           : <p className="card-what-else__text">
                              {el.text} <span className='link'
                                              onClick={() => setShowModalWhatElse( true )}>акции</span>.
                           </p>
                     }


                     <span className="card-what-else__link link"
                           onClick={() => setStatusModalOrder( true )}>Подключить</span>
                  </div>

               ) )}
            </div>
         </div>

         <ModalOrder status={{statusModalOrder, setStatusModalOrder}}/>

         <ModalTariffAll show={showModalWhatElse} onHide={() => setShowModalWhatElse( false )}/>
      </section>
   )
}