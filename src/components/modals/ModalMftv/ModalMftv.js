import './ModalMftv.scss'
import {Modal} from "react-bootstrap";
import PropTypes from "prop-types";
import FaqMftv from "./components/FaqMftv";


ModalMftv.propTypes = {
   mftv: PropTypes.array
}


export default function ModalMftv(props) {

   const handleHide = () => props.status.setStatusModalMftv( false )


   return (
      <Modal centered
             animation={false}
             show={props.status.statusModalMftv}
             onHide={handleHide}
             className="tariff-modal mftv mftv_{{id}}">

         <div className="tariff-modal__btn-close">
            <button type="button" className="modal-close" onClick={handleHide}/>
         </div>

         <Modal.Body>
            <div className="tariff-modal__title wrapp" data-view="mftv_{{id}}_start">
               <h1>МегаФон ТВ</h1>
            </div>

            <div className="tariff-modal__container">

               <ul className="tariff-modal__items">
                  {props.mftv.map(el => (
                     <li key={el.name} className="tariff-modal__item item-modal wrapp">

                        <img src={require(`../../../img/svg/mftv_${el.icon}.svg`).default}
                             className={`item-modal__logo item-modal__logo_${el.icon}`} alt={el.icon}/>

                        <p className="item-modal__desc">{el.desc}</p>

                     </li>
                  ))}
               </ul>

            <FaqMftv faq={props.mftv.faq}/>
            </div>


         </Modal.Body>
      </Modal>
   )
}