export const tippyAttrs = {
   interactive: true,
   placement: 'auto',
   maxWidth: 225,
   allowHTML: true,
   theme: 'light',
   hideOnClick: false,
   // trigger: 'click'
}

export const settingsSlider = {
   dots: true,
   infinite: false,
   slidesToShow: 4,
   responsive: [
      {
         breakpoint: 1280,
         settings: {
            slidesToShow: 3,
         }
      }, {
         breakpoint: 1024,
         settings: {
            slidesToShow: 2,
            arrows: false,
            variableWidth: true
         }
      }, {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            arrows: false,
            variableWidth: true
         }
      }
   ]
}