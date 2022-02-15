import s from './Form.module.sass'

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
                  <label className={ s.label } htmlFor="addressCheck">
                     Выберите адрес дома из выпадающего списка!</label>
               }
            </div>

            <button
               type="submit"
               className={ 'btn ' + s.btn }
               data-view="block_checkaddress"
               onClick={ props.submit }>
               Проверить
            </button>

         </form>

      </div>
   )
}

export default Form