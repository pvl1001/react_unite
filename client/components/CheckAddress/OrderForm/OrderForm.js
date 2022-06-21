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
   const { title, icon, description, label } = props.result.text
   const { order } = useSelector( state => state )
   const dispatch = useDispatch()
   const [ isLoading, setIsLoading ] = useState( false )

   useEffect( () => {
      window.mask = require( '../../../plugins/jquery.mask' )
      $( 'input[name="phone"]' ).mask( '+7(000)000-00-00', { placeholder: "" } )
   }, [ props.result.result ] )

   const errorMessage = 'Заполните поле!'
   const validationSchema = object().shape( {
      phone: string().min( 16, errorMessage ).required( errorMessage ),
      name: string().min( 2, errorMessage ).required( errorMessage ),
   } )

   async function submit( data ) {
      setIsLoading( true )
      const payload = { data, order, setDataOrder }
      const { response: mailSender, dataOrder } = await getMailSender( payload )

      if ( mailSender.code === '200' ) {
         const error = await setRegister( order.eventLabel, dataOrder )
         setIsLoading( false )
         if ( error ) {
            return dispatch( showModal( { modal: 'orderThx', bool: true, props: error } ) )
         }
         props.resultNull()
      }
      setIsLoading( false )
      dispatch( showModal( { modal: 'orderThx', bool: true, props: mailSender } ) )
   }

   return (
      <div className={ s._ }>
         <h1 className={ s.title }>
            { title }
            <span className={ s.smile_icon }>
               <Image  src={ `/svg/${ icon }.svg` } width={ 38 } height={ 40 }/>
            </span>
         </h1>
         <p className={ s.description } dangerouslySetInnerHTML={ { __html: description } }/>

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
                  <p className={ s.input__label }>{ label }</p>
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
