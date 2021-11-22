import PropTypes from 'prop-types'


Plan.propTypes = {
   eq: PropTypes.object,
   handleChange: PropTypes.func,
}


export default function Plan(props) {

   return (
      <div className="performance__radio">
         <p className="performance__radio-title">
            Рассрочка
         </p>

         <div className="option-radio">
            {props.eq.plan.map((el, i) => (
               <label key={i} className="option-radio__radio-btn">

                  <input name="radio-plan"
                         id={`plan-${i}`}
                         type="radio"
                         onChange={() => props.handleChange(props.eq.id)}
                         value={el.value}
                         checked={el.checked}
                  />

                  <label htmlFor={`plan-${i}`}/><span>{el.name}</span>
               </label>
            ))}

         </div>
      </div>)
}