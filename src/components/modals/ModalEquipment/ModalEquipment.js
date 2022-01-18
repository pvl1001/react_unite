import './Perfomance.scss'
import {Modal} from "react-bootstrap";
import Plan from "./components/Plan";
import {connect} from "react-redux";
import showModal from "../../../redux/actions/showModal";
import {changePlan} from "../../../redux/actions/equpment";


function ModalEquipment(props) {
   if (props.eq) {
      const onHide = () => props.showModal({modal: 'equipment', bool: false})

      const handleChangePlan = (id) => props.changePlan(id)


      return (
         <Modal centered
                  animation={false}
                  className="performance"
                  show={props.show}
                  onHide={onHide}
         >

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

            <div className="performance__container"
                 style={props.eq.style}
            >
               <div className="performance__text">
                  <h3>Характеристики {props.eq.name.split(' ')[0] === 'Роутер' ? <>роутера</> : <>приставки</>}:</h3>

                  <ul>
                     {props.eq.params.map((param, i) => (
                        <li key={i}>
                           {param.icon &&
                              <img src={require(`../../../img/svg/${param.icon}.svg`).default} height={32} alt="icon"/>}
                           <p dangerouslySetInnerHTML={{__html: param.text}}/>
                        </li>)
                     )}
                  </ul>

                  <div className="tariff-modal__download-pdf download-pdf">
                     <button className="download-pdf__icon">
                        <img src={require('../../../img/svg/download-pdf.svg').default} alt="download-pdf"/>
                     </button>
                     <div className="download-pdf__text">
                        <button className="download-pdf__text-link">Скачать подробную информацию о тарифе</button>
                        <span className="download-pdf__text-pdf">(PDF, 0.4 MB)</span>
                     </div>
                  </div>
               </div>

               <picture className="performance__img">
                  <img src={require(`../../../img/pic/${props.eq.img}.webp`).default} alt={props.eq.name}/>
               </picture>
            </div>

            {!props.showModalTariff &&
               <>
                  {props.eq.plan &&
                     <Plan
                        eq={props.eq}
                        handleChange={handleChangePlan}
                     />
                  }

                  <div className="modal-order">
                     <div className="modal-order__text"><p><span>{props.eq.price}</span> ₽ в месяц</p></div>
                     <button
                        className="btn"
                        onClick={() => props.showModal({modal: 'order', bool: true})}
                     >
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


const mapStateToProps = state => ({
   show: state.modals.equipment.show,
   showModalTariff: state.modals.tariff.show,
   eq: state.modals.equipment.props
})

const mapDispatchToProps = {
   showModal, changePlan
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalEquipment)
