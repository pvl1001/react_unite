import s from "./AddressForm.module.scss";
import { Spinner } from "react-bootstrap";


function AddressForm( props ) {
   const { addressValue, setAddressValue, hidden, showLabel, formLabel, disabled, submit } = props


   return (
      <div className={ s._ } hidden={ hidden }>

         <h1 className={ s.title }>
            Проверь возможность подключения по твоему адресу
         </h1>
         <p className={ s.description }>Просто укажи улицу и номер дома</p>

         <form
            id="CHKADR"
            name="address_form"
            className={ s.form }
         >
            <div className={ s.form__container }>
               <p className={ s.input__label }>Город, улицу, дом</p>
               <div className={ s.input }>
                  <input
                     type="text"
                     id="addressCheck"
                     name="address"
                     onInput={ e => setAddressValue( e.target.value ) }
                  />
                  <label hidden={ addressValue }>Москва, ул. Ленина, д. 1</label>
               </div>

               { showLabel &&
                  <label className={ s.error } htmlFor="addressCheck">{ formLabel }</label>
               }
            </div>

            <button
               type="submit"
               className={ "btn " + s.btn }
               disabled={ disabled }
               onClick={ submit }
            >Проверить { disabled &&
               <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
               /> }
            </button>
         </form>
      </div>
   )
}


export default AddressForm
