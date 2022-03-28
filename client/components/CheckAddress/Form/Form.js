import s from './Form.module.sass';
import { Spinner } from 'react-bootstrap';

function Form( props ) {

   const hidden = props.result !== null

   return (
      <div id="addressCheckHead" hidden={ hidden }>

         <p className={ s.title }>
            Проверь возможность <nobr>подключения по твоему</nobr> адресу
         </p>

         <form
            id="CHKADR"
            name="address"
            className={ s.input }
         >
            <div>
               <input
                  type="text"
                  id="addressCheck"
                  name="address"
                  placeholder="Адрес"
               />

               { props.isShowLabel &&
                  <label className={ s.label } htmlFor="addressCheck">{ props.formLabel }</label>
               }
            </div>

            <button
               type="submit"
               className={ 'btn ' + s.btn }
               data-view="block_checkaddress"
               disabled={ props.isLoading }
               onClick={ props.submit }>
               <span>
                  Проверить
                  { props.isLoading &&
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

      </div>
   )
}

export default Form