import s from './ModalAboutAlmond.module.sass'
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { showModal } from "../../../redux/modals/modalsAction";
import {
   counterAlmond,
   sumAlmondTotalPrice,
   switchAlmond,
} from "../../../redux/tariffs/tariffsAction";
import {
   counterAlmondEq,
   sumAlmondTotalPriceEq,
   switchAlmondEq
} from '../../../redux/equipments/equipmentsAction';


function ModalAboutAlmond( props ) {

   if ( props.data ) {

      const routerOrSensor = props.data.params
         ? 'router'
         : 'sensor'

      const handleSwitchAlmond = ( e ) => props.showModalTariff
         ? props.switchAlmond( { ...props, cnt, checked: e.target.checked } )
         : props.switchAlmondEq( { ...props, cnt, checked: e.target.checked } )

      const handlerCounter = ( name, checked ) => props.showModalTariff
         ? props.counterAlmond( { ...props, name, cnt, checked } )
         : props.counterAlmondEq( { ...props, name, cnt, checked } )

      const getData = ( name ) => {
         if ( props.showModalTariff ) {
            const almond = props
               .tariffs.find( tariff => tariff.id === props.tariffID )
               .equipments.find( eq => eq.id === 'eq-almond' )
            return almond.equipments[props.data.index]?.[name]
         } else {
            const almond = props.equipments.find( eq => eq.id === 'eq-almond' )
            return almond.equipments[props.data.index]?.[name]
         }
      }

      const onHide = () => {
         props.showModalTariff
            ? props.sumAlmondTotalPrice( props.tariffID )
            : props.sumAlmondTotalPriceEq()

         props.showModal( { modal: 'aboutAlmond', bool: false } )
      }

      const checked = getData( 'checked' ) || false
      const cnt = getData( 'cnt' ) || 1


      return (
         <Modal
            centered
            animation={ false }
            show={ props.show }
            onHide={ onHide }
            className={ s[routerOrSensor] }
            dialogClassName={ s.modal_dialog }
            contentClassName={ s.modal_content }
         >
            <button type="button" className="modal-close" onClick={ onHide }/>
            <div className={ s[`${ routerOrSensor }__wrapp`] }>

               <div className={ s[`${ routerOrSensor }__img`] }>
                  <img src={ `/images/almond/${ props.data.img }.webp` } alt={ props.data.img }/>
               </div>

               <div className={ s[`${ routerOrSensor }__text`] }>
                  <h2 className={ s[`${ routerOrSensor }__title`] }>{ props.data.name }</h2>

                  { props.data.params
                     ? <div className={ s[`${ routerOrSensor }__params`] }>
                        { props.data.params.map( param =>
                           <div key={ param.icon } className={ s[`${ routerOrSensor }__param`] }>
                              <div className={ s[`${ routerOrSensor }__param-img`] }>
                                 <img src={ `/svg/${ param.icon }.svg` } alt={ param.icon }/>
                              </div>
                              <div className={ s[`${ routerOrSensor }__param-text`] }
                                   dangerouslySetInnerHTML={ { __html: param.text } }/>
                           </div>
                        ) }
                     </div>
                     : <p className={ s[`${ routerOrSensor }__desc`] }>{ props.data.desc }</p>
                  }

                  <div className={ s[`${ routerOrSensor }__switch`] + ` ${ s.item_option }` }>
                     <label>
                        <div className="switch">
                           <input
                              type="checkbox"
                              checked={ checked }
                              onChange={ ( e ) => handleSwitchAlmond( e ) }
                           />
                           <span className="round"/>
                        </div>

                        <div className={ s.item_option__text }>
                           <p>Аренда Wi-Fi роутера</p>
                           <span>{ props.data.price }</span>
                           <span> ₽ в месяц</span>
                        </div>
                     </label>

                     <div className={ s[`${ routerOrSensor }__counter`] + ' counter' }>
                        <button
                           className="counter__minus"
                           disabled={ cnt === 1 }
                           onClick={ () => handlerCounter( 'minus', checked ) }>
                           &minus;
                        </button>

                        <input type="text" readOnly value={ cnt }/>

                        <button
                           className="counter__plus"
                           onClick={ () => handlerCounter( 'plus' ) }>
                           +
                        </button>
                     </div>

                  </div>

                  <div className="tariff-modal__download-pdf download-pdf">
                     <button className="download-pdf__icon">
                        <img src={ '/svg/download-pdf.svg' }
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


export default connect( state => ({
   show: state.modals.aboutAlmond.show,
   showModalTariff: state.modals.tariff.show,
   data: state.modals.aboutAlmond.props,
   tariffID: state.modals.tariff.props,
   tariffs: state.tariffs,
   equipments: state.equipments
}), {
   showModal,
   switchAlmond,
   switchAlmondEq,
   counterAlmond,
   counterAlmondEq,
   sumAlmondTotalPrice,
   sumAlmondTotalPriceEq
} )( ModalAboutAlmond )