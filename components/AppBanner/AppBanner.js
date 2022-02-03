import mob_lk_320 from '../../assets/img/pic/mob_lk_320.webp'
import mob_lk_768 from '../../assets/img/pic/mob_lk_768.webp'
import mob_lk_1024 from '../../assets/img/pic/mob_lk_1024.webp'
import mob_lk_1280 from '../../assets/img/pic/mob_lk_1280.webp'
import {analyticsEvent} from "../../analytics/events";


export default function AppBanner() {

   return (
      <section className="app">
         <div className="wrapper">

            <div className="app__container">
               <div className="app__text text-app">

                  <h1 className="text-app__title">
                     Подключать тариф удобнее <nobr>в приложении</nobr> «МегаФон»
                  </h1>

                  <p className="text-app__desc">
                     Скачай и получи максимум возможностей!
                  </p>

                  <p className="text-app__text">
                     Ещё там можно активировать SIM‑карту или перенести свой номер в МегаФон
                  </p>

                  <div className="text-app__icons" data-view="block_mobilelk">
                     <a
                        href="https://trk.mail.ru/c/uo37z4"
                        className="google-play"
                        onClick={() => analyticsEvent('click_button_googleplay_lkmf')}
                     > </a>
                     <a
                        href="https://trk.mail.ru/c/sa6p65"
                        className="apple-store"
                        onClick={() => analyticsEvent('click_button_appstore_lkmf')}
                     > </a>
                  </div>
               </div>

               <picture className="app__img">
                  <source srcSet={mob_lk_320.src} media="(max-width: 767px)"/>
                  <source srcSet={mob_lk_768.src} media="(max-width: 1023px)"/>
                  <source srcSet={mob_lk_1024.src} media="(max-width: 1279px)"/>
                  <img src={mob_lk_1280.src} alt="смартфон"/>
               </picture>
            </div>
         </div>
      </section>
   )
}


