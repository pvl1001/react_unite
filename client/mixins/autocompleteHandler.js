import $ from "jquery";
import { checkAddressAutocomplete } from "../api/paths";

if (typeof window !== 'undefined') {
   window.autocomplete = require( '../plugins/jquery.autocomplete' )
}

export default function ( target, setSuggestion ) {
   $( target ).autocomplete( {
      width: 'auto',
      maxHeight: window.innerWidth > 767 ? 417 : 337,
      minChars: 1,
      deferRequestBy: 200,
      serviceUrl: checkAddressAutocomplete,
      type: 'POST',

      onSelect( suggestion ) {
         setSuggestion(suggestion)
      }
   } )

}

// Московская обл, г Химки, ул Горшина, д 1