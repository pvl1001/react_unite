import Tippy from "@tippyjs/react";
import React, { useEffect } from "react";
import { tippyAttrs } from "../../../../plugins_config";
import { connect } from "react-redux";
import { showModal } from "../../../../redux/slices/modalsSlice";
import { setDataOrder } from "../../../../redux/slices/orderSlice";
import { analyticsView } from "../../../../analytics/events";
import s from './Footer.module.sass'
import { wrapp } from '../ModalTariff.module.sass'
import { toPlug } from "../../../../redux/slices/tariffsSlice";

function Footer( props ) {

   useEffect( () => {
      analyticsView()
   } )

   function showModalOrder() {
      props.showModal( { modal: 'order', bool: true } )
      props.setDataOrder( {
         tariffName: `${ props.pageName } ${ props.tariff.name }`,
         tariffId: props.tariff.tariffId,
         equipments: props.tariff.equipments,
         eventLabel: {
            order: `click_button_order_${ props.tariff.dataView }`,
            send: `click_button_send_${ props.tariff.dataView }`
         }
      } )
   }


   return (
      <div className={ ` ${ s.container } ${ wrapp } ` }>
         <div className={ s.price }>

            { props.tariff.oldPrice &&
               <span className={ s.price__old }>{ props.tariff.oldPrice } ₽</span> }

            <span className={ s.price__current }>{ props.tariff.totalPrice }</span>

            <span className={ s.price__month }> ₽ в месяц</span>

            { props.tariff.iconInfo &&
               <Tippy { ...tippyAttrs } content={
                  <><span
                     onClick={ () => toPlug( props.tariff.iconInfo ) }
                     className="link">Скидка</span> на абонентскую плату действует 3 месяца после подключения
                  </> }>
                  <div className={ s.price__icon + ' price__icon' }/>
               </Tippy>
            }
         </div>

         <button
            type="button"
            className={ s.price__btn + " btn" }
            data-view={ `modal_${ props.tariff.dataView }` }
            onClick={ showModalOrder }>
            Заказать
         </button>

         <p
            className={ s.price__desc }
            style={ {
               visibility: props.tariff.equipments.find( eq => eq.switch )
                  ? 'visible'
                  : 'hidden'
            } }>
            с учетом выбранных опций
         </p>

      </div>
   )
}


export default connect(
   null,
   { showModal, setDataOrder }
)( Footer )