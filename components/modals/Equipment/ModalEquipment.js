import s from './ModalEquipment.module.sass'
import s_tariff from '/components/modals/Tariff/ModalTariff.module.sass'
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import Plan from "./Plan/Plan";
import { showModal } from "../../../redux/slices/modalsSlice";
import { changePlan } from "../../../redux/slices/equipmentsSlice";
import { setDataOrder } from "../../../redux/slices/orderSlice";
import { useEffect, useState } from "react";
import Image from 'next/image';


function ModalEquipment( props ) {

   const [ pricePlan, setPricePlan ] = useState( null )
   useEffect( () => {
      props.show && setPricePlan( props.eq.plan?.find( p => p.checked ).value ?? props.eq.price )
   }, [ props.show, props.eq?.plan, props.eq?.price ] )


   if ( props.show ) {

      const onHide = () => props.showModal( { modal: 'equipment', bool: false } )

      const eventLabel = props.eq.dataView === 'router-4g'
         ? {
            order: `click_button_order_vezde_ntv`,
            send: `click_button_send_vezde_ntv`
         }
         : {
            order: `click_button_order_${ props.eq.dataView }`,
            send: `click_button_${ props.eq.dataView }_send_equipment`
         }

      function handleChangePlan( payload ) {
         props.changePlan( payload )
         setPricePlan( payload.value )
      }

      function showModalOrder() {
         props.showModal( { modal: 'order', bool: true } )
         props.setDataOrder( {
            tariffName: props.tariff.name,
            tariffId: props.tariff.tariffId,
            equipments: props.eq.dataView,
            price: pricePlan,
            eventLabel: eventLabel
         } )
      }


      return (
         <Modal
            centered
            animation={ false }
            show={ props.show }
            onHide={ onHide }
            dialogClassName={ s.modal_dialog }
            contentClassName={ s.modal_content }

         >
            <button
               type="button"
               className={ s.modal_close + " modal-close" }
               onClick={ onHide }
            />
            <h1 className={ s.title }>
               { props.eq.name === 'Android TV' && <>Приставка</> } { props.eq.name }
            </h1>

            { props.eq.name === 'Android TV' && (
               <div className={ s.sale }>
                  <div className={ s.sale__mark + " mark" }>Акция</div>
                  <p className={ s.sale__text }>
                     Возьми в аренду Android TV и получи год сериалов в подарок
                  </p>
               </div>)
            }

            <div className={ s.container }
                 style={ props.eq.style }
            >
               <div className={ s.text }>
                  <h3>Характеристики { props.eq.name.split( ' ' )[0] === 'Роутер'
                     ? <>роутера</>
                     : <>приставки</> }:</h3>

                  <ul>
                     { props.eq.params.map( ( param, i ) =>
                        <li key={ i }>
                           { param.icon &&
                              <img
                                 src={ `/svg/${ param.icon }.svg` }
                                 height={ 32 }
                                 alt="icon"
                              />
                           }
                           <p dangerouslySetInnerHTML={ { __html: param.text } }/>
                        </li>
                     ) }
                  </ul>

                  <div className="download-pdf">
                     <button className="download-pdf__icon">
                        <img src={ '/svg/download-pdf.svg' }
                             alt="download-pdf"/>
                     </button>
                     <div className={ s_tariff.download_pdf__text }>
                        <a href=" " className="download-pdf__text-link">Скачать подробную информацию</a>
                        <p className="download-pdf__text-pdf">(PDF, 0.4 MB)</p>
                     </div>
                  </div>
               </div>

               <div className={ s.img }>
                  <Image
                     alt={ props.eq.name }
                     src={ `/images/equipments/${ props.eq.img }.webp` }
                     layout={ 'fill' }
                     objectFit={ 'contain' }
                  />
               </div>
            </div>

            { !props.showModalTariff &&
               <>
                  { props.eq.plan &&
                     <Plan
                        eq={ props.eq }
                        handleChange={ handleChangePlan }
                     />
                  }

                  <div className={ s.modal_order + " modal-order" }>
                     <div className={ s.modal_order__text + " modal-order__text" }>
                        <p>{ pricePlan } ₽ в месяц</p>
                     </div>

                     <button
                        className={ s.modal_order__btn + " btn" }
                        onClick={ showModalOrder }>
                        Заказать
                     </button>
                  </div>
               </>
            }

         </Modal>
      )

   }

   return null
}


export default connect( state => ({
   show: state.modals.equipment.show,
   showModalTariff: state.modals.tariff.show,
   eq: state.modals.equipment.props,
   get tariff() {
      return this.eq?.id === 'eq-unite'
         ? state.tariffs.find( tariff => tariff.id === 'around' )
         : state.tariffs.find( tariff => tariff.id === 'for-their' )
   }
}), {
   showModal,
   changePlan,
   setDataOrder
} )( ModalEquipment )
