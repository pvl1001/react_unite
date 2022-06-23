import $ from "jquery";

if (typeof window !== 'undefined') {
   window.autocomplete = require( '../plugins/jquery.autocomplete' )
}

export default function (target, setIsShowLabel, setAddress) {
   $( target ).autocomplete( {
      width: 'auto',
      maxHeight: window.innerWidth > 767 ? 417 : 337,
      minChars: 1,
      deferRequestBy: 200,
      serviceUrl: 'https://api.wifire.ru/api/address/check_address_dadata',
      type: 'POST',

      onSelect( suggestion ) {
         setIsShowLabel( false )

         setAddress( {
            house_guid: suggestion.data.aoguid,
            address: suggestion.data.address
         } )
      }
   } )

}