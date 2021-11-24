import './ModalOrder.scss'
import {Modal} from "react-bootstrap";
import PropTypes from "prop-types";
import {useContext, useState} from "react";
import {Context} from "../../../pages/App";


export default function ModalOrder () {
   const {cxt, setState} = useContext(Context)

   const handleHide = () => setState({...cxt, showModalOrder: false})


   const [nameValue, setNameValue] = useState('')
   const [phoneValue, setPhoneValue] = useState('')


   const handleSubmit = (e) => {
      e.preventDefault()
   }


   // if(nameValue, phoneValue)
      const validate = () => {
         return nameValue && phoneValue > 10
      }


   return (
      <Modal centered
             animation={false}
             show={cxt.showModalOrder}
             onHide={handleHide}
             className="order-modal">
            <Modal.Body className="requisition" >
               <button type="button" className="modal-close" onClick={handleHide}/>

               <h2>Заявка на подключение</h2>
               <form onSubmit={handleSubmit} className="needs-validation" id="orderForm">
                  <div className="order-modal__inputs">

                     <div className="order-modal__input">
                        <div className="order-modal__input-title">Контактный номер</div>
                        <input type="text"
                               name="phone"
                               value={nameValue}
                               onChange={e => setNameValue(e.target.value)}/>
                     </div>

                     <div className="order-modal__input">
                        <div className="order-modal__input-title">Имя</div>
                        <input type="text"
                               name="name"
                               value={phoneValue}
                               onChange={e => setPhoneValue(e.target.value)}/>
                     </div>
                  </div>

                  <button type="submit" className="order-modal__btn btn" data-view="modal_order" >Отправить</button>
               </form>
            </Modal.Body>
            <Modal.Body className="order-thx" hidden>
               <button type="button" className="modal-close" onClick={handleHide}/>

               <h2 className="order-thx__title">Спасибо за заявку!</h2>
               <p className="order-thx__text">Наш оператор свяжется с вами в рабочее время с 9 до 21 часов</p>
            </Modal.Body>
      </Modal>
   )

}
