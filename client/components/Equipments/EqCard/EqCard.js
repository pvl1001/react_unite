import s from './EqCard.module.sass';
import { connect, useSelector } from "react-redux";
import { showModal } from "../../../redux/slices/modalsSlice";
import { setDataOrder } from "../../../redux/slices/orderSlice";
import Image from 'next/image';


function EqCard( props ) {
   
   const pageName = useSelector( state => state.page.name )
   const tariff = useSelector( state => state.tariffs.their )

   function showModalAlmond() {
      props.showModal( {
         modal: 'almond',
         bool: true
      } )
      // analyticsEvent( `click_button_details_${ props.eq.id }` )
   }

   function showModalOrder() {
      props.showModal( {
         modal: 'order',
         bool: true
      } )
      props.setDataOrder( {
         tariffName: `${ pageName } ${ tariff.name }`,
         tariffId: tariff.tariffId,
         equipments: props.eq.id,
         eventLabel: {
            order: `click_button_order_${ props.eq.id }`,
            send: `click_button_${ props.eq.id }_send_equipment`
         }
      } )
   }

   function showModalEquipment() {
      props.showModal( {
         modal: 'equipment',
         bool: true,
         props: props.eq.id
      } )
      // analyticsEvent( `click_button_details_${ props.eq.id }` )
   }


   return (
      <div className={ `${ s._ } card slider__card` }>

         <div>
            { props.eq.marks.map( mark =>
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
               alt={ props.eq.name }
               src={ `/images/equipments/${ props.eq.img }.webp` }
               layout={ 'fill' }
               objectFit={ 'contain' }
            />
         </div>

         <h2 className={ s.title }>{ props.eq.name }</h2>

         <div className={ `${ s.price } price` }>
            { props.eq.oldPrice && <span className="old-price"/> }

            <span className="new-price">
                  { props.eq.plan
                     ? <>от { props.eq.plan[0].value } ₽</>
                     : <>{ props.eq.price } ₽</>
                  }
               </span>
            <span className="always"/>
            <span> в месяц</span>
         </div>

         <p className={ s.text }>{ props.eq.text }
            { props.eq.id === "almond"
               ? <span className={ `${ s.link } link` } onClick={ showModalAlmond }>Подробнее</span>
               : <span className={ `${ s.link } link` } onClick={ showModalEquipment }>Подробнее</span>
            }</p>

         <button
            className={ `${ s.btn } btn btn-fiolet` }
            onClick={ showModalOrder }>
            Заказать
         </button>

      </div>
   )
}


export default connect( null, {
   showModal,
   setDataOrder,
} )( EqCard )
