import {analyticsEvent} from "/analytics/events";
import Image from 'next/image';
import images from '/public/images/app-banner'
import {useEffect, useState} from "react";


export default function AppBanner() {

   const [img, setImg] = useState(images.desktop)

   function resizeImg() {
      window.innerWidth < 768 ? setImg(images.mob_320)
         : window.innerWidth < 1024 ? setImg(images.mob_768)
            : window.innerWidth < 1279 ? setImg(images.tap)
               : setImg(images.desktop)
   }

   useEffect(() => {
      resizeImg()
      window.addEventListener('resize', resizeImg)
   })


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

               <div className="app__img">
                  <Image {...img} alt="смартфон"/>
               </div>
            </div>
         </div>
      </section>
   )
}


