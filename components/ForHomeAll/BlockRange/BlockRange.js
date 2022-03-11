import s from "./BlockRange.module.sass";
import WifiIcon from '../../../public/svg/green_wi-fi.svg';
import TvIcon from '../../../public/svg/green_tv.svg';
import Range from "../Range/Range";
import { useState } from "react";


function BlockRange() {
   const [ rangeValue, setRangeValue ] = useState( 4 )
   const [ range, setRange ] = useState( [
      { month: 1, percent: 5, active: false },
      { month: 7, percent: 10, active: false },
      { month: 19, percent: 15, active: false },
      { month: 31, percent: 25, active: false },
      { month: 61, percent: 50, active: false },
   ] )

   return (
      <div className={ s.container }>

         <h2 className={ s.title } data-view="tariff_card_vse_start">
            { 'name' }
         </h2>

         <div className={ s.options }>
            <div className={ s.option }>
               <div className={ s.option__icon }>
                  <WifiIcon/>
               </div>

               <div>
                  <p className={ s.option__key }>Домашний интернет</p>
                  <p className={ s.option__value }>{ 'speed' }</p>
               </div>

            </div>
            <div className={ s.option }>
               <div className={ s.option__icon }>
                  <TvIcon/>
               </div>
               <div>
                  <p className={ s.option__key }>Цифровое ТВ</p>
                  <p className={ ` ${ s.option__value } ${ s.option__value_btn } ` }>{ 'tvLength' }</p>
               </div>
            </div>
         </div>

         <div id="range" className={ s.range }>

            <div className={ s.range__block_range }>
               <h3 className={ s.range__title }>
                  Время пользования тарифом <nobr>{ 'name' }</nobr>
               </h3>

               <Range
                  range={ range }
                  setRange={ setRange }
                  rangeValue={ rangeValue }
                  setRangeValue={ setRangeValue }
               />
            </div>

            <div className={ s.range__block_price }>
               <h3 className={ `${ s.range__title } ${ s.range__title_price }` }>
                  Ваша цена
               </h3>
               <p className={ s.range__price }>
                  <span>275</span> ₽ в месяц
               </p>
               <button
                  onClick={ () => {
                  } }
                  data-view="tariff_card_vse_end"
                  type="button"
                  className={ `${ s.range__btn } btn btn-fiolet` }>
                  Подключить
               </button>
               <div className={ s.range__desc }>
                  С учетом скидки
                  <span> { range[rangeValue].percent }%</span> с <span>{ range[rangeValue].month }</span> месяца
               </div>
            </div>

         </div>

      </div>
   )
}


export default BlockRange