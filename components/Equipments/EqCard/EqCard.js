import s from './EqCard.module.sass';
import { connect } from "react-redux";
import { showModal } from "../../../redux/modals/modalsAction";
import { setDataOrder } from "../../../redux/order/orderAction";
import { analyticsEvent } from "../../../analytics/events";
import Image from 'next/image';


function EqCard( props ) {

   function sMark( mark ) {
      return mark === 'ГОД СЕРИАЛОВ В ПОДАРОК' && "var(--mf-orange)"
   }

   function showModalAlmond() {
      props.showModal( {
         modal: 'almond',
         bool: true
      } )
      analyticsEvent( `click_button_details_${ props.eq.dataView }` )
   }

   function showModalOrder() {
      props.showModal( {
         modal: 'order',
         bool: true
      } )
      props.setDataOrder( {
         tariffName: props.tariff.name,
         tariffId: props.tariff.tariffId,
         equipments: props.eq.dataView,
         eventLabel: {
            order: `click_button_order_${ props.eq.dataView }`,
            send: `click_button_${ props.eq.dataView }_send_equipment`
         }
      } )
   }

   function showModalEquipment() {
      props.showModal( {
         modal: 'equipment',
         bool: true,
         props: props.eq
      } )
      analyticsEvent( `click_button_details_${ props.eq.dataView }` )
   }


   return (
      <div className={ 'card slider__card ' + s.container }>

         { props.eq.mark && (
            <div className={ 'mark ' + s.mark }
                 style={ { backgroundColor: sMark( props.eq.mark ) } }
            >
               <span>{ props.eq.mark }</span>
            </div>
         ) }

         <div className={ s.info }>

            <div className={ s.info__img }>
               <Image
                  alt={ props.eq.name }
                  src={ `/images/equipments/${ props.eq.img }.webp` }
                  layout={ 'fill' }
                  objectFit={ 'contain' }
               />
            </div>
            <h2 className={ s.info__title }>{ props.eq.name }</h2>
            <p className={ s.info__text }>{ props.eq.text }</p>
         </div>

         <div className={ 'price-card ' + s.price }>
            <div className={ 'price ' + s.price__price }>
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
            <button
               className={ 'price-card__btn btn' }
               data-view={ `block_${ props.eq.dataView }` }
               onClick={ showModalOrder }>
               Заказать
            </button>

            { props.eq.id === "eq-almond"
               ? <div className="link" onClick={ showModalAlmond }>Подробнее</div>
               : <div className="link" onClick={ showModalEquipment }>Подробнее</div>
            }

         </div>

      </div>
   )
}


export default connect(
   state => ({
      tariff: state.tariffs.find( tariff => tariff.id === 'for-their' )
   }),
   {
      showModal,
      setDataOrder,
   }
)( EqCard )
