export default function ( errors, touch, dirty ) {
   if ( errors && touch ) return 'error'
   if ( !errors && dirty ) return 'valid'
}