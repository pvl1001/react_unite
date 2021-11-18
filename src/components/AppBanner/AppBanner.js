import './AppBanner.scss'
import mob_lk_320 from '../../img/pic/mob_lk_320.png'
import mob_lk_768 from '../../img/pic/mob_lk_768.png'
import mob_lk_1024 from '../../img/pic/mob_lk_1024.png'
import mob_lk_1280 from '../../img/pic/mob_lk_1280.png'


export default function AppBanner () {
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
                     <a href="https://trk.mail.ru/c/uo37z4" className="google-play"/>
                     <a href="https://trk.mail.ru/c/sa6p65"
                        className="apple-store"/>
                  </div>
               </div>

               <picture className="app__img">
                  <source srcSet={mob_lk_320} media="(max-width: 767px)"/>
                  <source srcSet={mob_lk_768} media="(max-width: 1023px)"/>
                  <source srcSet={mob_lk_1024} media="(max-width: 1279px)"/>
                  <img src={mob_lk_1280} alt="смартфон"/>
               </picture>
            </div>
         </div>
      </section>
   )
}


