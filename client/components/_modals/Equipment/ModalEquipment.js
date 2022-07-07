import s from './ModalEquipment.module.sass'
import s_modalMftv from '../Mftv/ModalMftv.module.sass'
import { Modal } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import Plan from "./Plan/Plan";
import { showModal } from "../../../redux/slices/modalsSlice";
import { changePlan } from "../../../redux/slices/equipmentsSlice";
import { setDataOrder } from "../../../redux/slices/orderSlice";
import { useEffect, useState } from "react";
import Image from 'next/image';


function ModalEquipment() {
   const dispatch = useDispatch()
   const [ pricePlan, setPricePlan ] = useState( null )
   const { tariffs } = useSelector( state => state )
   const { equipment, tariff: modalTariff } = useSelector( state => state.modals )
   const { show, props: eqId } = equipment
   const { show: showModalTariff } = modalTariff
   const eq = useSelector( state => eqId === 'router-4g'
      ? state.tariffVezde.equipments.router_4g
      : state.equipments[eqId]
   )

   useEffect( () => {
      show && setPricePlan( eq.plan?.find( p => p.checked ).value ?? eq.price )
   }, [ show, eq?.plan, eq?.price ] )


   if ( show ) {

      const onHide = () => dispatch( showModal( { modal: 'equipment', bool: false } ) )

      // const eventLabel = eq.id === 'router-4g'
      //    ? {
      //       order: `click_button_order_vezde_ntv`,
      //       send: `click_button_send_vezde_ntv`
      //    }
      //    : {
      //       order: `click_button_order_${ eq.id }`,
      //       send: `click_button_${ eq.id }_send_equipment`
      //    }

      function handleChangePlan( payload ) {
         dispatch( changePlan( payload ) )
         setPricePlan( payload.value )
      }

      function showModalOrder() {
         dispatch( showModal( {
            modal: 'order',
            bool: true,
            props: {
               tariff: tariffs.their,
               id: 'their',
               eventLabel: `click_button_${ eq.id }_send_equipment`,
               equipments: { id: eq.id, price: pricePlan }
            }
         } ) )
      }


      return (
         <Modal
            centered
            animation={ false }
            show={ show }
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
               { eq.name === 'Android TV' && <>Приставка</> } { eq.name }
            </h1>

            { eq.name === 'Android TV' &&
               <div className={ s.sale }>
                  <div className={ s.sale__mark + " mark" }>Акция</div>
                  <p className={ s.sale__text }>
                     Возьми в аренду Android TV и получи год сериалов в подарок
                  </p>
               </div>
            }

            <div className={ s.container }>
               <div className={ s.text }>
                  <h3>Характеристики { eq.name.split( ' ' )[0] === 'Роутер'
                     ? <>роутера</>
                     : <>приставки</> }:</h3>

                  <ul>
                     { eq.params.map( ( param, i ) =>
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
                     <div className={ s_modalMftv.download_pdf__text }>
                        <a href={ eq.link } className="download-pdf__text-link">Скачать подробную информацию</a>
                        <p className="download-pdf__text-pdf"> (PDF, 0.4 MB)</p>
                     </div>
                  </div>
               </div>

               <div className={ s.img }>
                  <Image
                     alt={ eq.name }
                     src={ `/images/equipments/${ eq.img }.webp` }
                     layout={ 'fill' }
                     objectFit={ 'contain' }
                  />
               </div>
            </div>

            { !showModalTariff &&
               <>
                  { eq.plan &&
                     <Plan
                        eq={ eq }
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


export default connect( null, {
   showModal,
   changePlan,
   setDataOrder
} )( ModalEquipment )
