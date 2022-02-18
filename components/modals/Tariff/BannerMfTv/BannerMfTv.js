import { connect } from "react-redux";
import { showModal } from "../../../../redux/slices/modalsSlice";
import Image from 'next/image'
import { useEffect, useState } from "react";
import images from '/public/images/mftv-banner'
import s from './BannerMfTv.module.sass'

function BannerMfTv( props ) {

   const imgName = props.mftv.length === 2
      ? 'start'
      : 'all'
   const [ img, setImg ] = useState( images[imgName] )

   function resize() {
      window.innerWidth < 768
         ? setImg( images[imgName + '_mob'] )
         : setImg( images[imgName] )
   }

   useEffect( () => {
      resize()
      window.addEventListener( 'resize', resize )

      return () => {
         window.removeEventListener( 'resize', resize )
      }
   } )

   const showModalMfTv = () => props.showModal( {
      modal: 'mftv',
      bool: true,
      props: {
         mftv: props.mftv,
         tariff: props.tariff
      }
   } )


   return (
      <div className={ s.container }>
         <div className={ s.MF }>
            <h1 className={ s.title }>МегаФон ТВ</h1>

            <p className={ s.desc }>
               { props.mftv.map( el => el.name ).join( ', ' ) }
            </p>

            <div>
               <span
                  className={ s.link + " link" }
                  onClick={ showModalMfTv }>
                  Подробнее
               </span>
            </div>
         </div>

         <div className={ s.img }>
            <Image { ...img } layout="responsive"/>
         </div>
      </div>
   )
}


export default connect(
   null,
   { showModal }
)( BannerMfTv )