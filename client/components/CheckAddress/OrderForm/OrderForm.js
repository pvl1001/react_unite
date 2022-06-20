import s from "../AddressForm/AddressForm.module.scss";
import $ from "jquery";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { object, string } from "yup";
import { Formik } from "formik";
import Image from "next/image";
// import CloseIcon from "../../../public/svg/close.svg";

function OrderForm( props ) {
   const { title, icon, description, label } = props.result.text
   const [ focus, setFocus ] = useState( { name: false, phone: false } )

   useEffect( () => {
      window.mask = require( '../../../plugins/jquery.mask' )
      $( 'input[name="phone"]' ).mask( '+7(000)000-00-00', { placeholder: "" } )
   }, [ props.result.result ] )

   const errorMessage = 'Заполните поле!'
   const validationSchema = object().shape( {
      phone: string().min( 16, errorMessage ).required( errorMessage ),
      name: string().min( 2, errorMessage ).required( errorMessage ),
   } )

   function valid( errors, touch, dirty ) {
      if ( errors && touch ) return 'error'
      if ( !errors && dirty ) return 'valid'
   }

   function submit( data ) {
      console.log( data )
   }


   return (
      <div className={ s._ }>
         <h1 className={ s.title }>
            { title }
            <Image src={ `/svg/${ icon }.svg` } width={ 38 } height={ 40 }/>
         </h1>
         <p className={ s.description } dangerouslySetInnerHTML={ { __html: description } }/>

         <Formik
            initialValues={ {
               name: '',
               phone: '',
            } }
            validateOnBlur
            validationSchema={ validationSchema }
            onSubmit={ ( data ) => submit( data ) }
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
                        {/*<button*/}
                        {/*   hidden={ !focus.name }*/}
                        {/*   className={ s.clear_btn }*/}
                        {/*   onClick={ () => values.name = '' }*/}
                        {/*><CloseIcon/>*/}
                        {/*</button>*/}

                        <input
                           type="text"
                           name="name"
                           value={ values.name }
                           onInput={ handleChange }
                           onFocus={ () => setFocus( { ...focus, name: true } ) }
                           onBlur={ (e) => {
                              handleBlur(e)
                              setFocus( { ...focus, name: false } )
                           } }
                           className={ valid( errors.name, touched.name, dirty ) }
                        />
                        <label hidden={ values.name }>Имя</label>

                        { errors.name && touched.name &&
                           <label className={ s.error }>{ errors.name }</label> }

                     </div>
                     <div className={ s.input }>
                        {/*<button*/}
                        {/*        className={ s.clear_btn }*/}
                        {/*        onClick={ () => values.phone = '' }*/}
                        {/*><CloseIcon/>*/}
                        {/*</button>*/}

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
                        disabled={ props.disabled }
                     >Отправить { props.disabled &&
                        <Spinner
                           as="span"
                           animation="border"
                           size="sm"
                           role="status"
                           aria-hidden="true"
                        /> }
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
