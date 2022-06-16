import { connect } from "react-redux";
import { showModal } from "../../../../redux/slices/modalsSlice";
import { setDataOrder } from "../../../../redux/slices/orderSlice";
import s from './Footer_new.module.sass';
import { wrapp } from '../ModalTariff.module.sass';


function Footer( { tariff } ) {
   const isPremium = tariff.id === 'premium'
   const btnClass = isPremium
      ? s.price__btn + " btn"
      : s.price__btn + " btn btn-fiolet"


   function showModalOrder() {
      showModal( { modal: 'order', bool: true } )
      setDataOrder( {
         tariffName: `${ tariff.name }`,
         tariffId: tariff.tariffId,
         equipments: tariff.equipments,
         eventLabel: {
            order: `click_button_order_${ tariff.id }`,
            send: `click_button_send_${ tariff.id }`
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

               <div className={ s.title }>{ tariff.name }</div>

               <span className={ s.price__current }>{ tariff.totalPrice || tariff.price } ₽</span>

               <span className={ s.price__month }> в месяц</span>

               <nobr>
                  { Object.values(tariff.equipments).some( eq => eq.switch ) &&
                     <span className={ s.price__desc }> с учетом выбранных опций</span>
                  }

               </nobr>
            </div>

            <button
               type="button"
               className={ btnClass }
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