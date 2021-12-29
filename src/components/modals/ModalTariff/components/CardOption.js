import {connect} from "react-redux";
import optionSwitch from "../../../../redux/actions/optionSwitch";
import {tariffRadioPlan} from "../../../../redux/actions/counterSim";
import {sumTotalPrice} from "../../../../redux/actions/sumTotalPrice";
import showModal from "../../../../redux/actions/showModal";


function CardOption(props) {
   const payload = {id: props.id, index: props.idx}

   const handleSwitch = (e) => {
      props.optionSwitch( {...payload, checked: e.target.checked} )
      props.sumTotalPrice( payload )
   }

   const handleRadio = () => {
      props.tariffRadioPlan( payload )
      props.sumTotalPrice( payload )
   }

   const price = (id) => {
      if (id === 'eq-almond') {
        return props.equipment.currentPrice || props.equipment.price
      }
      if (props.equipment.plan) {
         return props.equipment.plan.find( p => p.checked ).value
      }
      return props.equipment.price
   }

   const openModalEquipment = () => {
      props.showModal( {modal: 'equipment', bool: true, props: props.equipment} )
   }

   const openModalAlmond = () => {
      props.showModal( {modal: 'almond', bool: true} )
   }


   return (
      <li key={props.equipment.id}
          className="tariff-modal__dop-options-card dop-options-card">

         <div className="dop-options-card__img">

            {props.equipment.name === 'Android TV' &&
               <div className="dop-options-card__mark mark">Акция</div>}

            <img src={require( `../../../../img/pic/${props.equipment.img}.webp` ).default} alt={props.equipment.img}/>

         </div>

         <div className="dop-options-card__option">
            <div>
               {props.equipment.id === 'eq-almond'
                  ? <h3 className="dop-options-card__option-title"
                        onClick={openModalAlmond}
                        dangerouslySetInnerHTML={{
                           __html: props.equipment.name + (props.equipment.speed
                              ? ` <nobr>${props.equipment.speed}</nobr>`
                              : '')
                        }}/>
                  : <h3 className="dop-options-card__option-title"
                        onClick={openModalEquipment}>
                     {props.equipment.name}</h3>}


            </div>

            {props.equipment.plan ? <p>Рассрочка</p> : <p>Аренда</p>}

            {props.equipment.plan &&
               <div className="dop-options-card__option-radio option-radio">

                  {props.equipment.plan.map( (p, i) => (
                     <label key={p.name} className="option-radio__radio-btn">
                        <input name={`radio-${props.equipment.id}-${props.idx}`}
                               id={`plan-${i}-${props.equipment.id}-${props.idx}`}
                               type="radio" value={p.value}
                               onChange={handleRadio}
                               checked={p.checked}
                               disabled={!props.equipment.switch}/>
                        <label htmlFor={`plan-${i}-${props.equipment.id}-${props.idx}`}/>
                        <span>{p.name}</span>
                     </label>
                  ) )}
               </div>}
         </div>

         <div className="dop-options-card__price">
            <div className="price">
               <span className="price__current">
                  {price( props.equipment.id )}
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
   optionSwitch,
   tariffRadioPlan,
   sumTotalPrice,
   showModal
}

export default connect( null, mapDispatchToProps )( CardOption )
