import './ModalAboutAlmond.scss'
import {Modal} from "react-bootstrap";
import {connect} from "react-redux";
import showModal from "../../../redux/actions/showModal";
import {counterAlmond, sumAlmondTotalPrice, switchAlmond} from "../../../redux/actions/almond";


function ModalAboutAlmond(props) {

   const onHide = () => {
      props.sumAlmondTotalPrice(props.tariffID)
      props.showModal( {modal: 'aboutAlmond', bool: false} )
   }
   const handleSwitchAlmond = (e) => props.switchAlmond( {...props, cnt, checked: e.target.checked} )
   const handlerCounter = (name, checked) => props.counterAlmond( {...props, name, cnt, checked} )
   const getData = (name) => {
      if (props.data) {
         const almond = props
            .tariffs.find( tariff => tariff.id === props.tariffID )
            .equipments.find( eq => eq.id === 'eq-almond' )

         return almond.equipments[props.data.index]?.[name]
      }
   }
   if (props.data) {
      var checked = getData( 'checked' ) || false
      var cnt = getData( 'cnt' ) || 1
   }


   return (
      props.data ?
         <Modal centered
                animation={false}
                show={props.show}
                onHide={onHide}
                className="modalAboutAlmond aboutAlmond"

         >
            <button type="button" className="modal-close" onClick={onHide}/>
            <div className="aboutAlmond__wrapp">

               <div className={props.data.params
                  ? 'aboutAlmond__img-router'
                  : 'aboutAlmond__img-sensor'}
               >
                  <img src={require( `../../../img/pic/${props.data.img}.webp` ).default}
                       alt={props.data.img}/>
               </div>

               <div className="aboutAlmond__text">
                  <h2 className="aboutAlmond__title">{props.data.name}</h2>

                  {props.data.params
                     ? <div className="aboutAlmond__params">
                        {props.data.params.map( param =>
                           <div key={param.icon} className="aboutAlmond__param">
                              <div className="aboutAlmond__param-img">
                                 <img src={require( `../../../img/svg/${param.icon}.svg` ).default}
                                      alt={param.icon}/>
                              </div>
                              <div className="aboutAlmond__param-text"
                                   dangerouslySetInnerHTML={{__html: param.text}}/>
                           </div>
                        )}
                     </div>
                     : <p className="aboutAlmond__desc">{props.data.desc}</p>
                  }

                  <div className="aboutAlmond__switch item-option">
                     <label>
                        <div className="switch">
                           <input type="checkbox"
                                  checked={checked}
                                  onChange={(e) => handleSwitchAlmond( e )}/>
                           <span className="round"/>
                        </div>
                        <div className="item-option__text">
                           <p>Аренда Wi-Fi роутера</p>
                           <span className="item-option__num">{props.data.price}</span><span> ₽ в месяц</span>
                        </div>
                     </label>

                     <div className="aboutAlmond__counter counter">
                        <button className="counter__minus"
                                disabled={cnt === 1}
                                onClick={() => handlerCounter( 'minus', checked )}>
                           &minus;
                        </button>
                        <input type="text" readOnly value={cnt}/>
                        <button className="counter__plus"
                                onClick={() => handlerCounter( 'plus' )}>
                           +
                        </button>
                     </div>

                  </div>

                  <div className="tariff-modal__download-pdf download-pdf">
                     <button className="download-pdf__icon">
                        <img src={require( '../../../img/svg/download-pdf.svg' ).default} alt="download-pdf"/>
                     </button>
                     <div className="download-pdf__text">
                        <button className="download-pdf__text-link">Скачать подробную информацию</button><br/>
                        <span className="download-pdf__text-pdf">(PDF, 0.4 MB)</span>
                     </div>
                  </div>
               </div>
            </div>

         </Modal>
         : null
   )
}


const mapStateToProps = (state) => ({
   show: state.modals.aboutAlmond.show,
   data: state.modals.aboutAlmond.props,
   tariffID: state.modals.tariff.props,
   tariffs: state.tariffs
})

const mapDispatchToProps = {
   showModal,
   switchAlmond,
   counterAlmond,
   sumAlmondTotalPrice,
}

export default connect( mapStateToProps, mapDispatchToProps )( ModalAboutAlmond )