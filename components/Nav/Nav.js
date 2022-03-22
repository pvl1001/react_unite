import s from './Nav.module.sass'
import React, { useEffect, useRef } from 'react'
import { connect } from "react-redux";
import { showModal } from "../../redux/slices/modalsSlice";
import { setDataOrder } from "../../redux/slices/orderSlice";
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
               <a href="tel:+78352236997">8 8352 23-69-97</a>
            </div>
            <div className={ s.city } onClick={ showModalCities }>
               <span ref={ refCity }>{ props.location.data.region }</span>
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
