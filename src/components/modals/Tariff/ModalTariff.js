import {connect} from "react-redux";
import {Modal} from "react-bootstrap";
import showModal from "../../../redux/actions/showModal";
import CardOption from "./components/CardOption";
import CardOptionSim from "./components/CardOptionSim";
import BlockInfo from "./components/BlockInfo";
import ModalTariffFooter from "./components/ModalTariffFooter";
import BannerMfTv from "./components/BannerMfTv/BannerMfTv";
import {useEffect} from "react";
import {sumTotalPrice} from "../../../redux/actions/sumTotalPrice";

function ModalTariff(props) {
   useEffect(() => {
      props.show && props.sumTotalPrice(props.tariff)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   },[props.show])

   if (props.show) {

      function onHide() {
         props.showModal({modal: 'tariff', bool: false})
      }


      return (
         <Modal
            centered
            animation={false}
            show={props.show}
            onHide={onHide}
            className="tariff-modal about-tariff-modal">

            <div className="tariff-modal__btn-close">
               <button
                  type="button"
                  className="modal-close"
                  onClick={onHide}
               />
            </div>


            <div className="tariff-modal__title wrapp">
               <h1>Объединяй! {props.tariff.name}</h1>
            </div>

            <div className="tariff-modal__container">

               <ul className="tariff-modal__items">
                  {props.tariff.infoModal.map(info =>
                     <BlockInfo key={info.title} info={info} tariff={props.tariff}/>)}
               </ul>

               {props.tariff.mftv &&
                  <BannerMfTv mftv={props.tariff.mftv} tariff={props.tariff}/>}

               <div className="tariff-modal__dop-options wrapp">
                  <h2 className="tariff-modal__dop-options-title">Дополнительные опции:</h2>

                  <ul className="tariff-modal__dop-options-cards">
                     {props.tariff.equipments.map((equipment, idx) =>
                        equipment.id !== 'equipment-sim'
                           ? <CardOption key={equipment.id} equipment={equipment} idx={idx} id={props.tariff.id}/>
                           : <CardOptionSim key={equipment.id} equipment={equipment} idx={idx} id={props.tariff.id}/>
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

            </div>

            <ModalTariffFooter tariff={props.tariff}/>

         </Modal>
      )
   }

   return null
}


export default connect(
   state => ({
      show: state.modals.tariff.show,
      tariff: state.tariffs.find(tariff => tariff.id === state.modals.tariff.props),
   }),
   {
      showModal,
      sumTotalPrice
   }
)(ModalTariff)