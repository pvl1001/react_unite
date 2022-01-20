import './ModalOrder.scss'
import {Modal} from "react-bootstrap";
import {useEffect} from "react";
import {connect} from 'react-redux'
import showModal from "../../../redux/actions/showModal";
import '../../../plugins/jquery.mask'
import $ from 'jquery'
import {Formik} from 'formik'
import {string, object} from 'yup'

function ModalOrder(props) {
   useEffect(() => {
      $('input[name="phone"]').mask('+7(000)000-00-00', {
            placeholder: "+7(   )   -  -  "
         }
      )
   })

   const onHide = () => props.showModal({modal: 'order', bool: false})

   const errorMessage = 'Заполните поле!'

   const validationSchema = object().shape({
      phone: string().min(16, errorMessage).required(errorMessage),
      name: string().min(2, errorMessage).required(errorMessage),
   })

   function valid(errors, touch, dirty) {
      if(errors && touch) return 'error'
      if(!errors && dirty) return 'valid'
   }


   return (
      <Modal centered
             animation={false}
             show={props.show}
             onHide={onHide}
             className="order-modal">
         <div className="requisition">

            <button
               type="button"
               className="modal-close"
               onClick={onHide}
            />

            <h2>Заявка на подключение</h2>

            <Formik
               initialValues={{
                  phone: '',
                  name: '',
               }}
               validateOnBlur
               validationSchema={validationSchema}
               onSubmit={(values) => console.log(values)}
            >
               {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isValid,
                    dirty,
                    handleSubmit
                 }) => (
                  <form onSubmit={handleSubmit}>

                     <div className="order-modal__inputs">
                        <div className="order-modal__input">
                           <div className="order-modal__input-title">Контактный номер</div>
                           <input
                              name="phone"
                              value={values.phone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={valid(errors.phone, touched.phone, dirty)}
                           />
                           {errors.phone && touched.phone &&
                              <label className="error">{errors.phone}</label>
                           }
                        </div>

                        <div className="order-modal__input">
                           <div className="order-modal__input-title">Имя</div>
                           <input
                              name="name"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={valid(errors.name, touched.name, dirty)}
                           />
                           {errors.name && touched.name &&
                              <label className='error'>{errors.name}</label>}
                        </div>
                     </div>

                     <button type="submit" className="order-modal__btn btn">Отправить</button>
                  </form>
               )}
            </Formik>

         </div>
         <div className="showModal-thx" hidden>
            <button type="button" className="modal-close" onClick={onHide}/>

            <h2 className="order-thx__title">Спасибо за заявку!</h2>
            <p className="order-thx__text">Наш оператор свяжется с вами в рабочее время с 9 до 21 часов</p>
         </div>
      </Modal>
   )

}


const mapStateToProps = state => ({
   show: state.modals.order.show
})

const mapDispatchToProps = {
   showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalOrder)
