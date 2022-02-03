import {Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {showModal} from "../../../redux/modals/modalsAction";
import {
   counterAlmond,
   sumAlmondTotalPrice,
   switchAlmond,
} from "../../../redux/tariffs/tariffsAction";
import {
   counterAlmondEq,
   sumAlmondTotalPriceEq,
   switchAlmondEq
} from '../../../redux/equipments/equipmentsAction'


function ModalAboutAlmond(props) {

   if (props.data) {

      const almondOrSensor = props.data.params ? 'Almond' : 'Sensor'

      const handleSwitchAlmond = (e) => props.showModalTariff
         ? props.switchAlmond({...props, cnt, checked: e.target.checked})
         : props.switchAlmondEq({...props, cnt, checked: e.target.checked})

      const handlerCounter = (name, checked) => props.showModalTariff
         ? props.counterAlmond({...props, name, cnt, checked})
         : props.counterAlmondEq({...props, name, cnt, checked})

      const getData = (name) => {
         if (props.showModalTariff) {
            const almond = props
               .tariffs.find(tariff => tariff.id === props.tariffID)
               .equipments.find(eq => eq.id === 'eq-almond')
            return almond.equipments[props.data.index]?.[name]
         } else {
            const almond = props.equipments.find(eq => eq.id === 'eq-almond')
            return almond.equipments[props.data.index]?.[name]
         }
      }

      const onHide = () => {
         props.showModalTariff
            ? props.sumAlmondTotalPrice(props.tariffID)
            : props.sumAlmondTotalPriceEq()

         props.showModal({modal: 'aboutAlmond', bool: false})
      }

      const checked = getData('checked') || false
      const cnt = getData('cnt') || 1


      return (
         <Modal
            centered
            animation={false}
            show={props.show}
            onHide={onHide}
            className={`modalAboutAlmond about${almondOrSensor}`}

         >
            <button type="button" className="modal-close" onClick={onHide}/>
            <div className={`about${almondOrSensor}__wrapp`}>

               <div className={`about${almondOrSensor}__img`}
               >
                  <img src={require(`/assets/img/pic/${props.data.img}.webp`).default.src}
                       alt={props.data.img}/>
               </div>

               <div className={`about${almondOrSensor}__text`}>
                  <h2 className={`about${almondOrSensor}__title`}>{props.data.name}</h2>

                  {props.data.params
                     ? <div className={`about${almondOrSensor}__params`}>
                        {props.data.params.map(param =>
                           <div key={param.icon} className={`about${almondOrSensor}__param`}>
                              <div className={`about${almondOrSensor}__param-img`}>
                                 <img src={require(`/assets/img/svg/${param.icon}.svg`).default.src}
                                      alt={param.icon}/>
                              </div>
                              <div className={`about${almondOrSensor}__param-text`}
                                   dangerouslySetInnerHTML={{__html: param.text}}/>
                           </div>
                        )}
                     </div>
                     : <p className={`about${almondOrSensor}__desc`}>{props.data.desc}</p>
                  }

                  <div className={`about${almondOrSensor}__switch item-option`}>
                     <label>
                        <div className="switch">
                           <input type="checkbox"
                                  checked={checked}
                                  onChange={(e) => handleSwitchAlmond(e)}/>
                           <span className="round"/>
                        </div>

                        <div className="item-option__text">
                           <p>Аренда Wi-Fi роутера</p>
                           <span className="item-option__num">{props.data.price}</span><span> ₽ в месяц</span>
                        </div>
                     </label>

                     <div className={`about${almondOrSensor}__counter counter`}>
                        <button
                           className="counter__minus"
                           disabled={cnt === 1}
                           onClick={() => handlerCounter('minus', checked)}>
                           &minus;
                        </button>

                        <input type="text" readOnly value={cnt}/>

                        <button
                           className="counter__plus"
                           onClick={() => handlerCounter('plus')}>
                           +
                        </button>
                     </div>

                  </div>

                  <div className="tariff-modal__download-pdf download-pdf">
                     <button className="download-pdf__icon">
                        <img src={require('../../../assets/img/svg/download-pdf.svg').default.src}
                             alt="download-pdf"/>
                     </button>
                     <div className="download-pdf__text">
                        <a href=" " className="download-pdf__text-link">Скачать подробную информацию</a>
                        <br/>
                        <span className="download-pdf__text-pdf">(PDF, 0.4 MB)</span>
                     </div>
                  </div>
               </div>
            </div>

         </Modal>
      )

   }

   return null
}


const mapStateToProps = (state) => ({
   show: state.modals.aboutAlmond.show,
   showModalTariff: state.modals.tariff.show,
   data: state.modals.aboutAlmond.props,
   tariffID: state.modals.tariff.props,
   tariffs: state.tariffs,
   equipments: state.equipments
})

const mapDispatchToProps = {
   showModal,
   switchAlmond,
   switchAlmondEq,
   counterAlmond,
   counterAlmondEq,
   sumAlmondTotalPrice,
   sumAlmondTotalPriceEq
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAboutAlmond)