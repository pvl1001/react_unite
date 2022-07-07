import s from "../AddressForm/AddressForm.module.scss";
import $ from "jquery";
import { useEffect, useState } from "react";
import { object, string } from "yup";
import { Formik } from "formik";
import Image from "next/image";
import valid from '../../../mixins/valid'
import { getMailSender, setRegister } from "../../../mixins/submitOrder";
import { useDispatch, useSelector } from "react-redux";
import { setDataOrder } from "../../../redux/slices/orderSlice";
import { showModal } from "../../../redux/slices/modalsSlice";


function OrderForm( props ) {
   const { result, resultNull } = props
   const dispatch = useDispatch()
   const { order, tariffs } = useSelector( state => state )
   const [ isLoading, setIsLoading ] = useState( false )
   const [ eventLabel, setEventLabel ] = useState( {} )

   useEffect( () => {
      window.mask = require( '../../../plugins/jquery.mask' )
      $( 'input[name="phone"]' ).mask( '+7(000)000-00-00', { placeholder: "" } )

      setEventLabel( `click_button_send_${ result.result === 1 ? 'address_success' : 'address' }` )
   }, [ result.result ] )

   const errorMessage = 'Заполните поле!'
   const validationSchema = object().shape( {
      phone: string().min( 16, errorMessage ).required( errorMessage ),
      name: string().min( 2, errorMessage ).required( errorMessage ),
   } )

   async function submit( { name, phone } ) {
      setIsLoading( true )
      const clientData = { clientName: name, clientPhone: phone }
      const payload = {
         ...order, ...clientData,
         tariffId: tariffs.their.tariffId,
         tariffName: tariffs.their.name,
         price: tariffs.their.price
      }
      dispatch( setDataOrder( payload ) )
      try {
         const { response: mailSender, dataOrder } = await getMailSender( payload )
         if ( mailSender.code === '200' ) {
            const error = await setRegister( eventLabel, dataOrder )
            setIsLoading( false )
            if ( error ) {
               return dispatch( showModal( { modal: 'orderResponse', bool: true, props: error } ) )
            }
            resultNull()
         }
         setIsLoading( false )
         dispatch( showModal( {
            modal: 'order',
            bool: true,
            eventLabel,
            props: { mailSender, tariff: tariffs.their, id: 'their', eventLabel }
         } ) )
      } catch ( err ) {
         console.error( err )
      }

   }

   return (
      <div className={ s._ }>
         <h1 className={ s.title }>
            { result.text.title }
            <span className={ s.smile_icon }>
               <Image src={ `/svg/${ result.text.icon }.svg` } width={ 38 } height={ 40 }/>
            </span>
         </h1>
         <p className={ s.description } dangerouslySetInnerHTML={ { __html: result.text.description } }/>

         <Formik
            initialValues={ {
               name: '',
               phone: '',
            } }
            validateOnBlur
            validationSchema={ validationSchema }
            onSubmit={ data => submit( data ) }
         >{ ( {
                 values,
                 errors,
                 touched,
                 dirty,
                 handleChange,
                 handleBlur,
                 handleSubmit
              } ) =>
            <form
               name="address_order"
               className={ s.form }
               onSubmit={ handleSubmit }
            >
               <div className={ s.form__container }>
                  <p className={ s.input__label }>{ result.text.label }</p>
                  <div className={ s.inputs_row }>
                     <div className={ s.input }>
                        <input
                           type="text"
                           name="name"
                           value={ values.name }
                           onInput={ handleChange }
                           onBlur={ handleBlur }
                           className={ valid( errors.name, touched.name, dirty ) }
                        />
                        <label hidden={ values.name }>Имя</label>

                        { errors.name && touched.name &&
                           <label className={ s.error }>{ errors.name }</label> }

                     </div>
                     <div className={ s.input }>
                        <input
                           type="text"
                           name="phone"
                           value={ values.phone }
                           onInput={ handleChange }
                           onBlur={ handleBlur }
                           className={ valid( errors.phone, touched.phone, dirty ) }
                        />
                        <label hidden={ values.phone }>Телефон</label>

                        { errors.phone && touched.phone &&
                           <label className={ s.error }>{ errors.phone }</label> }
                     </div>
                     <button
                        type="submit"
                        className={ "btn " + s.btn }
                        disabled={ isLoading }
                     >Отправить
                     </button>
                  </div>

               </div>

            </form>
         }
         </Formik>
      </div>
   )
}

export default OrderForm
