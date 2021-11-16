import Mark from "./components/Mark"
import ProgressBar from "./components/ProgressBar"
import MfTv from "./components/MfTv"
import TvChannels from "./components/TvChannels"
import * as PropTypes from 'prop-types'


export default function TariffCard({tariff, collapse, premium}) {

   const progressBar = [
      {
         title: 'Мобильный интернет',
         value: !tariff.mobWeb ? <><span className="icon-infinity"/> ГБ</> : tariff.mobWeb + ' ГБ',
      },
      {title: 'Звонки', value: tariff.calls + ' минут'},
      {title: 'Домашний интернет', value: tariff.homeWeb + ' Мбит/с'},
   ]

   function activeProgress(title, n) {
      if (title === 'Мобильный интернет') return n === 30 ? 50 : 100
      if (title === 'Домашний интернет') return n.split( ' ' )[0] / 5
      if (title === 'Звонки') return n.split( ' ' )[0] / 30
      return title === 'ТВ' && n.split( ' ' )[0] / 2.5
   }


   return (
      <div className={`card slider__card slider__card_${tariff.id}`}>
         <div className="card__title card-wrapper">
            <h2>{tariff.name}</h2>

            {tariff.mark && (
               <Mark mark={tariff.mark}/>)}

         </div>

         <div className="card__info card-wrapper">
            <div className="card__block-progress block-progress">

               {progressBar.map( pb => (
                  <ProgressBar key={pb.title} pb={pb} activeProgress={activeProgress( pb.title, pb.value )}/>
               ) )}


               {tariff.tvLength && (
                  <TvChannels collapse={collapse}
                              premium={premium}
                              tvLength={tariff.tvLength}
                              tvChannels={tariff.tvChannels}
                              activeProgress={activeProgress( 'ТВ', tariff.tvLength )}/>
               )}

            </div>

            {tariff.mftv && (
               <MfTv mftv={tariff.mftv}/>)}

         </div>

         <div className="card__price price-card card-wrapper">
            <div className="price">

               {tariff.oldPrice && <span className="old-price">{tariff.oldPrice} ₽</span>}


               <span className="new-price">{tariff.currentPrice}</span>
               <span className="always"> ₽</span>
               <span>в месяц</span>

               <div className="price__icon {{#if (iconInfo @index)}}price__icon_all{{/if}}"/>

            </div>
            <button className="price-card__btn btn">Подключить</button>
            <div className="link">Подробнее</div>
         </div>
      </div>
   )
}

TariffCard.propTypes = {
   tariff: PropTypes.object,
   collapse: PropTypes.object,
   premium: PropTypes.object
}