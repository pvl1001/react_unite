import s from './ChoiceRouter.module.sass'
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { showModal } from '../../../redux/modals/modalsAction';
import Image from 'next/image';


function ChoiceRouter( props ) {

   const onHide = () => props.showModal( { modal: 'choiceRouter', bool: false } )


   return (
      <Modal
         centered
         animation={ false }
         show={ props.show }
         onHide={ onHide }
         className={ s.modal }
         dialogClassName={ s.modal_dialog }
         contentClassName={ s.modal_content }
      >
         <button type="button" className="modal-close" onClick={ onHide }/>

         <div className={ s.wrapp }>
            <h2 className={ s.title }>Какой роутер мне подойдет?</h2>
            <div className={ s.images }>
               <div className={ s.img }>
                  <div className={ s.img_wrapp }>
                     <Image
                        alt="Almond-3"
                        src={ '/images/almond/Almond-3_about.webp' }
                        layout={ 'fill' }
                        objectFit={ 'contain' }
                     />
                  </div>
                  <p className={ s.name }>Almond 3</p>
               </div>
               <div className={ s.img }>
                  <div className={ s.img_wrapp }>
                     <Image
                        alt="Almond-3S"
                        src={ '/images/almond/Almond-3S_about.webp' }
                        layout={ 'fill' }
                        objectFit={ 'contain' }
                     />
                  </div>

                  <p className={ s.name }>Almond 3S</p>
               </div>
            </div>
            <p className={ s.text }>
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


export default connect( state => ({
   show: state.modals.choiceRouter.show
}), {
   showModal
} )( ChoiceRouter )