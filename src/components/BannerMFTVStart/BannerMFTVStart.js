import './BannerMFTVStart.scss'
import mob_start from '../../img/pic/mob_start.webp'
import desc_start from '../../img/pic/1640_start.webp'

export default function BannerMFTVStart() {
   return (
      <div className="banner-MFTV">
         <div className="banner-MFTV__MF wrapp">
            <h1 className="banner-MFTV__title">МегаФон ТВ</h1>
            <p className="banner-MFTV__desc">START, Мировое кино</p>
            <div>
         <span className="banner-MFTV__link link"
               data-toggle="modal"
               data-target="#mftv-for-their">Подробнее</span>
            </div>
         </div>

         <picture className="banner-MFTV__img">
            <source srcSet={mob_start} media="(max-width: 767px)"/>
            <img src={desc_start} alt="баннер старт"/>
         </picture>
      </div>
)
}