import {connect} from "react-redux";
import {showModal} from "../../../../../redux/modals/modalsAction";
import Image from 'next/image'
import {useEffect, useState} from "react";
import images from '/public/images/mftv-banner'

function BannerMfTv(props) {

   const imgName = props.mftv.length === 2 ? 'start' : 'all'
   const [img, setImg] = useState(images[imgName])

   function resize() {
      window.innerWidth < 768
         ? setImg(images[imgName + '_mob'])
         : setImg(images[imgName])
   }

   useEffect(() => {
      resize()
      window.addEventListener('resize', resize)

      return () => {
         window.removeEventListener('resize', resize)
      }
   })

   const showModalMfTv = () => props.showModal({
      modal: 'mftv',
      bool: true,
      props: {mftv: props.mftv, tariff: props.tariff}
   })


   return (
      <div className="banner-MFTV">
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

         <div className="banner-MFTV__img">
            <Image {...img} layout="responsive"/>
         </div>
      </div>
   )
}


export default connect(
   null,
   {showModal}
)(BannerMfTv)