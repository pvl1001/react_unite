import {Modal} from "react-bootstrap";
import {connect} from "react-redux";
import Plan from "./Plan";
import {showModal} from "../../../redux/modals/modalsAction";
import {changePlan} from "../../../redux/equipments/equipmentsAction";
import {setDataOrder} from "../../../redux/order/orderAction";
import {useEffect, useState} from "react";
import Image from 'next/image';


function ModalEquipment(props) {

   const [pricePlan, setPricePlan] = useState(null)
   useEffect(() => {
      props.show && setPricePlan(props.eq.plan?.find(p => p.checked).value ?? props.eq.price)
   }, [props.show, props.eq?.plan, props.eq?.price])


   if (props.show) {

      const onHide = () => props.showModal({modal: 'equipment', bool: false})

      const eventLabel = props.eq.dataView === 'router-4g'
         ? {
            order: `click_button_order_vezde_ntv`,
            send: `click_button_send_vezde_ntv`
         }
         : {
            order: `click_button_order_${props.eq.dataView}`,
            send: `click_button_${props.eq.dataView}_send_equipment`
         }

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
            price: pricePlan,
            eventLabel: eventLabel
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
                              <img src={require(`/assets/img/svg/${param.icon}.svg`).default.src} height={32} alt="icon"/>}
                           <p dangerouslySetInnerHTML={{__html: param.text}}/>
                        </li>)
                     )}
                  </ul>

                  <div className="tariff-modal__download-pdf download-pdf">
                     <button className="download-pdf__icon">
                        <img src={require('../../../assets/img/svg/download-pdf.svg').default.src}
                             alt="download-pdf"/>
                     </button>
                     <div className="download-pdf__text">
                        <a href=" " className="download-pdf__text-link">Скачать подробную информацию о тарифе</a>
                        <span className="download-pdf__text-pdf">(PDF, 0.4 MB)</span>
                     </div>
                  </div>
               </div>

               <div className="performance__img">
                  <Image
                     alt={props.eq.name}
                     src={`/images/equipments/${props.eq.img}.webp`}
                     layout={'fill'}
                     objectFit={'contain'}
                  />
               </div>
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
