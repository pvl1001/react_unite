import {connect} from "react-redux";
import {Modal} from "react-bootstrap";
import showModal from "../../../redux/actions/showModal";
import CardOption from "./components/CardOption";
import CardOptionSim from "./components/CardOptionSim";
import BlockInfo from "./components/BlockInfo";
import ModalTariffFooter from "./components/ModalTariffFooter";

function ModalTariff(props) {
   const onHide = () => props.showModal( {modal: 'tariff', bool: false} )

   if (props.tariff) return (
      <Modal centered
             animation={false}
             show={props.show}
             onHide={onHide}
             className="tariff-modal about-tariff-modal">

         <div className="tariff-modal__btn-close">
            <button type="button" className="modal-close" onClick={onHide}/>
         </div>


            <div className="tariff-modal__title wrapp">
               <h1>Объединяй! {props.tariff.name}</h1>
            </div>

            <div className="tariff-modal__container">

               <ul className="tariff-modal__items">
                  {props.tariff.infoModal.map( info =>
                     <BlockInfo key={info.title} info={info} tariff={props.tariff}/>)}
               </ul>

               {/*{{#h-if mftv.length '===' 2}}{{> BannerMFTVStart}}{{/h-if}}*/}
               {/*{{#h-if mftv.length '===' 4}}{{> BannerMFTVAll}}{{/h-if}}*/}

               <div className="tariff-modal__dop-options wrapp">
                  <h2 className="tariff-modal__dop-options-title">Дополнительные опции:</h2>

                  <ul className="tariff-modal__dop-options-cards">
                     {props.tariff.equipments.map( (equipment, idx) =>
                        equipment.id !== 'equipment-sim'
                           ? <CardOption key={equipment.id} equipment={equipment} idx={idx} id={props.tariff.id}/>
                           : <CardOptionSim key={equipment.id} equipment={equipment} idx={idx} id={props.tariff.id}/>
                     )}
                  </ul>

                  <div className="tariff-modal__download-pdf download-pdf">
                     <button className="download-pdf__icon">
                        <img src={require( '../../../img/svg/download-pdf.svg' ).default} alt="download-pdf"/>
                     </button>
                     <div className="download-pdf__text">
                        <button className="download-pdf__text-link">Скачать подробную информацию о тарифе</button>
                        <span className="download-pdf__text-pdf">(PDF, 0.4 MB)</span>
                     </div>
                  </div>

               </div>

            </div>

            <ModalTariffFooter tariff={props.tariff}/>

      </Modal>

   )

   return null
}


const mapStateToProps = state => ({
   show: state.modals.tariff.show,
   tariff: state.tariffs.find( tariff => tariff.id === state.modals.tariff.props ),
})

const mapDispatchToProps = {
   showModal,
}

export default connect( mapStateToProps, mapDispatchToProps )( ModalTariff )