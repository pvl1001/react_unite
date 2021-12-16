import React from 'react';
import {connect} from "react-redux";
import * as PropTypes from 'prop-types'
import Mark from "./components/Mark"
import ProgressBar from "./components/ProgressBar"
import MfTv from "./components/MfTv"
import TvChannels from "./components/TvChannels"
import showModal from "../../../redux/actions/showModal";


TariffCard.propTypes = {
   tariff: PropTypes.object,
   collapse: PropTypes.object,
   premium: PropTypes.object
}


function TariffCard(props) {

   const activeProgress = (title, n) => {
      if (title === 'Мобильный интернет') return n === 30 ? 50 : 100
      if (title === 'Домашний&nbsp;<br>интернет') return n.split( ' ' )[0] / 5
      if (title === 'Звонки') return n.split( ' ' )[0] / 30
      return title === 'ТВ' && n.split( ' ' )[0] / 2.5
   }


   return (
      <div className={`card slider__card slider__card_${props.tariff.id}`}>
         <div className="card__title card-wrapper">

            <h2 onClick={() => props.showModal({modal: 'tariff', bool: true, props: props.tariff.id})}>
               {props.tariff.name}
            </h2>

            {props.tariff.mark && (
               <Mark mark={props.tariff.mark}/>)}

         </div>

         <div className="card__info card-wrapper">
            <div className="card__block-progress block-progress">

               {props.tariff.infoProgress.map( pb => (
                  <ProgressBar key={pb.title} pb={pb} activeProgress={activeProgress( pb.title, pb.value )}/>
               ) )}


               {props.tariff.tvLength && (
                  <TvChannels collapse={props.collapse}
                              premium={props.premium}
                              tvLength={props.tariff.tvLength}
                              tvChannels={props.tariff.tvChannels}
                              activeProgress={activeProgress( 'ТВ', props.tariff.tvLength )}/>
               )}

            </div>

            {props.tariff.mftv && <MfTv mftv={props.tariff.mftv} id={props.tariff.id}/>}

         </div>

         <div className="card__price price-card card-wrapper">
            <div className="price">

               {props.tariff.oldPrice && <span className="old-price">{props.tariff.oldPrice} ₽</span>}


               <span className="new-price">{props.tariff.price}</span>
               <span className="always"> ₽</span>
               <span>в месяц</span>

               {/*<div className="price__icon {{#if (iconInfo @index)}}price__icon_all{{/if}}"/>*/}

            </div>
            <button className="price-card__btn btn"
                    onClick={() => props.showModal( {modal: 'order', bool: true} )}>Подключить
            </button>
            <div className="link"  onClick={() => props.showModal( {modal: 'tariff', bool: true, props: props.tariff.id} )}>Подробнее</div>
         </div>

      </div>
   )
}


const mapDispatchToProps = {showModal}

export default connect( null, mapDispatchToProps )( TariffCard )