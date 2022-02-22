import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { showModal } from "../../redux/slices/modalsSlice";
import { setDataOrder } from "../../redux/slices/orderSlice";
import { analyticsEvent } from "../../analytics/events";
import Image from 'next/image'
import { useRouter } from 'next/router'

function Header( { data, style, ...props } ) {
   const router = useRouter()

   const [ img, setImg ] = useState( data.img.desktop )
   const resize = () => data.resize( setImg, data.img )

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


   useEffect( () => {
      resize()
      window.addEventListener( 'resize', resize )

      return () => {
         window.removeEventListener( 'resize', resize )
      }
   } )


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


export default connect( state => ({
   tariff: state.tariffs.find( tariff => tariff.id === 'for-their' )
}), {
   showModal,
   setDataOrder
} )( Header )