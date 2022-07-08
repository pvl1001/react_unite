export default function( element, callback = null ) {
   const maxScroll = document.body.scrollHeight - window.innerHeight
   const onScroll = () => {
      if ( Math.ceil( window.scrollY ) >= element.offsetTop || Math.ceil( window.scrollY ) === maxScroll ) {
         callback && callback()
         window.removeEventListener( 'scroll', onScroll )
      }
   }

   window.addEventListener( 'scroll', onScroll )

   onScroll()

   setTimeout( () => window.scrollTo( 0, element.offsetTop ), 0 )
}