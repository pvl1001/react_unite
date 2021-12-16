import './Perfomance.scss'
import {Modal} from "react-bootstrap";
import download_pdf from '../../../img/svg/download-pdf.svg'
import Plan from "./components/Plan";
import {connect} from "react-redux";
import showModal from "../../../redux/actions/showModal";
import {changePlan} from "../../../redux/actions/equpment";


function ModalEquipment(props) {

   // const price = state.props?.plan?.find( el => el.checked ).value
   const onHide = () => props.showModal( {modal: 'equipment', bool: false} )

   const handleChangePlan = (id) => {
      props.changePlan(id)
   }


   if (props.eq) return (
      <Modal centered
             animation={false}
             className="performance"
             show={props.show}
             onHide={onHide}
      >
         <Modal.Body>

            <button type="button" className="modal-close" onClick={onHide}/>
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
                           {param.icon && <img src={param.icon} height={32} alt="icon"/>}
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

            <Plan eq={props.eq} handleChange={handleChangePlan}/>

            <div className="modal-showOrder">
               {/*<div className="modal-order__text"><p><span>{price}</span> ₽ в месяц</p></div>*/}
               <button className="btn" onClick={() => props.showModal( {modal: 'order', bool: true} )}>Заказать</button>
            </div>

         </Modal.Body>

      </Modal>
   )
   return null

}


const mapStateToProps = state => ({
   show: state.modals.equipment.show,
   eq: state.modals.equipment.props
})

const mapDispatchToProps = {
   showModal, changePlan
}

export default connect( mapStateToProps, mapDispatchToProps )( ModalEquipment )
