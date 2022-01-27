import '../Tariff/ModalTariff.scss'
import './ModalTariffAll.scss'
import {Modal} from "react-bootstrap";
import {connect} from "react-redux";
import showModal from "../../../redux/actions/showModal";

function ModalTariffAll(props) {

   const data = [
      {
         "name": "Абонентская плата",
         "description": "",
         "value": "360 ₽ за 30 дней"
      },
      {
         "name": "Звонки на все мобильные номера России",
         "description": "Для новых абонентов звонки на городские номера входят в пакет первые 6 месяцев",
         "value": "600 минут"
      },
      {
         "name": "Звонки на номера МегаФона России",
         "description": "",
         "value": "Безлимитно"
      },
      {
         "name": "Интернет",
         "description": "",
         "value": "Безлимитно"
      },
      {
         "name": "SMS на номера МегаФон России",
         "description": "Для новых абонентов первые 6 месяцев",
         "value": "Безлимитно"
      },
      {
         "name": "SMS на прочие номера России",
         "description": "Для новых абонентов первые 6 месяцев",
         "value": "300 сообщений"
      }
   ]

   const onHide = () => props.showModal( {modal: 'tariffAll', bool: false} )


   return (
      <Modal centered
             animation={false}
             show={props.show}
             onHide={onHide}
             className="tariff-modal tariff-all">

         <div className="tariff-modal__btn-close">
            <button type="button" className="modal-close" onClick={onHide}/>
         </div>


         <h1 className="tariff-modal__title wrapp">Без переплат. Всё</h1>

         <div className="tariff-modal__container">

            <ul className="tariff-modal__items">
               <li className="tariff-modal__item item-modal wrapp">
                  <ul className="item-modal__options">

                     {data.map( el => (
                        <li key={el.name} className="item-modal__option option-item">
                           <div className="option-item__text">

                              <p className="option-item__text-name">
                                 {el.name}
                              </p>

                              {el.description && (
                                 <p className="option-item__text-desc">
                                    {el.description}</p>
                              )}

                           </div>
                           <p className="option-item__value">
                              {el.value}
                           </p>
                        </li>
                     ) )}

                  </ul>
               </li>
            </ul>

         </div>
      </Modal>
   )

}


const mapStateToProps = state => ({
   show: state.modals.tariffAll.show
})

const mapDispatchToProps = {
   showModal
}
export default connect( mapStateToProps, mapDispatchToProps )( ModalTariffAll )
