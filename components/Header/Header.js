import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { showModal } from "../../redux/slices/modalsSlice";
import { setDataOrder } from "../../redux/slices/orderSlice";
import { analyticsEvent } from "../../analytics/events";
import Image from 'next/image';
import { useRouter } from 'next/router';


function Header( { style, ...props } ) {
   const router = useRouter()
   const pageName = useSelector( state => state.page.name )
   const tariffDefault = useSelector( state => state.page.tariffDefault )
   const data = useSelector( state => state.page.header )
   const tariff = useSelector( state => state.tariffs.find( t => t.id === tariffDefault ) )
   const [ img, setImg ] = useState( data.img.desktop )

   function resize() {
      if ( router.route !== '/' ) {
         return window.innerWidth < 768
            ? setImg( data.img.mob )
            : setImg( data.img.desktop )
      }
      window.innerWidth < 603
         ? setImg( data.img.mob )
         : (window.innerWidth > 602 && window.innerWidth < 936)
            ? setImg( data.img.tap )
            : setImg( data.img.desktop )
   }

   function showModalOrder() {
      props.showModal( {
         modal: 'order',
         bool: true
      } )
      props.setDataOrder( {
         tariffName: `${ pageName } ${ tariff.name }`,
         tariffId: tariff.tariffId,
         eventLabel: {
            order: `click_button_connect_${ tariff.dataView }`,
            send: `click_button_connect_send_${ tariff.dataView }`
         }
      } )
   }

   function showModalTariff() {
      props.showModal( {
         modal: 'tariff',
         bool: true,
         props: tariff.id
      } )
      analyticsEvent( `click_button_connect_details_${ tariff.dataView }` )
   }

   useEffect( () => {
      resize()
      window.addEventListener( 'resize', resize )
   }, [] )


   return (
      <header className={ style.container }>
         <div className={ style.wrapper + ' wrapper' }>
            <div className={ style.row }>
               <div className={ style.text }>
                  <h1>{ data.title }
                     <nobr>{ data.titleBr }</nobr>
                  </h1>

                  <p>{ data.desc }</p>

                  <div className={ style.btns }>
                     <button
                        type="button"
                        onClick={ showModalOrder }
                        className={ `${ style.btn } btn btn-fiolet` }
                        data-view="first_banner">
                        Подключить
                     </button>

                     { router.route === '/' &&
                        <span
                           className={ style.about }
                           onClick={ showModalTariff }>
                           Подробнее
                        </span>
                     }
                  </div>
               </div>

               <div className={ style.img_container }>
                  <div className={ style.img }>
                     <Image
                        { ...img }
                        alt="баннер"
                        priority
                     />
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}


export default connect( null, {
   showModal,
   setDataOrder
} )( Header )