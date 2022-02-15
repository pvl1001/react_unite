import s from './Nav.module.sass'
import React, { useEffect, useRef } from 'react'
import { connect } from "react-redux";
import { showModal } from "../../redux/modals/modalsAction";
import { setDataOrder } from "../../redux/order/orderAction";
import { analyticsEvent } from "../../analytics/events";


function Nav( props ) {

   const refCity = useRef( null )

   useEffect( () => {
      props.setDataOrder( { city: refCity.current.textContent } )
   }, [ refCity ] )

   function showModalCities() {
      props.showModal( {
         modal: 'cities',
         bool: true
      } )
      analyticsEvent( 'click_button_regions' )
   }


   return (
      <nav className={ s.container }>
         <div className={ s.wrapper + ' wrapper' }>
            <div className={ s.logo }>
               <a href='/'> </a>
            </div>
            <div className={ s.phone }>
               <a href="tel:88005500001">8 800 55-00-001</a>
            </div>
            <div className={ s.city } onClick={ showModalCities }>
               <span ref={ refCity }>Москва и область</span>
            </div>
         </div>
      </nav>
   )
}


export default connect(
   null,
   {
      showModal,
      setDataOrder
   }
)( Nav )
