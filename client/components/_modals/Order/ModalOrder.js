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


function ModalOrder() {
   const dispatch = useDispatch()
   const { show, props: responseFromCheckAddress } = useSelector( state => state.modals.order )
   const [ apiResponse, setApiResponse ] = useState( null )
   const isAnimation = typeof window !== 'undefined' && window.innerWidth < 768


   useEffect( () => {
      setApiResponse( responseFromCheckAddress )
   }, [ responseFromCheckAddress ] )


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
