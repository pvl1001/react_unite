import s from './Plan.module.sass'


export default function Plan( props ) {

   function handleChangePlan( value ) {
      props.handleChange( { id: props.eq.id, value } )
   }

   return (
      <div className={ s.container }>
         <p className={ s.title }>
            Рассрочка
         </p>

         <div className="option-radio">
            { props.eq.plan.map( ( el, i ) => (
               <label key={ i } className="option-radio__radio-btn">

                  <input
                     name="radio-plan"
                     id={ `plan-${ i }` }
                     type="radio"
                     onChange={ () => handleChangePlan( el.value ) }
                     value={ el.value }
                     defaultChecked={ el.checked }
                  />

                  <label htmlFor={ `plan-${ i }` }/><span>{ el.name }</span>
               </label>
            ) ) }

         </div>
      </div>)
}