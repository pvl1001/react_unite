import s from "./TariffScrollBtn.module.scss"
import { useEffect, useState } from "react";
import { showModal } from "../../redux/slices/modalsSlice";
import { useDispatch } from "react-redux";


function TariffScrollBtn( props ) {
   const { tariffs } = props
   const dispatch = useDispatch()
   const [ bounding, setBounding ] = useState( {} )
   const [ styleBtn, setStyleBtn ] = useState( {} )
   const [ activeCard, setActiveCard ] = useState( null )
   const [ wheel, setWheel ] = useState( 0 )
   const [ classScrollBtn, setClassScrollBtn ] = useState( s._ )
   const hidden = bounding.top > 400 || bounding.bottom < bounding.windowHeight + 135 || wheel > 0
   const btn = typeof window !== 'undefined' && document.querySelector( '.swiper-slide-active button' )
   const setWheelHandler = ( context ) => setWheel( context.deltaY )


   function checkPremium() {
      if ( btn.classList.contains( 'btn-premium' ) ) {
         if ( !classScrollBtn.includes( 'btn-premium' ) ) {
            setClassScrollBtn( classScrollBtn + ' btn-premium' )
         }
      } else {
         setClassScrollBtn( classScrollBtn.replace( ' btn-premium', '' ) )
      }
   }

   function setStyleX() {
      const { left } = btn.getBoundingClientRect()
      setStyleBtn( { left } )
      checkPremium()
   }

   function setStyleY() {
      if ( activeCard ) {
         const { top, bottom } = activeCard.getBoundingClientRect()
         setBounding( { top, bottom, windowHeight: window.screen.height } )

         if ( !hidden ) {
            checkPremium()
            if ( !classScrollBtn.includes( ' ' + s.show ) ) {
               setClassScrollBtn( classScrollBtn + ' ' + s.show )
            }
         } else {
            setClassScrollBtn( classScrollBtn.replace( ' ' + s.show, '' ) )
         }
      }
   }

   function openOrder() {
      const { id } = activeCard
      const tariff = tariffs[id]

      dispatch( showModal( {
         modal: 'order',
         bool: true,
         props: { tariff, id }
      } ) )

   }


   useEffect( () => {
      if ( typeof window !== 'undefined' && window.screen.width < 439 ) {
         window.addEventListener( 'scroll', setStyleY, { passive: true } )
         document.addEventListener( 'wheel', setWheelHandler, { passive: true } )
      }
      return () => {
         window.removeEventListener( 'scroll', setStyleY )
         document.removeEventListener( 'wheel', setWheelHandler )
      }
   }, [ bounding, btn, tariffs ] )

   useEffect( () => {
      if ( typeof window !== 'undefined' ) {
         setActiveCard( document.querySelector( '.swiper-slide-active' ) )
      }
   }, [ btn, tariffs ] )

   useEffect( () => {
      btn && setStyleX()
   }, [ btn ] )


   return (
      <button
         style={ styleBtn }
         className={ classScrollBtn + ' btn' }
         onClick={ openOrder }
      >Подключить</button>
   )
}


export default TariffScrollBtn