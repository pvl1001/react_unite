import s from './Offer.module.sass';
import { useRef } from "react";
import Image from 'next/image'
import { scrollTo } from "/redux/slices/tariffsSlice";
import InfoBox from "./InfoBox/InfoBox";


function Offer( props ) {

   const refBlockRouter = useRef( null )
   const scroll = () => scrollTo( refBlockRouter.current )


   return (
      <>
         <div className={ s.container }>
            <h3>К сожалению, мы пока не можем подключить ваш дом к домашнему интернету.</h3>

            <p>Но по адресу <b>{ props.address }</b> доступно <span className={ s.underline } onClick={ scroll }
            >специальное предложение</span> на беспроводной интернет или вы можете попробовать <nobr
               className={ s.underline } onClick={ props.resultNull }>изменить адрес</nobr>.
            </p>
         </div>

         <div
            id="unite"
            className={ s.router }
            ref={ refBlockRouter }
         >
            <div className={ s.to_plug }>
               <h2>Мобильная связь, домашний интернет и ТВ на 4G+ скоростях <nobr>со скидкой</nobr> 40% навсегда</h2>
               <p>
                  Пользуйтесь самым быстрым интернетом дома, даже когда недоступен проводной интернет. Берите
                  роутер с
                  собой и пользуйтесь Wi-Fi дома, на даче или у друзей.
               </p>
            </div>

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
      </>
   )
}

export default Offer
