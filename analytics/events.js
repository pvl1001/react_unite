export function analyticsView() {
   const imageObserver = new IntersectionObserver(entries =>
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            const lazyBlock = entry.target.getAttribute('data-view')
            const widthW = window.innerWidth
            if (window.eventFired.indexOf(lazyBlock) === -1) {
               // console.log(lazyBlock)
               window.eventFired.push(lazyBlock)
               if (widthW > 1024) {
                  gtag('event', 'desktop', {
                     'event_category': 'EventFMC_ViewBlock',
                     'event_label': lazyBlock,
                     'non_interaction': true
                  })
               } else if (widthW > 700) {
                  gtag('event', 'tablet', {
                     'event_category': 'EventFMC_ViewBlock',
                     'event_label': lazyBlock,
                     'non_interaction': true
                  })
               } else {
                  gtag('event', 'mobile', {
                     'event_category': 'EventFMC_ViewBlock',
                     'event_label': lazyBlock,
                     'non_interaction': true
                  })
               }
            }
         }
      })
   )

   const arr = document.querySelectorAll('[data-view]')
   arr.forEach((v) => {
      imageObserver.observe(v)
   })
}

export function analyticsEvent(eventLabel) {
   // console.log(eventLabel)
   gtag('event', 'click', {'event_category': 'EventFMC', 'event_label': eventLabel})
}
