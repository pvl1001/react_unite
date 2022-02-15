import { optionSwitch } from "../../../../redux/tariffs/tariffsAction";
import { connect } from "react-redux";
import { counterSim } from "../../../../redux/tariffs/tariffsAction";
import { showModal } from "../../../../redux/modals/modalsAction";
import { sumTotalPrice } from "../../../../redux/tariffs/tariffsAction";
import s from './CardOption.module.sass'

function CardOptionSim( props ) {

   const payload = { id: props.id, index: props.idx }
   const showModalTariffAll = () => props.showModal( { modal: 'tariffAll', bool: true } )

   const handleSwitch = ( e ) => {
      props.optionSwitch( { ...payload, checked: e.target.checked } )
      props.sumTotalPrice( payload )
   }

   const handlerCounter = ( name ) => {
      props.counterSim( { ...payload, cnt: props.equipment.cnt, name } )
      props.sumTotalPrice( payload )
   }


   return (
      <li key={ props.equipment.id }
          className={ s.container }>
         <div className={ s.sim }>
            <p>SIM-карта с тарифом
               <span onClick={ showModalTariffAll }> «Без переплат. Всё»</span> Скидка 40% на абонентскую плату
            </p>
            <div className="counter">
               <button className="counter__minus"
                       disabled={ props.equipment.cnt === 1 }
                       onClick={ () => handlerCounter( 'minus' ) }>
                  &minus;
               </button>
               <input type="text" readOnly value={ props.equipment.cnt }/>
               <button className="counter__plus"
                       disabled={ props.equipment.cnt === 10 }
                       onClick={ () => handlerCounter( 'plus' ) }>
                  +
               </button>
            </div>
         </div>

         <div className={ s.price }>
            <div className={ s.price__price }>
               <span className={ s.price__old }>
                  { props.equipment.sumOldPrice || props.equipment.oldPrice } ₽
               </span>
               <span className={ s.price__current }>
                  { props.equipment.sumPrice || props.equipment.price }
               </span> <span> ₽</span>
               <span className={ s.price__month }> в месяц</span>
            </div>

            <label className={ s.price__switch + " switch" }>
               <input type="checkbox"
                      onChange={ ( e ) => handleSwitch( e ) }
                      checked={ props.equipment.switch }/>
               <span className="round"/>
            </label>
         </div>
      </li>
   )
}


export default connect( null, {
   showModal,
   optionSwitch,
   counterSim,
   sumTotalPrice
} )( CardOptionSim )