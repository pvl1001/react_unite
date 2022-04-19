import { Navigation, Pagination } from "swiper";

export const tippyAttrs = {
   interactive: true,
   placement: 'auto',
   maxWidth: 225,
   allowHTML: true,
   theme: 'light',
   hideOnClick: false,
   // trigger: 'click'
}

export const swiperConfig = {
   speed: 500,
   shortSwipes: false,
   slidesPerView: 'auto',
   spaceBetween: 0,
   pagination: {
      clickable: true,
   },
   modules: [ Pagination, Navigation ],
   breakpoints: {
      1024: {
         slidesPerView: 3,
      },
      1280: {
         slidesPerView: 4,
      }
   }
}