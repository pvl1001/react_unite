import React from 'react';
import {connect} from "react-redux";
import Mark from "./components/Mark"
import ProgressBar from "./components/ProgressBar"
import MfTv from "./components/MfTv"
import TvChannels from "./components/TvChannels"
import showModal from "../../../redux/actions/showModal";
import Tippy from "@tippyjs/react";
import {tippyAttrs} from "../../../plugins_config";
import {setDataOrder} from "../../../redux/reducers/orderReducer";
import {analyticsEvent} from "../../../analytics/events";


function TariffCard(props) {

   function activeProgress(title, n) {
      if (title === 'Мобильный интернет') return n === 30 ? 50 : 100
      if (title === 'Домашний&nbsp;<br>интернет') return n.split(' ')[0] / 5
      if (title === 'Звонки') return n.split(' ')[0] / 30
      return title === 'ТВ' && n.split(' ')[0] / 2.5
   }

   function showModalOrder() {
      props.showModal({modal: 'order', bool: true})
      props.setDataOrder({
         tariffName: props.tariff.name,
         tariffId: props.tariff.tariffId,
         price: props.tariff.price,
         eventLabel: {
            order: `click_button_order_${props.tariff.dataView}`,
            send: `click_button_send_${props.tariff.dataView}`
         }
      })
   }

   function showModalTariff() {
      props.showModal({modal: 'tariff', bool: true, props: props.tariff.id})
      analyticsEvent(`click_button_details_${props.tariff.dataView}`)
   }


   return (
      <div className={`card slider__card slider__card_${props.tariff.id}`}>
         <div className="card__title card-wrapper">

            <h2
               data-view={`tariff_card_${props.tariff.dataView}_start`}
               onClick={showModalTariff}>
               {props.tariff.name}
            </h2>

            {props.tariff.mark && (
               <Mark mark={props.tariff.mark}/>)}

         </div>

         <div className="card__info card-wrapper">
            <div className="card__block-progress block-progress">

               {props.tariff.infoProgress.map(pb => (
                  <ProgressBar key={pb.title} pb={pb} activeProgress={activeProgress(pb.title, pb.value)}/>
               ))}


               {props.tariff.tvLength && (
                  <TvChannels collapse={props.collapse}
                              premium={props.premium}
                              tvLength={props.tariff.tvLength}
                              tvId={props.tariff.tvId}
                              channels={props.tariff.channels}
                              activeProgress={activeProgress('ТВ', props.tariff.tvLength)}/>
               )}

            </div>
            {props.tariff.youtube &&
               <div className="card__youtube card__option-icon">
                  <div className="card__icon">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="33">
                        <path
                           d="M16 16H4a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2zM4 5a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1zm8.5 5.1l-4.5 2V8l4.5 2zM7.59 6.71L7 7.17v5.68l.59.46 5.91-2.57V9.28z"/>
                     </svg>
                  </div>
                  <p>Безлимитный мобильный интернет на соцсети и YouTube</p>
               </div>
            }

            {props.tariff.mftv &&
               <MfTv
                  tariff={props.tariff}
                  mftv={props.tariff.mftv}
                  id={props.tariff.id}
               />
            }
         </div>

         <div className="card__price price-card card-wrapper">
            <div className="price">

               {props.tariff.oldPrice && <span className="old-price">{props.tariff.oldPrice} ₽</span>}
               <span className="new-price"> {props.tariff.price} ₽</span>
               <span className="always"/>
               <span> в месяц</span>


               {props.tariff.iconInfo &&
                  <Tippy {...tippyAttrs} content={props.tariff.iconInfo}>
                     <div className="price__icon"/>
                  </Tippy>}

            </div>
            <button
               className="price-card__btn btn"
               data-view={`tariff_card_${props.tariff.dataView}_end`}
               onClick={showModalOrder}>
               Подключить
            </button>
            <div
               className="link"
               onClick={showModalTariff}>
               Подробнее
            </div>
         </div>

      </div>
   )
}


export default connect(
   null,
   {
      showModal,
      setDataOrder
   }
)(TariffCard)