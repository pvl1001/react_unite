import s from './Input.module.scss'
import { useEffect, useState } from "react";

import autocompleteHandler from "../../../../mixins/autocompleteHandler";
import { api } from "../../../../api/api";
import { checkAddressPath } from "../../../../api/paths";


function AddressInput( props ) {
   const {
      type,
      name,
      label = '',
      className = '',
      classNameInput = ''
   } = props

   const helpText = {
      default: 'Например, Москва, ул. Ленина, д. 1',
      check: 'Проверка адреса...',
      house_fail: 'Необходимо указать номер дома',
      success: 'Дом подключен к сети домашнего интернета',
      fail: 'Дом находится вне зоны технического покрытия',
      error: 'Какие-то проблемы... Попробуйте позднее'
   }
   const [ value, setValue ] = useState( '' )
   const [ address, setAddress ] = useState( {} )
   const [ suggestion, setSuggestion ] = useState( null )
   const [ help, setHelp ] = useState( helpText.default )

   useEffect( () =>
      autocompleteHandler( `.${ classNameInput }`, setSuggestion ),
      [] )

   useEffect( async () => {
      if ( suggestion ) {
         try {
            const data = {
               house_guid: suggestion.data.aoguid,
               address: suggestion.data.address
            }
            setAddress( data )
            setHelp( helpText.check )
            const { result } = await api( checkAddressPath, data )
            showResult( result )
         } catch ( err ) {
            console.error( err )
            setHelp( helpText.error )
         }

      }
   }, [ suggestion ] )

   async function changeHandler( e ) {
      setValue( e.target.value )
      if ( address.house_guid ) {
         setValue( e.target.value = '' )
         setAddress( '' )
         setHelp( helpText.default )
      }
   }

   function showResult( result ) {
      switch ( result ) {
         case 0:
            return setHelp( helpText.fail )
         case 1:
            return setHelp( helpText.success )
         default:
            setHelp( helpText.house_fail )
      }
   }


   return (
      <div className={ `${ s._ } ${ className }` }>
         <div className={ s.container }>
            <input
               type={ type }
               name={ name }
               defaultValue={ value }
               onInput={ changeHandler }
               className={ `
                  ${ classNameInput } 
                  ${ value ? s.not_empty : '' } 
                  ${ address.house_guid ? 'valid' : '' }
                  ` }
            />
            <label>{ label }</label>
         </div>
         <p className={ s.help }>{ help }</p>
      </div>
   )

}

export default AddressInput