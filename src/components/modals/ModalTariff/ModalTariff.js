import {connect} from "react-redux";
import {Modal} from "react-bootstrap";
import showModal from "../../../redux/actions/showModal";
import CardOption from "./components/CardOption";
import CardOptionSim from "./components/CardOptionSim";

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

         <Modal.Body>

            <div className="tariff-modal__title wrapp">
               <h1>Объединяй! {props.tariff.name}</h1>
            </div>

            <div className="tariff-modal__container">

               <ul className="tariff-modal__items">
                  {props.tariff.infoModal.map( info =>
                     <li key={info.title} className="tariff-modal__item item-modal wrapp">
                        <div className="item-modal__title">
                           <div className="item-modal__title-icon">
                              <img src={require( `../../../img/svg/${info.icon}` ).default} alt={info.icon}/>
                           </div>
                           <h2>{info.title}</h2>
                        </div>

                        <ul className="item-modal__options">
                           {info.options.map( option =>
                              <li key={option.name} className="item-modal__option option-item">
                                 <div className="option-item__text">
                                    <p className="option-item__text-name">
                                       {option.name}
                                    </p>
                                    {option.description &&
                                       <p className="option-item__text-desc">
                                          {option.description}
                                       </p>
                                    }
                                 </div>
                                 <p className="option-item__value">
                                    {option.value}
                                    {(option.name === 'Мегафон ТВ' && props.tariff.mftv) &&
                                       props.tariff.mftv.map( el => <span key={el.name}>, <br/> {el.name}</span> )
                                    }
                                 </p>
                              </li>
                           )}
                        </ul>
                     </li>
                  )}
               </ul>

               {/*{{#h-if mftv.length '===' 2}}{{> BannerMFTVStart}}{{/h-if}}*/}
               {/*{{#h-if mftv.length '===' 4}}{{> BannerMFTVAll}}{{/h-if}}*/}

               <div className="tariff-modal__dop-options wrapp">
                  <h2 className="tariff-modal__dop-options-title">Дополнительные опции:</h2>

                  <ul className="tariff-modal__dop-options-cards">

                     {props.tariff.equipments.map( (equipment, idx) =>
                           equipment.id !== 'equipment-sim'
                              ? <CardOption key={equipment.id} equipment={equipment} idx={idx} id={props.tariff.id}/>
                              : <CardOptionSim key={equipment.id} equipment={equipment}/>
                     )}


                  </ul>

                  <div className="tariff-modal__download-pdf download-pdf">
                     <a href="#" className="download-pdf__icon">
                        <img src={require( '../../../img/svg/download-pdf.svg' ).default} alt="download-pdf"/>
                     </a>
                     <div className="download-pdf__text">
                        <a href="#">Скачать подробную информацию о тарифе</a>
                        <span>(PDF, 0.4 MB)</span>
                     </div>
                  </div>

               </div>

            </div>

            <div className="tariff-modal__footer wrapp">
               <div className="tariff-modal__price price">

                  {props.tariff.oldPrice &&
                     <span className="price__old">{props.tariff.oldPrice} ₽</span>}

                  <span className="price__current">{props.tariff.price}</span>

                  <span className="price__month"> ₽ в месяц</span>

                  {props.tariff.iconInfo &&
                     <div className="price__icon price__icon_all" aria-expanded="false"/>}
               </div>

               <button type="button"
                       className="tariff-modal__price-btn btn"
                       data-toggle="modal"
                       data-target="#showOrder"
                       data-view="modal_{{dataView}}"
               >Заказать</button>
               <p className="tariff-modal__price-desc">с учетом выбранных опций</p>
            </div>

         </Modal.Body>
      </Modal>

   )

   return null
}


const mapStateToProps = state => ({
   show: state.modals.tariff.show,
   tariff: state.tariffs.find(tariff => tariff.id === state.modals.tariff.props),
})

const mapDispatchToProps = {
   showModal
}

export default connect( mapStateToProps, mapDispatchToProps )( ModalTariff )