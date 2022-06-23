export default function ( error, touch, dirty, value ) {
   if ( error && touch ) return 'error'
   if ( !error && value ) return 'valid'
}