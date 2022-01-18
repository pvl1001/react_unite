import './ModalMftv.scss'
import {Modal} from "react-bootstrap";
import FaqMftv from "./components/FaqMftv";
import {connect} from "react-redux";
import showModal from "../../../redux/actions/showModal";
import ItemMftv from "./components/ItemMftv";


function ModalMftv(props) {
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

            <div className="tariff-modal__title wrapp">
               <h1>МегаФон ТВ</h1>
            </div>

            <div className="tariff-modal__container">

               <ul className="tariff-modal__items">
                  {props.mftv.map(item =>
                     <ItemMftv key={item.name} item={item}/>
                  )}
               </ul>

               <FaqMftv faq={props.mftv.faq}/>
            </div>


         </Modal>
      )
   }

   return null
}


const mapStateTotProps = (state) => ({
   show: state.modals.mftv.show,
   mftv: state.modals.mftv.props
})

const mapDispatchToProps = {showModal}

export default connect(mapStateTotProps, mapDispatchToProps)(ModalMftv)