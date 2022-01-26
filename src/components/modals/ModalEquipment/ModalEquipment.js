import './Perfomance.scss'
import {Modal} from "react-bootstrap";
import {connect} from "react-redux";
import Plan from "./components/Plan";
import showModal from "../../../redux/actions/showModal";
import {changePlan} from "../../../redux/actions/equpment";
import {setDataOrder} from "../../../redux/reducers/orderReducer";
import {useEffect, useState} from "react";


function ModalEquipment(props) {

   const [pricePlan, setPricePlan] = useState(null)
   useEffect(() => {
      props.show && setPricePlan(props.eq.plan?.find(p => p.checked).value ?? props.eq.price)
   }, [props.show, props.eq?.plan, props.eq?.price])


   if (props.show) {

      const onHide = () => props.showModal({modal: 'equipment', bool: false})

      function handleChangePlan(payload) {
         props.changePlan(payload)
         setPricePlan(payload.value)
      }

      function showModalOrder() {
         props.showModal({modal: 'order', bool: true})
         props.setDataOrder({
            tariffName: props.tariff.name,
            tariffId: props.tariff.tariffId,
            equipments: props.eq.dataView,
            price: pricePlan
         })
      }


      return (
         <Modal
            centered
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
                  <p className="performance-sale__text">
                     Возьми в аренду Android TV и получи год сериалов в подарок
                  </p>
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
                        <a href=" " className="download-pdf__text-link">Скачать подробную информацию о тарифе</a>
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
                     <div className="modal-order__text">
                        <p>{pricePlan} ₽ в месяц</p>
                     </div>

                     <button
                        className="btn"
                        onClick={showModalOrder}>
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


export default connect(
   state => ({
      show: state.modals.equipment.show,
      showModalTariff: state.modals.tariff.show,
      eq: state.modals.equipment.props,
      get tariff() {
         return this.eq?.id === 'eq-unite'
            ? state.tariffs.find(tariff => tariff.id === 'around')
            : state.tariffs.find(tariff => tariff.id === 'for-their')
      }
   }),
   {
      showModal,
      changePlan,
      setDataOrder
   }
)(ModalEquipment)
