export default function Banner(props) {

   return (
      <div className={`modalAlmond__banner modalAlmond__banner_${props.banner.id}`}>

         <div className="modalAlmond__banner-img">
            <picture>
               {props.banner.imgMob &&
                  <source srcSet={require( `/assets/img/pic/${props.banner.imgMob}.webp` ).default.src}
                          media="(max-width: 767px)"/>}
               <img className="head-banner__img"
                    src={require( `/assets/img/pic/${props.banner.img}.webp` ).default.src}
                    alt={props.banner.alt}/>
            </picture>
         </div>

         <div className="modalAlmond__banner-text">
            <h3 className="modalAlmond__banners-title" dangerouslySetInnerHTML={{__html: props.banner.title}}/>
            <p>{props.banner.text}</p>
         </div>

      </div>
   )
}