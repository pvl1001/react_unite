import { optionSwitch } from "../../../../redux/slices/tariffsSlice";
import { connect, useSelector } from "react-redux";
import { counterSim } from "../../../../redux/slices/tariffsSlice";
import { showModal } from "../../../../redux/slices/modalsSlice";
import { sumTotalPrice } from "../../../../redux/slices/tariffsSlice";
import s from './CardOption.module.sass';

function CardOptionSim( props ) {
   const megaTariff = useSelector( state => state.megaTariff )
   const payload = { id: props.id, eqKey: props.eqKey }
   const _class = props.equipment.switch
      ? s._ + ' ' + s.active
      : s._
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
          className={ _class }>
         <div className={ `${ s.container } ${ s.sim__container }` }>
            <div className={ s.sim__text }>
               <p>SIM-карта с тарифом
                  <span onClick={ showModalTariffAll }> «Без переплат. { megaTariff.name }»</span> Скидка 40% на
                  абонентскую плату
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