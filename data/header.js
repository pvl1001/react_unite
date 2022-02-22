export const headerUnitePageData = {
   title: 'Домашний интернет,',
   titleBr: ' ТВ и связь',
   desc: 'В тарифах «Объединяй!»',
   img: {
      desktop: {
         src: '/images/header/head_banner_desktop.webp',
         width: 1538,
         height: 1159,
         layout: 'responsive'
      },
      tap: {
         src: '/images/header/head_banner_tap.webp',
         layout: 'fill',
         objectFit: 'cover',
         objectPosition: 'center',
      },
      mob: {
         src: '/images/header/head_banner_mob.webp',
         width: 1204,
         height: 684,
         layout: 'responsive',
      }
   },
   resize( setImg, images ) {
      window.innerWidth < 603
         ? setImg( images.mob )
         : (window.innerWidth > 602 && window.innerWidth < 936)
            ? setImg( images.tap )
            : setImg( images.desktop )
   }
}
export const headerHomePageData = {
   title: 'Подключай интернет',
   titleBr: ' для дома',
   desc: 'С заботой о будущем',
   img: {
      desktop: {
         src: '/images/headerFT/head_banner_desktop.webp',
         width: 860,
         height: 720,
         layout: 'responsive'
      },
      mob: {
         src: '/images/headerFT/head_banner_mob.webp',
         width: 426,
         height: 442,
         layout: 'responsive',
      }
   },
   resize( setImg, images ) {
      window.innerWidth < 768
         ? setImg( images.mob )
         : setImg( images.desktop )
   }

}