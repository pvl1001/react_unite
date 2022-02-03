import {Modal} from "react-bootstrap";
import {connect} from "react-redux";
import showModal from '../../../redux/actions/showModal'

function ChoiceRouter(props) {

   const onHide = () => props.showModal({modal: 'choiceRouter', bool: false})


   return (
      <Modal
         centered
         animation={false}
         show={props.show}
         onHide={onHide}
         className="choiceRouter"
      >
         <button type="button" className="modal-close" onClick={onHide}/>

         <div className="choiceRouter__wrapp">
            <h2 className="choiceRouter__title">Какой роутер мне подойдет?</h2>
            <div className="choiceRouter__images">
               <div className="choiceRouter__img">
                  <img src={require(`/assets/img/pic/Almond-3_about.webp`).default.src} alt="Almond-3"/>
                  <p className="choiceRouter__name">Almond 3</p>
               </div>
               <div className="choiceRouter__img">
                  <img src={require(`/assets/img/pic/Almond-3S_about.webp`).default.src} alt="Almond-3S"/>
                  <p className="choiceRouter__name">Almond 3S</p>
               </div>
            </div>
            <p className="choiceRouter__text">
               Роутер Almond 3S имеет встроенный аккумулятор и поддержку SIM-карты. Если связь оборвется — роутер
               перейдет
               на мобильную сеть LTE. А если начнутся перебои с электричеством, доступ в
               интернет сохранится благодаря
               встроенному аккумулятору.
            </p>
         </div>

      </Modal>
   )
}

export default connect(
   state => ({
      show: state.modals.choiceRouter.show
   }),
   {showModal}
)(ChoiceRouter)