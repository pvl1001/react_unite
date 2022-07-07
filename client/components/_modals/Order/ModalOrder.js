import s from './ModalOrder.module.sass';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from "react-bootstrap";
import { showModal } from "../../../redux/slices/modalsSlice";
import AddressInput from "./Input/AddressInput";
import ClientForm from "./ClientForm/ClientForm";
import ArrowIcon from '../../../public/svg/arrow_slider.svg'
import Response from "./Response/Response";
import Footer from "../../Footer/Footer";
import { setDataOrder } from "../../../redux/slices/orderSlice";


function ModalOrder() {
   const dispatch = useDispatch()
   const { show, props } = useSelector( state => state.modals.order )
   const tariff = props?.tariff
   const id = props?.id
   const mailSender = props?.mailSender
   const equipments = props?.equipments
   const eventLabel = props?.eventLabel
   const [ apiResponse, setApiResponse ] = useState( null )
   const isAnimation = typeof window !== 'undefined' && window.innerWidth < 768


   useEffect( () => {
      setApiResponse( mailSender )
   }, [ mailSender ] )

   useEffect( () => {
      if ( show ) {
         dispatch( setDataOrder( {
            tariffName: tariff.name,
            tariffId: tariff.tariffId,
            equipments: equipments?.id || Object.entries( tariff.equipments ).map( eq => eq[1] ),
            price: equipments?.price || tariff.totalPrice || tariff.price,
            eventLabel: eventLabel || `click_button_send_${ id }`
         } ) )
      }
   }, [ show ] )


   function onHide() {
      dispatch( showModal( {
         modal: 'order',
         bool: false
      } ) )
      setApiResponse( null )
   }


   return (
      <Modal
         centered
         animation={ isAnimation }
         backdrop={ !isAnimation }
         show={ show }
         onHide={ onHide }
         className={ s.modal }
         dialogClassName={ s.modal_dialog }
         contentClassName={ s.modal_content }
      >
         <div className={ s.header_mobile }>
            <button
               type="button"
               onClick={ onHide }
            ><ArrowIcon/><span>Назад</span></button>
         </div>

         { apiResponse
            ? <Response onHide={ onHide } apiResponse={ apiResponse }/>
            : <div>
               <button
                  type="button"
                  className={ s.modal_close + ' modal-close' }
                  onClick={ onHide }
               />

               <h2 className={ s.title }>Заявка на подключение</h2>

               <p className={ s.description }>
                  Проверь подключение по твоему адресу и отправь заявку на подключение</p>

               <AddressInput
                  type={ 'text' }
                  name={ 'address' }
                  label={ 'Город, улица, дом' }
                  className={ s.address }
                  classNameInput={ 'js-address-input' }
               />

               <ClientForm setApiResponse={ setApiResponse }/>
            </div>
         }

         <Footer className={ s.footer }/>
      </Modal>
   )
}


export default ModalOrder
