import s from './ModalOrder.module.sass';
import { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { Modal } from "react-bootstrap";
import $ from 'jquery'
import { Formik } from 'formik'
import { string, object } from 'yup'
import { showModal } from "../../../redux/slices/modalsSlice";
import { setDataOrder } from "../../../redux/slices/orderSlice";
import { Spinner } from 'react-bootstrap';
import valid from '../../../mixins/valid'
import { getMailSender, setRegister } from '../../../mixins/submitOrder'
import Input from "./Input/Input";
import autocompleteHandler from "../../../mixins/autocompleteHandler";
import AddressInput from "./Input/AddressInput";
import ClientForm from "./ClientForm/ClientForm";


function ModalOrder( props ) {
   const { order, setDataOrder, showModal, show } = props
   const [ apiResponse, setApiResponse ] = useState( null )


   function onHide() {
      showModal( {
         modal: 'order',
         bool: false
      } )
      setApiResponse( null )
   }


   return (
      <Modal
         centered
         animation={ false }
         show={ show }
         onHide={ onHide }
         className={ s.modal }
         dialogClassName={ s.modal_dialog }
         contentClassName={ s.modal_content }
      >
         { !apiResponse
            ? <div>

               <button
                  type="button"
                  className="modal-close"
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

               <ClientForm
                  order={ order }
                  setDataOrder={ setDataOrder }
                  setApiResponse={setApiResponse}
               />


            </div>
            : <div className={ s.order_thx }>
               <button type="button" className="modal-close" onClick={ onHide }/>

               <h2 className={ s.order_thx__title }>{ apiResponse.response_head }</h2>
               <p className={ s.order_thx__text }>{ apiResponse.response }</p>
            </div>
         }
      </Modal>
   )

}


export default connect( state => ({
   show: state.modals.order.show,
   order: state.order,
}), {
   showModal,
   setDataOrder,
} )( ModalOrder )
