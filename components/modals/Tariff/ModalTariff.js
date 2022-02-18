import s from './ModalTariff.module.sass'
import { useEffect } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { showModal } from "../../../redux/slices/modalsSlice";
import { sumTotalPrice } from "../../../redux/slices/tariffsSlice";
import CardOption from "./CardOption/CardOption";
import CardOptionSim from "./CardOption/CardOptionSim";
import BlockInfo from "./BlockInfo/BlockInfo";
import Footer from "./Footer/Footer";
import BannerMfTv from "./BannerMfTv/BannerMfTv";

function ModalTariff( props ) {
   useEffect( () => {
      props.show && props.sumTotalPrice( props.tariff )
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [ props.show ] )

   if ( props.show ) {

      const premiumStyle = props.tariff.id === 'premium'
         ? { backgroundColor: 'var(--mf-premium)' }
         : {}

      function onHide() {
         props.showModal( {
            modal: 'tariff',
            bool: false
         } )
      }


      return (
         <Modal
            centered
            animation={ false }
            show={ props.show }
            onHide={ onHide }
            className={ s.modal }
            dialogClassName={ s.modal_dialog }
            contentClassName={ s.modal_content }>

            <div className={ s.btn_close }>
               <button
                  type="button"
                  className={ s.modal_close + " modal-close" }
                  onClick={ onHide }
               />
            </div>


            <div style={ premiumStyle } className={ `${ s.title } ${ s.wrapp }` }>
               <h1>Объединяй! { props.tariff.name }</h1>
            </div>

            <div className={ s.container }>

               <ul className={ s.items }>
                  { props.tariff.infoModal.map( info =>
                     <BlockInfo
                        key={ info.title }
                        info={ info }
                        tariff={ props.tariff }
                     />
                  ) }
               </ul>

               { props.tariff.mftv &&
                  <BannerMfTv
                     mftv={ props.tariff.mftv }
                     tariff={ props.tariff }
                  />
               }

               <div className={ `${ s.dop_options } ${ s.wrapp }` }>
                  <h2 className={ s.dop_options__title }>Дополнительные опции:</h2>

                  <ul className={ s.dop_options__cards }>
                     { props.tariff.equipments.map( ( equipment, idx ) =>
                        equipment.id !== 'equipment-sim'
                           ? <CardOption key={ equipment.id } equipment={ equipment } idx={ idx }
                                         id={ props.tariff.id }/>
                           : <CardOptionSim key={ equipment.id } equipment={ equipment } idx={ idx }
                                            id={ props.tariff.id }/>
                     ) }
                  </ul>

                  <div className={ "download-pdf" }>
                     <button className="download-pdf__icon">
                        <img src={ '/svg/download-pdf.svg' } alt="download-pdf"/>
                     </button>
                     <div className={ s.download_pdf__text }>
                        <a href=" " className="download-pdf__text-link">Скачать подробную информацию о тарифе</a>
                        <span className="download-pdf__text-pdf">(PDF, 0.4 MB)</span>
                     </div>
                  </div>

               </div>

            </div>

            <Footer tariff={ props.tariff }/>

         </Modal>
      )
   }

   return null
}


export default connect(
   state => ({
      show: state.modals.tariff.show,
      tariff: state.tariffs.find( tariff => tariff.id === state.modals.tariff.props ),
   }),
   {
      showModal,
      sumTotalPrice
   }
)( ModalTariff )