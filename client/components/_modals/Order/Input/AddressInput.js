import s from './Input.module.scss'
import { useEffect, useState } from "react";

import autocompleteHandler from "../../../../mixins/autocompleteHandler";


function AddressInput( props ) {
   const {
      type,
      name,
      label = '',
      className = '',
      classNameInput = ''
   } = props

   const [ value, setValue ] = useState( '' )
   const [ address, setAddress ] = useState( {} )
   const [ help, setHelp ] = useState( 'Например, Москва, ул. Ленина, д. 1' )
   const [ isShowLabel, setIsShowLabel ] = useState( false )

   useEffect( () => {
      autocompleteHandler( `.${ classNameInput }`, setIsShowLabel, setAddress )
   }, [] )

   function changeHandler( e ) {
      setValue( e.target.value )
      if ( address.house_guid ) {
         setValue( e.target.value = '' )
         setAddress('')
      }

   }


   return (
      <div className={ `${ s._ } ${ className }` }>
         <div className={ s.container }>
            <input
               type={ type }
               name={ name }
               defaultValue={ value }
               onChange={ changeHandler }
               className={
                  `${ classNameInput } 
               ${ value ? s.not_empty : '' } 
               ${ address.house_guid ? 'valid' : '' }`
               }
            />
            <label>{ label }</label>
         </div>
         <p className={ s.help }>{ help }</p>
      </div>
   )

}

export default AddressInput