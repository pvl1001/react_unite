import PropTypes from 'prop-types'


Plan.propTypes = {
   eq: PropTypes.object,
   handleChange: PropTypes.func,
}


export default function Plan(props) {

   function handleChangePlan(value) {
      props.handleChange({id: props.eq.id, value})
   }

   return (
      <div className="performance__radio">
         <p className="performance__radio-title">
            Рассрочка
         </p>

         <div className="option-radio">
            {props.eq.plan.map((el, i) => (
               <label key={i} className="option-radio__radio-btn">

                  <input
                     name="radio-plan"
                     id={`plan-${i}`}
                     type="radio"
                     onChange={() => handleChangePlan(el.value)}
                     value={el.value}
                     defaultChecked={el.checked}
                  />

                  <label htmlFor={`plan-${i}`}/><span>{el.name}</span>
               </label>
            ))}

         </div>
      </div>)
}