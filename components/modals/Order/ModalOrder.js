import {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {Modal} from "react-bootstrap";
import $ from 'jquery'
import {Formik} from 'formik'
import {string, object} from 'yup'
import showModal from "../../../redux/actions/showModal";
import {setDataOrder} from "../../../redux/reducers/orderReducer";
import {api} from "../../../api";
import {analyticsEvent, analyticsView} from "../../../analytics/events";


function ModalOrder(props) {
   useEffect(() => {
      if (props.show) {
         analyticsView()
         analyticsEvent(props.dataOrder.eventLabel.order)

         window.mask = require('../../../plugins/jquery.mask')
         $('input[name="phone"]').mask('+7(000)000-00-00', {
               placeholder: "+7(   )   -  -  "
            }
         )
      }
   }, [props.show])

   const [apiResponse, setApiResponse] = useState(null)

   const errorMessage = 'Заполните поле!'

   const validationSchema = object().shape({
      phone: string().min(16, errorMessage).required(errorMessage),
      name: string().min(2, errorMessage).required(errorMessage),
   })

   function onHide() {
      props.showModal({modal: 'order', bool: false})
      setApiResponse(null)
   }

   function valid(errors, touch, dirty) {
      if (errors && touch) return 'error'
      if (!errors && dirty) return 'valid'
   }

   function submit(data) {
      props.setDataOrder({
         ...props.dataOrder,
         clientName: data.name,
         clientPhone: data.phone,
      })

      const dataOrder = {
         city: props.dataOrder.city,
         clientName: data.name,
         clientPhone: data.phone,
         clientAddress: props.dataOrder.clientAddress,
         house_guid: props.dataOrder.house_guid,
         tariffId: props.dataOrder.tariffId,
         tariffName: props.dataOrder.tariffName,
         clientSite: props.dataOrder.clientSite,
         comment: props.dataOrder.comment
      }

      api('https://home.megafon.ru/form/mail-sender', dataOrder)
         .then((data) => {
            // console.log(props.dataOrder.eventLabel.send)
            if (data.code === '200') {
               analyticsEvent(props.dataOrder.eventLabel.send)
               gtag('event', 'requestLandingSend', {'event_category': 'order'})

               if (window.ym !== undefined) {
                  window.ym(66149989, 'reachGoal', 'zayavka_megafon')
                  window.ym(66149989, 'reachGoal', props.dataOrder.eventLabel.send)
               }

               if (props.dataOrder.calltracking_params) {
                  const ct_site_id = '37410'
                  const ct_data = {
                     fio: props.dataOrder.clientName,
                     phoneNumber: props.dataOrder.clientPhone,
                     email: '',
                     subject: 'Заявка с сайта ' + props.dataOrder.city,
                     tags: 'id' + props.dataOrder.tariffId + ',' + props.dataOrder.tariffName,
                     comment: props.dataOrder.comment,
                     sessionId: props.dataOrder.calltracking_params
                  }

                  api(`https://api.calltouch.ru/calls-service/RestAPI/requests/'${ct_site_id}'/register/`, ct_data)
                     .catch(err => console.log('Ошибка отправки запроса /register: ', err))
               }
               return
            }

            setApiResponse(data)
         })
         .catch(() => setApiResponse({
            response_head: 'Сервис временно не доступен',
            response: 'Пожалуйста, свяжитесь с нами по телефону, либо попробуйте позднее'
         }))
   }


   return (
      <Modal
         centered
         animation={false}
         show={props.show}
         onHide={onHide}
         className="order-modal"
      >
         {!apiResponse
            ? <div className="requisition">

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
                  onSubmit={(data) => submit(data)}
               >
                  {({
                       values,
                       errors,
                       touched,
                       dirty,
                       handleChange,
                       handleBlur,
                       handleSubmit
                    }) => (
                     <form onSubmit={handleSubmit}>

                        <div className="order-modal__inputs">
                           <div className="order-modal__input">
                              <div className="order-modal__input-title">Контактный номер</div>
                              <input
                                 type="text"
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
                                 type="text"
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

                        <button
                           type="submit"
                           className="order-modal__btn btn"
                           data-view="modal_order">
                           Отправить
                        </button>
                     </form>
                  )}
               </Formik>
            </div>
            : <div className="order-thx">
               <button type="button" className="modal-close" onClick={onHide}/>

               <h2 className="order-thx__title">{apiResponse.response_head}</h2>
               <p className="order-thx__text">{apiResponse.response}</p>
            </div>
         }
      </Modal>
   )

}


export default connect(
   state => ({
      show: state.modals.order.show,
      dataOrder: state.order,
   }),
   {
      showModal,
      setDataOrder,
   }
)(ModalOrder)
