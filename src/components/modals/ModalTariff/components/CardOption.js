import {connect} from "react-redux";
import optionSwitch from "../../../../redux/actions/optionSwitch";


function CardOption(props) {

   const handleSwitch = () => props.optionSwitch({id: props.id, index: props.idx})


   return (
      <li key={props.equipment.id}
          className="tariff-modal__dop-options-card dop-options-card">

         <div className="dop-options-card__img">

            {props.equipment.name === 'Android TV' &&
               <div className="dop-options-card__mark mark">Акция</div>}

            <img src={require( `../../../../img/pic/${props.equipment.img}` ).default} alt={props.equipment.img}/>

         </div>

         <div className="dop-options-card__option">
            <div>
               <h3 className="dop-options-card__option-title"
                   dangerouslySetInnerHTML={{
                      __html: props.equipment.name + (props.equipment.speed
                         ? ` <nobr>${props.equipment.speed}</nobr>`
                         : '')}}/>
            </div>

            {props.equipment.plan ? <p>Рассрочка</p> : <p>Аренда</p>}

            {props.equipment.plan &&
               <div className="dop-options-card__option-radio option-radio">

                  <label className="option-radio__radio-btn">
                     <input name={`radio-${props.equipment.id}-${props.idx}`}
                            id={`radio36-${props.equipment.id}-${props.idx}`}
                            type="radio" value={props.equipment.plan[36]}
                            defaultChecked disabled={!props.equipment.switch}/>
                     <label htmlFor={`radio36-${props.equipment.id}-${props.idx}`}/>
                     <span>36 мес</span>
                  </label>

                  <label className="option-radio__radio-btn">
                     <input name={`radio-${props.equipment.id}-${props.idx}`}
                            id={`radio24-${props.equipment.id}-${props.idx}`}
                            type="radio" value={props.equipment.plan[24]}
                            disabled={!props.equipment.switch}/>
                     <label htmlFor={`radio24-${props.equipment.id}-${props.idx}`}/>
                     <span>24 мес</span>
                  </label>
               </div>}
         </div>

         <div className="dop-options-card__price">
            <div className="price">
               <span className="price__current">
                  {props.equipment.plan ? props.equipment.plan[36] : props.equipment.price}
               </span> <span> ₽</span>
               <span className="price__month"> в месяц</span>
            </div>

            <label className="switch">
               <input type="checkbox"
                      onChange={handleSwitch}
                      defaultChecked={props.equipment.switch}
               />
               <span className="round"/>
            </label>
         </div>
      </li>
   )
}


const mapDispatchToProps = {
   optionSwitch
}

export default connect(null, mapDispatchToProps)(CardOption)
