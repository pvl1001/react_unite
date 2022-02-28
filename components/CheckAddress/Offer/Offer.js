import s from './Offer.module.sass';
import { link } from '../CheckAddress.module.sass'
import { useRef } from "react";
import Image from 'next/image'
import { scrollTo } from "/redux/slices/tariffsSlice";
import InfoBox from "./InfoBox/InfoBox";


function Offer( props ) {

   const refBlockRouter = useRef( null )

   function scroll() {
      scrollTo( refBlockRouter.current )
   }


   return (
      <>
         <div className={ s.container }>
            <p>
               К сожалению, мы пока не можем подключить ваш дом к домашнему интернету. <br/>
               Но по адресу <b>{ props.address }</b> доступно
               <span className={ s.underline }
                     onClick={ scroll }
               > специальное предложение</span> на беспроводной интернет:
            </p>

            <span
               className={ link }
               onClick={ props.resultNull }>
               Изменить адрес
            </span>
         </div>

         <div
            id="unite"
            className={ s.router }
            ref={ refBlockRouter }
         >

            <div className={ s.to_plug }>
               <h2>Мобильная связь, домашний интернет и ТВ на 4G+ скоростях со скидкой 40% навсегда</h2>
               <p>
                  Пользуйтесь самым быстрым интернетом дома, даже когда недоступен проводной интернет. Берите
                  роутер с
                  собой и пользуйтесь Wi-Fi дома, на даче или у друзей.
               </p>
            </div>

            <div className={ s.row }>
               <InfoBox showModalOrder={ props.showModalOrder }/>
               <div className={ s.img }>
                  <Image
                     alt="router"
                     src={ '/images/equipments/router_info_2x.webp' }
                     layout="fill"
                     objectFit="contain"
                  />
               </div>
            </div>

         </div>
      </>
   )
}

export default Offer
