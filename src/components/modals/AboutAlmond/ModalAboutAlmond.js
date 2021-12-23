import './AboutAlmond.scss'
import {Modal} from "react-bootstrap";
import {connect} from "react-redux";
import showModal from "../../../redux/actions/showModal";


function ModalAboutAlmond(props) {

   const onHide = () => props.showModal( {modal: 'aboutAlmond', bool: false} )

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
                           <input type="checkbox"/>
                           <span className="round"/>
                        </div>
                        <div className="item-option__text">
                           <p>Аренда Wi-Fi роутера</p>
                           <span className="item-option__num">{props.data.price}</span><span> ₽ в месяц</span>
                        </div>
                     </label>

                     <div className="aboutAlmond__counter counter">
                        <div className="counter__minus">-
                        </div>
                        <input type="text" readOnly value="1"/>
                        <div className="counter__plus">+
                        </div>
                     </div>

                  </div>

                  <div className="download-pdf">
                     <a href="#" className="download-pdf__icon">
                        <img src={require( '../../../img/svg/download-pdf.svg' ).default} alt="download-pdf"/>
                     </a>
                     <div className="download-pdf__text">
                        <a href="#">Скачать подробную информацию</a><br/> <span>(PDF, 0.4 MB)</span>
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
   data: state.modals.aboutAlmond.props
})

const mapDispatchToProps = {
   showModal
}

export default connect( mapStateToProps, mapDispatchToProps )( ModalAboutAlmond )