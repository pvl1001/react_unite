import s from './TariffCard.module.sass';
import React from 'react';
import { connect } from "react-redux";
import Mark from "./Mark/Mark";
import ProgressBar from "./ProgressBar/ProgressBar";
import MfTv from "./MfTv/MfTv";
import TvChannels from "./TvChannels/TvChannels";
import { showModal } from "../../../redux/slices/modalsSlice";
import Tippy from "@tippyjs/react";
import { tippyAttrs } from "../../../plugins_config";
import { setDataOrder } from "../../../redux/slices/orderSlice";
import { analyticsEvent } from "../../../analytics/events";
import YoutubeIcon from '../../../public/svg/youtube.svg';
import RouterIcon from '../../../public/svg/Router_3.svg';
import { useRouter } from 'next/router';
import iconInfo from "../../../mixins/iconInfo";


function TariffCard( props ) {
   const router = useRouter()
   const tmplIconInfo = iconInfo( props.tariff.id, props.tariff.iconInfo )
   const premiumStyle = props.tariff.id === 'premium'
      ? { backgroundColor: 'var(--mf-premium)' } : {}

   const infoProgress = [
      props.tariff.web && {
         title: "Мобильный интернет",
         value: props.tariff.web + ' ГБ'
      },
      props.tariff.min && {
         title: "Звонки",
         value: props.tariff.min + ' минут'
      },
      props.tariff.speed && {
         title: "Домашний&nbsp;<br>интернет",
         value: props.tariff.speed + ' Мбит/с'
      }
   ]

   function activeProgress( title, n ) {
      switch ( title ) {
         case 'Мобильный интернет':
            return +n.split( ' ' )[0] * 2
         case 'Домашний&nbsp;<br>интернет':
            return n.split( ' ' )[0] / 5
         case 'Звонки':
            return n.split( ' ' )[0] / 25
         case 'ТВ':
            return n.split( ' ' )[0] / 2.5
         default:
            return 0
      }
   }

   function showModalOrder() {
      props.showModal( {
         modal: 'order',
         bool: true
      } )
      props.setDataOrder( {
         tariffName: `${ props.pageName } ${ props.tariff.name }`,
         tariffId: props.tariff.tariffId,
         price: props.tariff.price,
         eventLabel: {
            order: `click_button_order_${ props.tariff.dataView }`,
            send: `click_button_send_${ props.tariff.dataView }`
         }
      } )
   }

   function showModalTariff() {
      if ( props.tariff.id === 'vse' ) {
         return router.push( '/internetvse' )
      }
      props.showModal( {
         modal: 'tariff',
         bool: true,
         props: props.tariff.id
      } )
      analyticsEvent( `click_button_details_${ props.tariff.dataView }` )
   }


   return (
      <div className={ s.container + ' card' }
           id={ 'tariff-card-' + props.tariff.id }>

         <div
            style={ premiumStyle }
            className={ `${ s.title } ${ s.wrapper }` }>

            <h2
               data-view={ `tariff_card_${ props.tariff.dataView }_start` }
               onClick={ showModalTariff }>
               { props.tariff.name }
            </h2>

            <div className={ s.marks }>
               { props.tariff.marks.map( ( mark, i ) =>
                  <Mark
                     key={ i }
                     className={ s.title_mark }
                     mark={ mark }
                  />
               ) }
            </div>


         </div>

         <div className={ `${ s.info } ${ s.wrapper }` }>
            <div className={ s.block_progress }>

               { infoProgress.map( pb =>
                     pb && <ProgressBar
                        key={ pb.title } pb={ pb }
                        lineStyle={ {
                           width: activeProgress( pb.title, pb.value ) + '%',
                           ...premiumStyle
                        } }
                     />
               ) }


               { props.tariff.tvLength &&
                  <TvChannels
                     tariffs={ props.tariffs }
                     collapse={ props.collapse }
                     premium={ props.premium }
                     tvLength={ props.tariff.tvLength }
                     tvId={ props.tariff.tvId }
                     channels={ props.tariff.channels }
                     lineStyle={ {
                        width: activeProgress( 'ТВ', props.tariff.tvLength ) + '%',
                        ...premiumStyle
                     } }
                  />
               }
            </div>

            { props.tariff.youtube &&
               <div className={ s.option_icon }>
                  <div className={ s.icon }>
                     <YoutubeIcon/>
                  </div>
                  <p>Безлимитный мобильный интернет на соцсети и YouTube</p>
               </div>
            }

            { props.tariff.id === 'turbo' &&
               <div className={ `${ s.option_icon } ${ s.option_icon_router }` }>
                  <div className={ s.icon }>
                     <RouterIcon/>
                  </div>
                  <p>Wi-Fi-роутер (1 Гбит/с)</p>
               </div>
            }

            { props.tariff.mftv &&
               <MfTv
                  tariff={ props.tariff }
                  mftv={ props.tariff.mftv }
                  id={ props.tariff.id }
               />
            }
         </div>

         <div className={ `${ s.price } ${ s.wrapper }` }>
            <div className={ s.price__price + " price" }>

               { props.tariff.oldPrice && <span className="old-price">{ props.tariff.oldPrice } ₽</span> }
               <span className="new-price"> { props.tariff.price } ₽</span>
               <span className="always"/>
               <span> в месяц</span>

               { props.tariff.iconInfo &&
                  <Tippy { ...tippyAttrs } content={ tmplIconInfo }>
                     <div className="price__icon"/>
                  </Tippy> }
            </div>

            <button
               className="price-card__btn btn"
               data-view={ `tariff_card_${ props.tariff.dataView }_end` }
               onClick={ showModalOrder }>
               Подключить
            </button>

            <div
               className={ s.price__link + " link" }
               onClick={ showModalTariff }>
               Подробнее
            </div>
         </div>

      </div>
   )
}


export default connect( state => ({
   tariffs: state.tariffs,
   pageName: state.page.name,
}), {
   showModal,
   setDataOrder
} )( TariffCard )