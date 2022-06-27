import s from './Input.module.scss'


function Input( props ) {
   const {
      type,
      name,
      label,
      value,
      onChange,
      onBlur,
      className = '',
      classNameInput,
   } = props

   function onFocus( e ) {
      name === 'phone' || name === 'friend_phone' ? e.target.placeholder = '+7(   )   -  -  ' : ''
   }

   function blurHandler( e ) {
      onBlur && onBlur( e )
      name === 'phone' || name === 'friend_phone' ? e.target.placeholder = '' : ''
   }


   return (
      <div className={ `${ s._ } ${ className }` }>
         <div className={ s.container }>
            <input
               type={ type }
               name={ name }
               value={ value }
               onInput={ onChange }
               onFocus={ onFocus }
               onBlur={ blurHandler }
               className={ `${ classNameInput } ${ value ? s.not_empty : '' }` }
            />
            <label>{ label }</label>
         </div>
      </div>
   )

}

export default Input