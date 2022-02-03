import {Modal} from "react-bootstrap";
import FaqMftv from "./components/FaqMftv";
import {connect} from "react-redux";
import showModal from "../../../redux/actions/showModal";
import {setDataOrder} from "../../../redux/reducers/orderReducer";
import ItemMftv from "./components/ItemMftv";
import {useEffect} from "react";
import {analyticsView} from "../../../analytics/events";


function ModalMftv(props) {
   useEffect(() => {
      analyticsView()
   })


   if (props.mftv) {

      function onHide() {
         props.showModal({modal: 'mftv', bool: false})
      }


      return (
         <Modal
            centered
            animation={false}
            show={props.show}
            onHide={onHide}
            className="tariff-modal mftv">

            <div className="tariff-modal__btn-close">
               <button
                  type="button"
                  className="modal-close"
                  onClick={onHide}
               />
            </div>

            <div
               className="tariff-modal__title wrapp"
               data-view={`mftv_${props.tariff.id}_start`}>
               <h1>МегаФон ТВ</h1>
            </div>

            <div className="tariff-modal__container">

               <ul className="tariff-modal__items">
                  {props.mftv.map(item =>
                     <ItemMftv key={item.name} item={item}/>
                  )}
               </ul>

               <FaqMftv
                  faq={props.mftv.faq}
                  tariff={props.tariff}
                  showModal={props.showModal}
                  setDataOrder={props.setDataOrder}
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
   {showModal, setDataOrder}
)(ModalMftv)