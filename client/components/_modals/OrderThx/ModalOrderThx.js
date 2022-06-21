import React from 'react';
import s from "../Order/ModalOrder.module.sass";
import { showModal } from "../../../redux/slices/modalsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";

function ModalOrderThx() {
   const dispatch = useDispatch()
   const { props: apiResponse, show } = useSelector( state => state.modals.orderThx )

   function onHide() {
      dispatch( showModal( { modal: 'orderThx', bool: false } ) )
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
         { apiResponse &&
            <div className={ s.order_thx }>
               <button type="button" className="modal-close" onClick={ onHide }/>

               <h2 className={ s.order_thx__title }>{ apiResponse.response_head }</h2>
               <p className={ s.order_thx__text }>{ apiResponse.response }</p>
            </div>
         }

      </Modal>
   )

}

export default ModalOrderThx