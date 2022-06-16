import s from "./BlockRange.module.sass";
import WifiIcon from '../../../public/svg/green_wi-fi.svg';
import TvIcon from '../../../public/svg/green_tv.svg';
import Range from "../Range/Range";
import { useState } from "react";
import { connect } from 'react-redux';
import { showModal } from "../../../redux/slices/modalsSlice";
import { getChannels } from "../../../redux/slices/tariffsSlice";
import { setDataOrder } from "../../../redux/slices/orderSlice";


function BlockRange( { tariff, name, showModal, getChannels, setDataOrder, pageName } ) {
   const price = tariff.oldPrice
   const [ rangeValue, setRangeValue ] = useState( 4 )
   const [ range, setRange ] = useState( [
      { month: 1, percent: 5, active: false },
      { month: 7, percent: 10, active: false },
      { month: 19, percent: 15, active: false },
      { month: 31, percent: 25, active: false },
      { month: 61, percent: 50, active: false },
   ] )

   const setSalePrice = () => Math.ceil( price - price * range[rangeValue].percent / 100 )
   const showModalChannels = () => {
      !tariff.channels && getChannels( tariff.tvId )
      showModal( { modal: 'channels', bool: true } )
   }

   function showModalOrder() {
      showModal( { modal: 'order', bool: true } )
      setDataOrder( {
         tariffName: `${ pageName } ${ tariff.name }`,
         tariffId: tariff.tariffId,
         eventLabel: {
            order: `click_button_order_${ tariff.id }`,
            send: `click_button_send_${ tariff.id }`
         }
      } )
   }


   return (
      <div className={ s.container }>

         <h2 className={ s.title }>{ name }</h2>

         <div className={ s.options }>
            <div className={ s.option }>
               <div className={ s.option__icon }>
                  <WifiIcon/>
               </div>

               <div>
                  <p className={ s.option__key }>Домашний интернет</p>
                  <p className={ s.option__value }>{ tariff.speed + " Мбит/с" }</p>
               </div>

            </div>
            <div className={ s.option }>
               <div className={ s.option__icon }>
                  <TvIcon/>
               </div>
               <div>
                  <p className={ s.option__key }>Цифровое ТВ</p>
                  <p className={ ` ${ s.option__value } ${ s.option__value_btn } ` }
                     onClick={ showModalChannels }>
                     { tariff.tvLength }
                  </p>
               </div>
            </div>
         </div>

         <div className={ s.range }>

            <div className={ s.range__block_range }>

               <h3 className={ s.range__title }>Время использования</h3>

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
                  <span>{ setSalePrice() }</span> ₽ в месяц
               </p>
               <button
                  onClick={ showModalOrder }
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


export default connect( null, {
   showModal,
   getChannels,
   setDataOrder
} )( BlockRange )