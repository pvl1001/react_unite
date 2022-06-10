import Tippy from "@tippyjs/react";
import React, { useEffect } from "react";
import { tippyAttrs } from "../../../../plugins_config";
import { connect } from "react-redux";
import { showModal } from "../../../../redux/slices/modalsSlice";
import { setDataOrder } from "../../../../redux/slices/orderSlice";
import s from './Footer_new.module.sass';
import { wrapp } from '../ModalTariff.module.sass';


function Footer( { tariff, pageName } ) {
   const tmplIconInfo = iconInfo( tariff.id, tariff.iconInfo )
   const isPremium = tariff.id === 'premium'
   const btnClass = isPremium
      ? s.price__btn + " btn"
      : s.price__btn + " btn btn-fiolet"

   useEffect( () => {
      analyticsView()
   }, [] )

   function showModalOrder() {
      showModal( { modal: 'order', bool: true } )
      setDataOrder( {
         tariffName: `${ pageName } ${ tariff.name }`,
         tariffId: tariff.tariffId,
         equipments: tariff.equipments,
         eventLabel: {
            order: `click_button_order_${ tariff.dataView }`,
            send: `click_button_send_${ tariff.dataView }`
         }
      } )
   }


   return (
      <div className={ s.backdrop }>
         <div
            className={ ` ${ s.container } ${ wrapp } ` }
            style={ { backgroundColor: isPremium ? 'var(--mf-premium)' : '' } }
         >
            <div className={ s.price }>

               <div className={ s.title }>{ pageName } { tariff.name }</div>

               {/*{ tariff.oldPrice &&*/ }
               {/*   <span className={ s.price__old }>{ tariff.totalOldPrice } ₽ </span> }*/ }

               <span className={ s.price__current }>{ tariff.totalPrice } ₽</span>

               <span className={ s.price__month }> в месяц</span>

               <nobr>
                  { tariff.equipments.find( eq => eq.switch ) &&
                     <span className={ s.price__desc }> с учетом выбранных опций</span>
                  }

                  { tariff.iconInfo &&
                     <Tippy { ...tippyAttrs } content={ tmplIconInfo }>
                        <svg className={ s.price__icon } viewBox="2 17 16 16" width="16px" height="16px" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M9 30H11V24H9V30ZM10 22C9.8 22 9.5 21.9 9.3 21.7C9.1 21.5 9 21.3 9 21C9 20.7 9.1 20.5 9.3 20.3C9.5 20.1 9.8 20 10 20C10.2 20 10.5 20.1 10.7 20.3C10.9 20.5 11 20.7 11 21C11 21.3 10.9 21.5 10.7 21.7C10.6 21.9 10.3 22 10 22ZM10 18C6.1 18 3 21.1 3 25C3 28.9 6.1 32 10 32C13.9 32 17 28.9 17 25C17 21.1 13.9 18 10 18ZM10 33C5.6 33 2 29.4 2 25C2 20.6 5.6 17 10 17C14.4 17 18 20.6 18 25C18 29.4 14.4 33 10 33Z"
                              fill="#fff"/>
                        </svg>
                     </Tippy>
                  }
               </nobr>
            </div>

            <button
               type="button"
               className={ btnClass }
               data-view={ `modal_${ tariff.dataView }` }
               onClick={ showModalOrder }>
               Заказать
            </button>

         </div>
      </div>
   )
}


export default connect(
   null,
   { showModal, setDataOrder }
)( Footer )