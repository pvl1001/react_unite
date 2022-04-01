import s from './NewCard.module.sass';
import Tippy from "@tippyjs/react";
import { tippyAttrs } from "../../../plugins_config";
import React from "react";
import iconInfo from "../../../mixins/iconInfo";
import InfoIcon from '../../../public/svg/info1.svg';
import WifiIcon from '../../../public/svg/wi-fi.svg';
import TvIcon from '../../../public/svg/tv_play.svg';
import RouterIcon from '../../../public/svg/Router_3.svg';
import { useDispatch } from "react-redux";
import { showModal } from "../../../redux/slices/modalsSlice";
import { setDataOrder } from "../../../redux/slices/orderSlice";
import { analyticsEvent } from "../../../analytics/events";
import { useRouter } from 'next/router';
import { getChannels } from "../../../redux/slices/tariffsSlice";
import CollapseChannels from "../TariffCard/CollapseChannels/CollapseChannels";


function NewCard( props ) {

   const router = useRouter()
   const dispatch = useDispatch()
   const tmplIconInfo = iconInfo( props.tariff.id, props.tariff.iconInfo )
   const premiumClass = props.tariff.id === 'premium' ? s[props.tariff.id] : ''

   function openOrder() {
      dispatch( showModal( {
         modal: 'order',
         bool: true
      } ) )
      dispatch( setDataOrder( {
         tariffName: `${ props.pageName } ${ props.tariff.name }`,
         tariffId: props.tariff.tariffId,
         price: props.tariff.price,
         eventLabel: {
            order: `click_button_order_${ props.tariff.dataView }`,
            send: `click_button_send_${ props.tariff.dataView }`
         }
      } ) )
   }

   function showModalTariff() {
      if ( props.tariff.id === 'vse' ) {
         return router.push( '/internetvse' )
      }
      dispatch( showModal( {
         modal: 'tariff',
         bool: true,
         props: props.tariff.id
      } ) )
      analyticsEvent( `click_button_details_${ props.tariff.dataView }` )
   }

   function collapseGroup() {
      props.collapse.setCollapseGroup( !props.collapse.collapseGroup )
   }

   function handleCollapseChannels() {
      if ( !props.premium.channels ) {
         const allTvId = Array.from( new Set(
            [
               ...props.tariffs.filter( tariff => tariff.tvId ).map( tariff => tariff.tvId )
            ] ) )
         const allPromise = []
         allTvId.forEach( ( id ) => allPromise.push( dispatch( getChannels( id ) ) ) )
         return Promise.all( allPromise ).then( collapseGroup )
      }

      collapseGroup()
   }


   return (
      <div className={ `${ s.container } ${ premiumClass } card` }
           id={ 'tariff-card-' + props.tariff.id }
      >
         <div className={ s.greenBox }>
            <div className={ s.title }>
               <h5 className={ s.tariffName }>{ props.tariff.name }</h5>
               <p className={ s.marks }>{ props.tariff.marks && props.tariff.marks.map( mark => ' #' + mark ) }</p>
            </div>

            <div className={ s.price }>
               { props.tariff.oldPrice && false &&
                  <span className="old-price">{ props.tariff.oldPrice } ₽</span>
               }
               <span className={ `${ s.newPrice }` }> { props.tariff.price } ₽</span>
               <span className="always"/>
               <span> в месяц</span>

               { props.tariff.iconInfo &&
                  <Tippy
                     className={ s.tippy } { ...tippyAttrs }
                     maxWidth={ 216 }
                     content={ tmplIconInfo }>
                     <span className={ s.infoIcon }><InfoIcon/></span>
                  </Tippy> }
            </div>
         </div>

         <ul className={ s.params }>

            <li className={ s.params__item }
                style={ { height: props.tariff.id === 'internet' ? 70 : '' } }
            >
               <div className={ s.params__icon }><WifiIcon/></div>
               <span>{ props.tariff.speed } Мбит/с</span>
            </li>

            { props.tariff.id === 'turbo' &&
               <li className={ s.params__item }>
                  <div className={ s.params__icon }><RouterIcon/></div>
                  <span>Wi-Fi-роутер <nobr>(1 Гбит/с)</nobr></span>
               </li>
            }

            { props.tariff.tvLength &&
               <>
                  <li className={ s.params__item }>
                     <div className={ s.params__icon }><TvIcon/></div>
                     <span
                        className={ s.params__tv }
                        aria-controls="tv-group"
                        aria-expanded={ props.collapse.collapseGroup }
                        onClick={ handleCollapseChannels }>
                        { props.tariff.tvLength }
                     </span>
                  </li>

                  { props.premium.channels &&
                     <CollapseChannels
                        collapse={ props.collapse }
                        premium={ props.premium }
                        tariff={ props.tariff }
                     />
                  }
               </>
            }
         </ul>
         <div style={ { flexGrow: 1 } }/>
         <div className={ s.btns }>
            <span
               className={ s.aboutBtn }
               onClick={ showModalTariff }>
               Все условия тарифа
            </span>

            <button
               className={ `${ s.connectBtn } btn` }
               onClick={ openOrder }>
               Подключить
            </button>
         </div>
      </div>
   )
}


export default NewCard