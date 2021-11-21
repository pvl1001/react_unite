import PropTypes from 'prop-types'


Plan.propTypes = {
   plan: PropTypes.object,
   handleChange: PropTypes.func,
}


export default function Plan(props) {



   return (
      <div className="performance__radio">
         <p className="performance__radio-title">
            Рассрочка
         </p>

         <div className="option-radio">

            <label className="option-radio__radio-btn">
               <input name="radio-plan" id="plan-36"
                      type="radio" onChange={props.handleChange} value={props.plan.plan_36} defaultChecked/>
               <label htmlFor="plan-36"/>
               <span>36 мес</span>
            </label>

            <label className="option-radio__radio-btn">
               <input name="radio-plan" id="plan-24"
                      type="radio" onChange={props.handleChange} value={props.plan.plan_24}/>
               <label htmlFor="plan-24"/><span>24 мес</span>
            </label>

         </div>
      </div>)
}