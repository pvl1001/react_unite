import './BannerMfTv.scss'
import {connect} from "react-redux";
import showModal from "../../../../../redux/actions/showModal";

function BannerMfTv(props) {
   const img = props.mftv.length === 2 ? 'start' : 'all'
   const showModalMfTv = () => props.showModal({
      modal: 'mftv',
      bool: true,
      props: {mftv: props.mftv, tariff: props.tariff}
   })

   return (
      <div className="banner-MFTV banner-MFTV_all">
         <div className="banner-MFTV__MF wrapp">
            <h1 className="banner-MFTV__title">МегаФон ТВ</h1>

            <p className="banner-MFTV__desc">
               {props.mftv.map(el => el.name).join(', ')}
            </p>

            <div>
               <span
                  className="banner-MFTV__link link"
                  onClick={showModalMfTv}>
                  Подробнее
               </span>
            </div>
         </div>

         <picture className="banner-MFTV__img">
            <source
               srcSet={require(`../../../../../img/pic/mob_${img}.webp`).default}
               media="(max-width: 767px)"
            />
            <img
               src={require(`../../../../../img/pic/1640_${img}.webp`).default}
               alt="баннер старт"
            />
         </picture>
      </div>
   )
}


export default connect(
   null,
   {showModal}
)(BannerMfTv)