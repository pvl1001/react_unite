import s from './InfoBox.module.sass'
import { onUniteSwitch } from "/redux/slices/tariffAroundSlice";
import { connect } from "react-redux";
import { analyticsEvent } from "/analytics/events";
import { showModal } from "/redux/slices/modalsSlice";


function InfoBox( props ) {

   const router = props.tariff.equipments[0]
   const oldPrice = props.tariff.routerSwitch
      ? props.tariff.price + props.tariff.equipments[0].price
      : props.tariff.price
   const priceSale = props.tariff.calcPriceSale

   function handleChange( e ) {
      props.onUniteSwitch( e.target.checked )
   }

   function showModalEq() {
      props.showModal( {
         modal: 'equipment',
         bool: true,
         props: router.id
      } )
      analyticsEvent( `click_button_details_${ props.tariff.dataView }_ntv` )
   }


   return (
      <div className={ s.container }>

         <div className={ s.title }>
            <h2>Объединяй! { props.tariff.name }</h2>
         </div>

         <div className={ s.row }>
            <div className={ s.params }>
               <p className={ s.params__title }>Беспроводной интернет <nobr>и ТВ</nobr></p>

               <div className={ s.params__desc }>
                  <div className={ s.params__icon }>
                     <img src={ '/svg/wi-fi.svg' } alt="wi-fi"/>
                  </div>
                  { props.tariff.speed } Мбит/с
               </div>

               <div className={ s.params__desc }>
                  <div className={ s.params__icon }>
                     <img src={ '/svg/tv.svg' } alt="tv"/>
                  </div>
                  <a href=" ">{ props.tariff.tvLength }</a>
               </div>
            </div>

            <div className={ s.params }>

               <p className={ s.params__title }>Мобильная связь</p>

               <div className={ `${ s.params__desc } ${ s.desk_mobile }` }>
                  <div className={ s.params__icon }>
                     <img src={ '/svg/mobile.svg' } alt="mobile"/>
                  </div>

                  <div>
                     <p>{ props.tariff.min } минут</p>
                     <p>Безлимит на МегаФон России</p>
                  </div>
               </div>

               <div className={ s.params__desc }>
                  <div className={ s.params__icon }>
                     <img src={ '/svg/4g.svg' } alt="4g"/>
                  </div>
                  { props.tariff.web } ГБ
               </div>
            </div>
         </div>

         <div className={ s.checkbox }>
            <div className={ s.checkbox__hire }>
               <label>
                  <div className={ 'switch ' + s.checkbox__switch }>
                     <input
                        type="checkbox"
                        onClick={ handleChange }
                        defaultChecked={ props.tariff.routerSwitch }
                     />
                     <span className="round"/>
                  </div>
                  <div className={ s.checkbox__text }>
                     <p>Аренда 4G Wi-Fi роутера</p>
                     <span className="item-option__num">{ router.price }</span>
                     <span> ₽ в месяц</span>
                  </div>
               </label>
            </div>
         </div>

         <div className={ s.links }>
            <a href="#">Скачать подробную информацию</a>
            <span onClick={ showModalEq }>Технические характеристики</span>
         </div>

         <div className={ s.order }>
            <div
               className={ "btn " + s.order__btn }
               data-view="block_vezde_ntv"
               onClick={ () => props.showModalOrder() }>
               Отправить заявку
            </div>

            <div className={ "price " + s.order__price }>
               <span className="old-price">{ oldPrice } ₽</span>
               <span className="new-price"> { priceSale } ₽</span>
               <span> в месяц</span>
            </div>
         </div>
      </div>

   )
}


export default connect( state => ({
   tariff: state.tariffAround
}), {
   onUniteSwitch,
   showModal
} )( InfoBox )