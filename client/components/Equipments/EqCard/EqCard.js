import s from './EqCard.module.sass';
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../redux/slices/modalsSlice";
import Image from 'next/image';


function EqCard( { eq } ) {
   const dispatch = useDispatch()
   const tariff = useSelector( state => state.tariffs.their )

   // function showModalAlmond() {
   //    props.showModal( {
   //       modal: 'almond',
   //       bool: true
   //    } )
   //    // analyticsEvent( `click_button_details_${ eq.id }` )
   // }

   function showModalOrder() {
      dispatch( showModal( {
         modal: 'order',
         bool: true,
         props: {
            tariff,
            id: 'their',
            eventLabel: `click_button_${ eq.id }_send_equipment`,
            equipments: { id: eq.id, price: eq.plan[0].value }
         }
      } ) )
   }

   function showModalEquipment() {
      dispatch( showModal( {
         modal: 'equipment',
         bool: true,
         props: eq.id
      } ) )
   }


   return (
      <div className={ `${ s._ } card slider__card` }>

         <div>
            { eq.marks.map( mark =>
               <div key={ mark.text } className={ s.mark__container }>
                  <div
                     className="mark"
                     style={ { backgroundColor: mark.color } }>
                     { mark.text }
                  </div>
               </div>
            ) }
         </div>


         <div className={ s.img }>
            <Image
               alt={ eq.name }
               src={ `/images/equipments/${ eq.img }.webp` }
               layout={ 'fill' }
               objectFit={ 'contain' }
            />
         </div>

         <h2 className={ s.title }>{ eq.name }</h2>

         <div className={ `${ s.price } price` }>
            { eq.oldPrice && <span className="old-price"/> }

            <span className="new-price">
                  { eq.plan
                     ? <>от { eq.plan[0].value } ₽</>
                     : <>{ eq.price } ₽</>
                  }
               </span>
            <span className="always"/>
            <span> в месяц</span>
         </div>

         <p className={ s.text } title={ eq.text }>{ eq.text }</p>
         <p className={ s.link }><span className="link" onClick={ showModalEquipment }>Подробнее</span></p>

         <button
            className={ `${ s.btn } btn btn-fiolet` }
            data-view={ `block_${ eq.id }` }
            onClick={ showModalOrder }>
            Заказать
         </button>

      </div>
   )
}

export default EqCard
