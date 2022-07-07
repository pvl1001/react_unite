import { useDispatch } from "react-redux";
import { showModal } from "../../../../redux/slices/modalsSlice";
import s from './Footer_new.module.sass';
import { wrapp } from '../ModalTariff.module.sass';
import SaleBanner from "../../../SaleBanner/SaleBanner";


function Footer( { tariff, id } ) {
   const dispatch = useDispatch()
   const isPremium = id === 'premium'


   function showModalOrder() {
      dispatch( showModal( {
         modal: 'order',
         bool: true,
         props: { tariff, id }
      } ) )
   }


   return (
      <div className={ `${ s.backdrop } ${ isPremium ? s.premium : '' }` }>
         <div className={ `${ s.container } ${ wrapp }` }>
            <div className={ s.price }>

               <div className={ s.title }>{ tariff.name }
                  <SaleBanner className={ s.sale_banner }/>
               </div>

               <span className={ s.price__current }>{ tariff.totalPrice || tariff.price } ₽</span>

               <span className={ s.price__month }> в месяц</span>

               { tariff.equipments &&
                  <nobr>
                     { Object.values( tariff.equipments ).some( eq => eq.switch ) &&
                        <span className={ s.price__desc }> с учетом выбранных опций</span>
                     }
                  </nobr>
               }

            </div>

            <button
               type="button"
               className={ `${ isPremium ? '' : 'btn-fiolet' } btn` }
               onClick={ showModalOrder }>
               Заказать
            </button>

         </div>
      </div>
   )
}


export default Footer