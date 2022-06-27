import s from './ModalMftv.module.sass'
import { Modal } from "react-bootstrap";
import FaqMftv from "./FaqMftv/FaqMftv";
import { connect } from "react-redux";
import { showModal } from "../../../redux/slices/modalsSlice";
import { setDataOrder } from "../../../redux/slices/orderSlice";
import ItemMftv from "./ItemMftv/ItemMftv";


function ModalMftv( { show, tariff, showModal, setDataOrder } ) {

   if ( tariff ) {

      function onHide() {
         showModal( { modal: 'mftv', bool: false } )
      }


      return (
         <Modal
            centered
            animation={ false }
            show={ show }
            onHide={ onHide }
            className={ s.modal }
            dialogClassName={ s.modal_dialog }
            contentClassName={ s.modal_content }
         >

            <div className={ s.btn_close }>
               <button
                  type="button"
                  className={ s.modal_close + " modal-close-round" }
                  onClick={ onHide }
               />
            </div>

            <h1 className={ `${ s.title } ${ s.wrapp }` }>МегаФон ТВ</h1>

            <div className={ s.container }>

               <ul className={ s.items }>
                  { tariff.mftv.map( item =>
                     <ItemMftv key={ item.name } item={ item }/>
                  ) }
               </ul>

               <FaqMftv
                  faq={ tariff.mftv.faq }
                  tariff={ tariff }
                  showModal={ showModal }
                  setDataOrder={ setDataOrder }
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
      tariff: state.modals.mftv.props?.tariff,
   }),
   { showModal, setDataOrder }
)( ModalMftv )