import './ModalMftv.scss'
import {Modal} from "react-bootstrap";
import PropTypes from "prop-types";
import FaqMftv from "./components/FaqMftv";
import {connect} from "react-redux";
import showModal from "../../../redux/actions/showModal";


function ModalMftv(props) {

   const onHide = () => props.showModal( {modal: 'mftv', bool: false} )

   if (props.mftv) return (
      <Modal centered
             animation={false}
             show={props.show}
             onHide={onHide}
             className="tariff-modal mftv">

         <div className="tariff-modal__btn-close">
            <button type="button" className="modal-close" onClick={onHide}/>
         </div>

         <div className="tariff-modal__title wrapp" data-view="mftv_{{id}}_start">
            <h1>МегаФон ТВ</h1>
         </div>

         <div className="tariff-modal__container">

            <ul className="tariff-modal__items">
               {props.mftv.map( el => (
                  <li key={el.name} className="tariff-modal__item item-modal wrapp">

                     <img src={require( `../../../img/svg/mftv_${el.icon}.svg` ).default}
                          className={`item-modal__logo item-modal__logo_${el.icon}`} height={40} alt={el.icon}/>

                     <p className="item-modal__desc">{el.desc}</p>

                  </li>
               ) )}
            </ul>

            <FaqMftv faq={props.mftv.faq}/>
         </div>


      </Modal>
   )

   return null
}

const mapStateTotProps = (state) => ({
   show: state.modals.mftv.show,
   mftv: state.modals.mftv.props
})

const mapDispatchToProps = {showModal}

export default connect( mapStateTotProps, mapDispatchToProps )( ModalMftv )