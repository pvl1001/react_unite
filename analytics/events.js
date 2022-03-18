let event_category = ''
const widthDesktop = 1024
const widthTablet = 700

export const setEventCategory = ( route ) => route === '/'
   ? event_category = 'EventFMC'
   : event_category = 'EventHomeMF'


// Аналитика просмотр блоков
function setDataView( lazyBlock, device ) {
   gtag( 'event', device, {
      'event_category': `${ event_category }_ViewBlock`,
      'event_label': lazyBlock,
      'non_interaction': true
   } )
}

export function analyticsView() {
   const imageObserver = new IntersectionObserver( entries => {

      entries.forEach( ( entry ) => {

         if ( entry.isIntersecting ) {
            const lazyBlock = entry.target.getAttribute( 'data-view' )
            const widthW = window.innerWidth

            if ( eventFired.indexOf( lazyBlock ) === -1 ) {
               // console.log( lazyBlock )
               eventFired.push( lazyBlock )
               if ( widthW > widthDesktop ) return setDataView( lazyBlock, 'desktop' )
               if ( widthW > widthTablet ) return setDataView( lazyBlock, 'tablet' )
               setDataView( lazyBlock, 'mobile' )
            }

         }
      } )
   } )

   const arr = document.querySelectorAll( '[data-view]' )
   arr.forEach( ( v ) => {
      imageObserver.observe( v )
   } )
}


// Аналитика скролла страницы в %
const paramsScroll = [ 100, 80, 60, 40, 20 ]
const usedParamsScroll = []

function setDataScroll( scroll, device ) {
   dataLayer.push( {
      'event': 'addEvents_useNavigations',
      'event_id': 'd-v474-e1',
      'event_cat': `Scrolling - ${ device }`,
      'event_name': 'Scroll',
      'event_param': scroll + '%'
   } )
}

export function analyticsScroll() {
   window.addEventListener( 'scroll', () => {
      const height = (document.body.scrollHeight - window.innerHeight) / 100
      const scroll = Math.round( window.scrollY / height / 5 ) * 5
      const widthW = window.innerWidth

      paramsScroll.forEach( param => {
         if ( usedParamsScroll.indexOf( param ) === -1 && scroll === param ) {
            usedParamsScroll.push( param )
            // console.log( usedParamsScroll )

            if ( widthW > widthDesktop ) return setDataScroll( param, 'Desktop' )
            if ( widthW > widthTablet ) return setDataScroll( param, 'Tablet' )
            setDataScroll( scroll, 'Mobile' )
         }
      } )

   } )

}


// Аналитика событий по клику
export function analyticsEvent( eventLabel ) {
   // console.log( { 'event_category': event_category, 'event_label': eventLabel } )
   gtag( 'event', 'click', { 'event_category': event_category, 'event_label': eventLabel } )
}
