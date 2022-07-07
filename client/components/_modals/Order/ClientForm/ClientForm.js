import s from "./ClientForm.module.scss"
import $ from "jquery";
import { useState, useEffect } from "react"
import { Field, Form, Formik, useFormikContext } from "formik"
import Input from "../Input/Input"
import valid from "../../../../mixins/valid"
import { getMailSender, setRegister } from "../../../../mixins/submitOrder"
import OrderTabs from "../OrderTabs/OrderTabs";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setDataOrder } from "../../../../redux/slices/orderSlice";


function ClientForm( props ) {
   const { setApiResponse } = props
   const dispatch = useDispatch()
   const { order } = useSelector( state => state )
   const [ isLoading, setIsLoading ] = useState( false )
   const [ activeTab, setActiveTab ] = useState( '' )
   const [ isValid, setIsValid ] = useState( true )
   const validateName = value => !value ? 'Введите ФИО' : ''
   const validatePhone = value => value?.length <= 15 ? 'Введите номер' : ''
   const self = [
      {
         name: 'name',
         type: 'text',
         label: 'Ваше ФИО',
         validate: validateName
      },
      {
         name: 'phone',
         type: 'tel',
         label: 'Ваш номер',
         validate: validatePhone
      }
   ]
   const friend = [
      {
         name: 'friend_name',
         type: 'text',
         label: 'ФИО друга',
         validate: validateName
      }, {
         name: 'friend_phone',
         type: 'tel',
         label: 'Номер друга',
         validate: validatePhone
      }
   ]
   const [ inputs, setInputs ] = useState( { self } )

   useEffect( () => {
      window.mask = require( '../../../../plugins/jquery.mask' )
      $( 'input[name=phone]' ).mask( '+7(000)000-00-00', { placeholder: "" } )
      return () => setIsValid( 0 )
   }, [] )

   useEffect( () => {
      return activeTab === 'Другу'
         ? setInputs( { ...inputs, friend } )
         : setInputs( { self } )
   }, [ activeTab ] )

   useEffect( () => {
      if ( inputs.friend ) {
         $( 'input[name=friend_phone]' ).mask( '+7(000)000-00-00', { placeholder: "" } )
      }
   }, [ inputs ] )


   async function submit( { name, phone } ) {
      const clientData = { clientName: name, clientPhone: phone }
      const payload = { ...order, ...clientData }
      dispatch( setDataOrder( payload ) )
      setIsLoading( true )
      try {
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
      } catch ( err ) {
         console.error( err )
      }

   }

   function FormikContext( { validateForm } ) {
      const { values } = useFormikContext()

      useEffect( async () => {
         const valid = await validateForm()
         setIsValid( Object.keys( valid ).length )
      }, [ values, inputs ] )
      return null
   }


   return (
      <div>
         <h3 className={ s.title }>Кому подключаем?</h3>

         <OrderTabs setActiveTab={ setActiveTab }/>

         <Formik
            initialValues={ {
               name: '',
               phone: '',
               friend_name: '',
               friend_phone: ''
            } }
            onSubmit={ data => submit( data ) }
         >
            { ( {
                   values,
                   errors,
                   touched,
                   dirty,
                   handleChange,
                   handleSubmit,
                   validateForm
                } ) =>
               <Form onSubmit={ handleSubmit } className={ s.form }>

                  <div className={ s.form__inputs }>
                     <fieldset className={ s.form__inputs_row }>
                        { inputs.self.map( ( { name, type, label, validate } ) =>
                           <span key={ name } className={ s.form__input }>
                              <Field
                                 as={ Input }
                                 validate={ validate }
                                 type={ type }
                                 name={ name }
                                 label={ label }
                                 classNameInput={ valid( errors[name], touched[name], dirty, values[name] ) }
                              />
                              {/*{ errors[name] && touched[name] &&*/ }
                              {/*   <label className={ s.error }>{ errors[name] }</label> }*/ }
                           </span>
                        ) }
                     </fieldset>

                     { inputs.friend &&
                        <fieldset className={ s.form__inputs_row }>
                           { inputs.friend.map( ( { name, type, label, validate } ) =>
                                 <span key={ name } className={ s.form__input }>
                                    <Field
                                       as={ Input }
                                       validate={ validate }
                                       type={ type }
                                       handleChange={ handleChange }
                                       name={ name }
                                       label={ label }
                                       classNameInput={ valid( errors[name], touched[name], dirty, values[name] ) }
                                    />
                           </span>
                           ) }
                        </fieldset>
                     }
                  </div>

                  <button
                     type="submit"
                     disabled={ isLoading || isValid }
                     className={ s.form__btn + " btn" }
                  ><span>Отправить заявку</span>
                     { isLoading
                        ? <Spinner
                           as="span"
                           bsPrefix={ s.spinner + ' spinner' }
                           animation="border"
                           size="sm"
                           role="status"
                           aria-hidden="true"
                        />
                        : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                           <path d="M8 13l3-3-3-3 1-1 4 4-4 4z"></path>
                        </svg> }

                  </button>

                  <FormikContext validateForm={ validateForm }/>
               </Form>
            }
         </Formik>
      </div>
   )
}

export default ClientForm