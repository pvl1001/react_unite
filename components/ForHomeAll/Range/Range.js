import s from './Range.module.sass';
import { useEffect } from "react";


function Range( { range, setRange, rangeValue, setRangeValue } ) {

   useEffect( () => {
      handleChange( options.max )
   }, [] )

   const options = {
      type: "range",
      min: 0,
      max: range.length - 1,
      step: 1,
      defaultValue: rangeValue
   }


   function handleChange( i ) {
      setRangeValue( i )
      const newArr = [ ...range ]
      newArr.forEach( el => el.active = false )
      newArr[i].active = true
      setRange( newArr )
   }

   function widthProgressRange() {
      return rangeValue / options.max * 100 + '%'
   }


   return (
      <div>
         <ul className={ s.labels }>
            { range.map( ( r, i ) =>
               <li
                  className={ r.active ? s.labels_active : '' }
                  key={ i }>
                  <span>{ r.month }</span> мес
               </li> )
            }
         </ul>

         <div className={ s.mf_range }>
            <input{ ...options } onChange={ e => handleChange( e.target.value ) }
            />
            <div style={ { width: widthProgressRange() } } className={ s.mf_range__progress_active }/>
         </div>

         <ul className={ s.labels }>
            { range.map( ( r, i ) =>
               <li
                  className={ r.active ? s.labels_active : '' }
                  key={ i }>
                  <span>{ r.percent }%</span>
               </li> )
            }
         </ul>
      </div>
   )
}


export default Range