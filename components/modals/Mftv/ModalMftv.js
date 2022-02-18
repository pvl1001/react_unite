import s from '/components/modals/Tariff/ModalTariff.module.sass'
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import FaqMftv from "./FaqMftv/FaqMftv";
import { connect } from "react-redux";
import { showModal } from "../../../redux/slices/modalsSlice";
import { setDataOrder } from "../../../redux/slices/orderSlice";
import ItemMftv from "./ItemMftv/ItemMftv";
import { analyticsView } from "../../../analytics/events";


function ModalMftv( props ) {
   useEffect( () => {
      analyticsView()
   } )


   if ( props.mftv ) {

      function onHide() {
         props.showModal( { modal: 'mftv', bool: false } )
      }


      return (
         <Modal
            centered
            animation={ false }
            show={ props.show }
            onHide={ onHide }
            className={ s.modal }
            dialogClassName={ s.modal_dialog }
            contentClassName={ s.modal_content }
         >

            <div className={ s.btn_close }>
               <button
                  type="button"
                  className={ s.modal_close + " modal-close" }
                  onClick={ onHide }
               />
            </div>

            <div
               className={ `${ s.title } ${ s.wrapp }` }
               data-view={ `mftv_${ props.tariff.id }_start` }>
               <h1>МегаФон ТВ</h1>
            </div>

            <div className={ s.container }>

               <ul className={ s.items }>
                  { props.mftv.map( item =>
                     <ItemMftv key={ item.name } item={ item }/>
                  ) }
               </ul>

               <FaqMftv
                  faq={ props.mftv.faq }
                  tariff={ props.tariff }
                  showModal={ props.showModal }
                  setDataOrder={ props.setDataOrder }
               />
            </div>

         </Modal>
      )
   }

   return null
}


export default connect(
   state => ({
      show: state.modals.mftv.show,
      mftv: state.modals.mftv.props?.mftv,
      tariff: state.modals.mftv.props?.tariff,
   }),
   { showModal, setDataOrder }
)( ModalMftv )