import { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { Modal } from "react-bootstrap";
import $ from 'jquery'
import { Formik } from 'formik'
import { string, object } from 'yup'
import { showModal } from "../../../redux/slices/modalsSlice";
import { setDataOrder } from "../../../redux/slices/orderSlice";
import { api } from "../../../api/api";
import { analyticsEvent, analyticsView } from "../../../analytics/events";
import s from './ModalOrder.module.sass';
import { Spinner } from 'react-bootstrap';


function ModalOrder( props ) {
   useEffect( () => {
      if ( props.show ) {
         analyticsView()
         analyticsEvent( props.dataOrder.eventLabel.order )

         window.mask = require( '../../../plugins/jquery.mask' )
         $( 'input[name="phone"]' ).mask( '+7(000)000-00-00', {
               placeholder: "+7(   )   -  -  "
            }
         )
      }
   }, [ props.show ] )

   const [ apiResponse, setApiResponse ] = useState( null )
   const errorMessage = 'Заполните поле!'
   const errorResponse = {
      response_head: 'Сервис временно не доступен',
      response: 'Пожалуйста, свяжитесь с нами по телефону, либо попробуйте позднее'
   }
   const validationSchema = object().shape( {
      phone: string().min( 16, errorMessage ).required( errorMessage ),
      name: string().min( 2, errorMessage ).required( errorMessage ),
   } )
   const [ isLoading, setIsLoading ] = useState( false )

   function onHide() {
      props.showModal( {
         modal: 'order',
         bool: false
      } )
      setApiResponse( null )
   }

   function valid( errors, touch, dirty ) {
      if ( errors && touch ) return 'error'
      if ( !errors && dirty ) return 'valid'
   }

   async function submit( data ) {
      props.setDataOrder( {
         ...props.dataOrder,
         clientName: data.name,
         clientPhone: data.phone,
      } )

      const dataOrder = {
         form_name: 'express_form_ccmp_short',
         city: props.dataOrder.city,
         clientName: data.name,
         clientPhone: data.phone,
         clientAddress: props.dataOrder.clientAddress,
         house_guid: props.dataOrder.house_guid,
         tariffId: props.dataOrder.tariffId,
         tariffName: props.dataOrder.tariffName,
         comment: props.dataOrder.comment,
         clientSite: location.host + location.pathname,
         calltracking_params: ct( 'calltracking_params', 'g96m2c8n' )?.sessionId ?? '',
      }
      try {
         setIsLoading( true )
         const resMailSender = await api( 'https://home.megafon.ru/form/mail-sender', dataOrder )
         setIsLoading( false )
         // console.log(props.dataOrder.eventLabel.send)
         if ( resMailSender.code === '200' ) {
            analyticsEvent( props.dataOrder.eventLabel.send )
            gtag( 'event', 'requestLandingSend', { 'event_category': 'order' } )

            if ( ym !== undefined ) {
               ym( 66149989, 'reachGoal', 'zayavka_megafon' )
               ym( 66149989, 'reachGoal', props.dataOrder.eventLabel.send )
            }

            if ( dataOrder.calltracking_params ) {
               const ct_site_id = '37410'
               const ct_data = {
                  fio: dataOrder.clientName,
                  phoneNumber: dataOrder.clientPhone,
                  email: '',
                  subject: 'Заявка с сайта ' + dataOrder.city,
                  tags: 'id' + dataOrder.tariffId + ',' + dataOrder.tariffName,
                  comment: dataOrder.comment,
                  sessionId: dataOrder.calltracking_params
               }

               api( `https://api.calltouch.ru/calls-service/RestAPI/requests/'${ ct_site_id }'/register/`, ct_data )
                  .catch( () => setApiResponse( errorResponse ) )
            }
            return
         }
         setApiResponse( resMailSender )
      } catch ( err ) {
         setIsLoading( false )
         setApiResponse( errorResponse )
      }
   }


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
         { !apiResponse
            ? <div>

               <button
                  type="button"
                  className="modal-close"
                  onClick={ onHide }
               />

               <h2>Заявка на подключение</h2>

               <Formik
                  initialValues={ {
                     phone: '',
                     name: '',
                  } }
                  validateOnBlur
                  validationSchema={ validationSchema }
                  onSubmit={ ( data ) => submit( data ) }
               >
                  { ( {
                         values,
                         errors,
                         touched,
                         dirty,
                         handleChange,
                         handleBlur,
                         handleSubmit
                      } ) =>
                     <form onSubmit={ handleSubmit } className={ s.form }>

                        <div className={ s.form__inputs }>
                           <div className={ s.form__input }>
                              <div className={ s.form__input_label }>Контактный номер</div>
                              <input
                                 type="text"
                                 name="phone"
                                 value={ values.phone }
                                 onChange={ handleChange }
                                 onBlur={ handleBlur }
                                 className={ valid( errors.phone, touched.phone, dirty ) }
                              />
                              { errors.phone && touched.phone &&
                                 <label className="error">{ errors.phone }</label>
                              }
                           </div>

                           <div className={ s.form__input }>
                              <div className={ s.form__input_label }>Имя</div>
                              <input
                                 type="text"
                                 name="name"
                                 value={ values.name }
                                 onChange={ handleChange }
                                 onBlur={ handleBlur }
                                 className={ valid( errors.name, touched.name, dirty ) }
                              />
                              { errors.name && touched.name &&
                                 <label className='error'>{ errors.name }</label> }
                           </div>
                        </div>

                        <button
                           type="submit"
                           className={ s.form__btn + " btn" }
                           disabled={ isLoading }
                           data-view="modal_order">
                           <span>
                              Отправить
                              { isLoading &&
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                 />
                              }
                           </span>

                        </button>
                     </form>
                  }
               </Formik>
            </div>
            : <div className={ s.order_thx }>
               <button type="button" className="modal-close" onClick={ onHide }/>

               <h2 className={ s.order_thx__title }>{ apiResponse.response_head }</h2>
               <p className={ s.order_thx__text }>{ apiResponse.response }</p>
            </div>
         }
      </Modal>
   )

}


export default connect( state => ({
   show: state.modals.order.show,
   dataOrder: state.order,
}), {
   showModal,
   setDataOrder,
} )( ModalOrder )
