import s from './Header.module.sass'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { showModal } from "../../redux/slices/modalsSlice";
import { setDataOrder } from "../../redux/slices/orderSlice";
import { analyticsEvent } from "../../analytics/events";
import Image from 'next/image'
import images from '/public/images/header'

function Header( props ) {

   const [ img, setImg ] = useState( images.desktop )

   function showModalOrder() {
      props.showModal( {
         modal: 'order',
         bool: true
      } )
      props.setDataOrder( {
         tariffName: props.tariff.name,
         tariffId: props.tariff.tariffId,
         eventLabel: {
            order: `click_button_connect_${ props.tariff.dataView }`,
            send: `click_button_connect_send_${ props.tariff.dataView }`
         }
      } )
   }

   function showModalTariff() {
      props.showModal( {
         modal: 'tariff',
         bool: true,
         props: props.tariff.id
      } )
      analyticsEvent( `click_button_connect_details_${ props.tariff.dataView }` )
   }

   function resize() {
      window.innerWidth < 603
         ? setImg( images.mob )
         : (window.innerWidth > 602 && window.innerWidth < 936)
            ? setImg( images.tap )
            : setImg( images.desktop )
   }

   useEffect( () => {
      resize()
      window.addEventListener( 'resize', resize )

      return () => {
         window.removeEventListener( 'resize', resize )
      }
   } )


   return (
      <header className={ s.container }>
         <div className={ s.wrapper + ' wrapper' }>
            <div className={ s.row }>
               <div className={ s.text }>
                  <h1>
                     Домашний интернет,
                     <nobr> ТВ и связь</nobr>
                  </h1>

                  <p>В тарифах «Объединяй!»</p>

                  <div className={ s.btns }>
                     <button
                        type="button"
                        onClick={ showModalOrder }
                        className={ `${ s.btn } btn btn-fiolet` }
                        data-view="first_banner">
                        Подключить
                     </button>

                     <span
                        className={ s.about }
                        onClick={ showModalTariff }>
                        Подробнее
                     </span>
                  </div>
               </div>

               <div className={ s.img_container }>
                  <div className={ s.img }>
                     <Image
                        { ...img }
                        alt="баннер старт"
                        priority
                     />
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}


export default connect( state => ({
   tariff: state.tariffs.find( tariff => tariff.id === 'for-their' )
}), {
   showModal,
   setDataOrder
} )( Header )