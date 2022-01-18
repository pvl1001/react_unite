import '../../../plugins/jquery.autocomplete'


function Form(props) {

   const hidden = props.result !== null

   return (
      <div id="addressCheckHead" hidden={hidden}>
         <p className="unite-address__title">
            Проверь возможность <nobr>подключения по твоему</nobr> адресу
         </p>
         <form id="CHKADR" name="address" className="unite-address__input">
            <div>
               <input type="text" id="addressCheck" name="address" placeholder="Адрес"/>

               {props.isShowLabel &&
                  <label className="error" htmlFor="addressCheck">
                     Выберите адрес дома из выпадающего списка!</label>
               }
            </div>

            <button onClick={props.submit} type="submit" className="btn">Проверить</button>
         </form>
      </div>
   )
}

export default Form