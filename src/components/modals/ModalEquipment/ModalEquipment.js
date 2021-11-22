import './Perfomance.scss'
import {Modal} from "react-bootstrap";
import download_pdf from '../../../img/svg/download-pdf.svg'
import PropTypes from 'prop-types'
import ModalOrder from "../Order/ModalOrder";
import {useState} from "react";
import Plan from "./components/Plan";


ModalEquipment.propTypes = {
   status: PropTypes.object,
   eq: PropTypes.object,
   handleChangePlan: PropTypes.func,
}


export default function ModalEquipment(props) {
   const [showModalOrder, setShowModalOrder] = useState( false )
   const price = props.eq.plan?.find(el => el.checked).value

   const handleHide = () => props.status.setStatusModalEquipment( false )

   return (
      <Modal centered
             animation={false}
             className="performance"
             show={props.status.statusModalEquipment}
             onHide={handleHide}>
         <Modal.Body>

            <button type="button" className="modal-close" onClick={handleHide}/>

            <h1 className="performance__title">
               {props.eq.name === 'Android TV' && <>Приставка</>} {props.eq.name}
            </h1>

            {props.eq.name === 'Android TV' && (
               <div className="performance__sale performance-sale">
                  <div className="performance-sale__mark mark">Акция</div>
                  <p className="performance-sale__text">Возьми в аренду Android TV и получи год сериалов в
                     подарок</p>
               </div>)
            }

            <div className="performance__container">
               <div className="performance__text">
                  <h3>Характеристики {props.eq.name.split( ' ' )[0] === 'Роутер' ? <>роутера</> : <>приставки</>}:</h3>

                  <ul>
                     {props.eq.params.map( (param, i) => (
                        <li key={i}>
                           {param.icon && (
                              <img src={param.icon} alt="icon"/>)}
                           <p dangerouslySetInnerHTML={{__html: param.text}}/>
                        </li>)
                     )}
                  </ul>

                  <div className="performance__download-info download-info">
                     <img src={download_pdf} className="download-info__icon" alt="Скачать pdf"/>
                     <div>
                        <a href="#" className="download-info__link">Скачать подробную информацию</a>
                        <p className="download-info__size">(PDF, 0.4 MB)</p>
                     </div>
                  </div>
               </div>

               <picture className="performance__img">
                  <img src={props.eq.img} alt={props.eq.name}/>
               </picture>
            </div>

            <Plan eq={props.eq} handleChange={props.handleChangePlan}/>

            <div className="modal-order">
               <div className="modal-order__text"><p><span>{price}</span> ₽ в месяц</p></div>
               <button className="btn" onClick={() => setShowModalOrder( true )}>Заказать</button>
            </div>

         </Modal.Body>

         <ModalOrder status={{showModalOrder, setShowModalOrder}}/>
      </Modal>
   )
}