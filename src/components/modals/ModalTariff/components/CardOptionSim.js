import optionSwitch from "../../../../redux/actions/optionSwitch";
import {connect} from "react-redux";
import {counterSim} from "../../../../redux/actions/counterSim";
import showModal from "../../../../redux/actions/showModal";
import {sumTotalPrice} from "../../../../redux/actions/sumTotalPrice";

function CardOptionSim(props) {

   const payload = {id: props.id, index: props.idx}
   const showModalTariffAll = () => props.showModal( {modal: 'tariffAll', bool: true} )

   const handleSwitch = (e) => {
      props.optionSwitch( {...payload, checked: e.target.checked} )
      props.sumTotalPrice( payload )
   }

   const handlerCounter = (name) => {
      props.counterSim( {...payload, cnt: props.equipment.cnt, name} )
      props.sumTotalPrice( payload )
   }


   return (
      <li key={props.equipment.id}
          className="tariff-modal__dop-options-card dop-options-card">
         <div className="dop-options-card__sim">
            <p>SIM-карта с тарифом
               <span onClick={showModalTariffAll}> «Без переплат. Всё»</span> Скидка 40% на абонентскую плату
            </p>
            <div className="tariff-modal__counter counter">
               <button className="counter__minus"
                       disabled={props.equipment.cnt === 1}
                       onClick={() => handlerCounter( 'minus' )}>
                  &minus;
               </button>
               <input type="text" readOnly value={props.equipment.cnt}/>
               <button className="counter__plus"
                       disabled={props.equipment.cnt === 10}
                       onClick={() => handlerCounter( 'plus' )}>
                  +
               </button>
            </div>
         </div>

         <div className="dop-options-card__price">
            <div className="price">
               <span className="price__old">
                  {props.equipment.sumOldPrice || props.equipment.oldPrice} ₽
               </span>
               <span className="price__current">
                  {props.equipment.sumPrice || props.equipment.price}
               </span> <span> ₽</span>
               <span className="price__month"> в месяц</span>
            </div>

            <label className="switch">
               <input type="checkbox"
                      onChange={(e) => handleSwitch(e)}
                      checked={props.equipment.switch}/>
               <span className="round"/>
            </label>
         </div>
      </li>
   )
}


const mapDispatchToProps = {
   showModal,
   optionSwitch,
   counterSim,
   sumTotalPrice
}

export default connect( null, mapDispatchToProps )( CardOptionSim )