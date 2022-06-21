import { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { Modal } from "react-bootstrap";
import $ from 'jquery'
import { Formik } from 'formik'
import { string, object } from 'yup'
import { showModal } from "../../../redux/slices/modalsSlice";
import { setDataOrder } from "../../../redux/slices/orderSlice";
import s from './ModalOrder.module.sass';
import { Spinner } from 'react-bootstrap';
import valid from '../../../mixins/valid'
import { getMailSender, setRegister } from '../../../mixins/submitOrder'


function ModalOrder( props ) {
   const { order, setDataOrder, showModal, show } = props
   const [ apiResponse, setApiResponse ] = useState( null )
   const [ isLoading, setIsLoading ] = useState( false )
   const errorMessage = 'Заполните поле!'
   const validationSchema = object().shape( {
      phone: string().min( 16, errorMessage ).required( errorMessage ),
      name: string().min( 2, errorMessage ).required( errorMessage ),
   } )

   useEffect( () => {
      if ( show ) {
         // analyticsView()
         // analyticsEvent( props.dataOrder.eventLabel.order )

         window.mask = require( '../../../plugins/jquery.mask' )
         $( 'input[name="phone"]' ).mask( '+7(000)000-00-00', {
               placeholder: "+7(   )   -  -  "
            }
         )
      }
   }, [ show ] )

   function onHide() {
      showModal( {
         modal: 'order',
         bool: false
      } )
      setApiResponse( null )
   }

   async function submit( data ) {
      setIsLoading( true )
      const payload = { data, order, setDataOrder }
      const { response: mailSender, dataOrder } = await getMailSender( payload )
      if ( mailSender.code !== '200' ) {
         const error = await setRegister( order.eventLabel, dataOrder )
         setIsLoading( false )
         if ( error ) {
            return setApiResponse( error )
         }
      }
      setIsLoading( false )
      setApiResponse( mailSender )
   }


   return (
      <Modal
         centered
         animation={ false }
         show={ show }
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
                        >
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
   order: state.order,
}), {
   showModal,
   setDataOrder,
} )( ModalOrder )
