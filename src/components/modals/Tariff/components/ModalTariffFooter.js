import Tippy from "@tippyjs/react";
import React, {useEffect} from "react";
import {tippyAttrs} from "../../../../plugins_config";
import {connect} from "react-redux";
import showModal from "../../../../redux/actions/showModal";
import {setDataOrder} from "../../../../redux/reducers/orderReducer";
import {analyticsView} from "../../../../analytics";


function ModalTariffFooter(props) {

   useEffect(() => {
      analyticsView()
   })

   function showModalOrder() {
      props.showModal({modal: 'order', bool: true})
      props.setDataOrder({
         tariffName: props.tariff.name,
         tariffId: props.tariff.tariffId,
         equipments: props.tariff.equipments,
         eventLabel: {
            order: `click_button_order_${props.tariff.dataView}`,
            send: `click_button_send_${props.tariff.dataView}`
         }
      })
   }


   return (
      <div className="tariff-modal__footer wrapp">
         <div className="tariff-modal__price price">

            {props.tariff.oldPrice &&
               <span className="price__old">{props.tariff.oldPrice} ₽</span>}

            <span className="price__current">{props.tariff.totalPrice}</span>

            <span className="price__month"> ₽ в месяц</span>

            {props.tariff.iconInfo &&
               <Tippy {...tippyAttrs} content={props.tariff.iconInfo}>
                  <div className="price__icon"/>
               </Tippy>}
         </div>

         <button
            type="button"
            className="tariff-modal__price-btn btn"
            data-view={`modal_${props.tariff.dataView}`}
            onClick={showModalOrder}>
            Заказать
         </button>

         <p
            className="tariff-modal__price-desc"
            style={{visibility: props.tariff.equipments.find(eq => eq.switch) ? 'visible' : 'hidden'}}>
            с учетом выбранных опций
         </p>

      </div>
   )
}


export default connect(
   null,
   {showModal, setDataOrder}
)(ModalTariffFooter)