import s from './Range.module.sass';
import { useEffect } from "react";


function Range( { range, setRange, rangeValue, setRangeValue } ) {

   useEffect( () => {
      handleChange( 4 )
   }, [] )


   function handleChange( i ) {
      setRangeValue( i )
      const newArr = [ ...range ]
      newArr.forEach( el => el.active = false )
      newArr[i].active = true
      setRange( newArr )
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
            <input
               type="range"
               min="0"
               max="4"
               step="1"
               defaultValue={ rangeValue }
               onChange={ e => handleChange( e.target.value ) }
            />
            <div className={ s.mf_range__progress_active }/>
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