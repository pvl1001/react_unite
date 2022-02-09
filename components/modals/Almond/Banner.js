import Image from 'next/image';

export default function Banner(props) {

   return (
      <div className={`modalAlmond__banner modalAlmond__banner_${props.banner.id}`}>

         <div className="modalAlmond__banner-img">
            <Image
               alt={props.banner.alt}
               src={`/images/almond/${props.banner.img}.webp`}
               layout={'fill'}
               objectFit={'contain'}
               objectPosition={'bottom'}
            />
            {/*<picture>*/}
            {/*   /!*{props.banner.imgMob &&*!/*/}
            {/*   /!*   <source srcSet={require( `/assets/img/pic/${props.banner.imgMob}.webp` ).default.src}*!/*/}
            {/*   /!*           media="(max-width: 767px)"/>}*!/*/}
            {/*   <img className="head-banner__img"*/}
            {/*        src={`/images/almond/${props.banner.img}`}*/}
            {/*        alt={props.banner.alt}/>*/}
            {/*</picture>*/}
         </div>



         <div className="modalAlmond__banner-text">
            <h3 className="modalAlmond__banners-title" dangerouslySetInnerHTML={{__html: props.banner.title}}/>
            <p>{props.banner.text}</p>
         </div>

      </div>
   )
}