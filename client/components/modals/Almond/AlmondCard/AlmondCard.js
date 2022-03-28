import s from './AlmondCard.module.sass'
import { connect } from "react-redux";
import { showModal } from "../../../../redux/slices/modalsSlice";
import Image from 'next/image';

function AlmondCard( props ) {
   const eqAlmond = props.almond.equipments[props.index]
   const classActive = eqAlmond?.checked
      ? s.active
      : ''

   function showModalAbout() {
      props.showModal( {
         modal: 'aboutAlmond',
         bool: true,
         props: { ...props.card, index: props.index }
      } )
   }


   return (
      <div
         className={ `${ s.container } ${ classActive }` }
         onClick={ showModalAbout }
      >
         <div className={ s.img }>
            <Image
               alt={ props.card.img }
               src={ `/images/almond/${ props.card.img }.webp` }
               layout={ 'fill' }
               objectFit={ 'contain' }
            />
         </div>

         <div className={ s.text }>
            <p className={ s.text__name }>{ props.card.name }</p>
            <div className={ s.text__price }>
               <p>{ props.card.price } ₽ в месяц</p>
               <p className={ s.cnt }><span>{ eqAlmond?.cnt || 1 }</span> шт.</p>
            </div>
         </div>
      </div>
   )
}


export default connect( null, { showModal } )( AlmondCard )