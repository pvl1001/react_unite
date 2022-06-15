import s from './InfoBox.module.sass'
import { onUniteSwitch } from "/redux/slices/tariffAroundSlice";
import { connect } from "react-redux";
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
      // analyticsEvent( `click_button_details_${ props.tariff.dataView }_ntv` )
   }


   return (
      <div className={ s._ }>

         <h2 className={ s.title }>Объединяй! { props.tariff.name }</h2>
         <div className={ s.container }>
            <div className={ s.params }>
               <div className={ s.info }>
                  <div className={ s.info__item }>
                     <h5 className={ s.info__title }>Мобильная связь</h5>
                     <div className={ s.info__row }>
                        <div className={ s.info__desc }>
                           <div className={ s.info__descIcon }>
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24"
                                   viewBox="0 0 15 24">
                                 <g transform="translate(-148.819 -182.835)">
                                    <path fill="var(--mf-green)"
                                          d="M160.819,206.835a3,3,0,0,0,3-3v-18a3,3,0,0,0-3-3h-9a3,3,0,0,0-3,3v18a3,3,0,0,0,3,3Zm-10.5-3v-18a1.5,1.5,0,0,1,1.5-1.5h9a1.5,1.5,0,0,1,1.5,1.5v18a1.5,1.5,0,0,1-1.5,1.5h-9A1.5,1.5,0,0,1,150.319,203.835Zm9-16.5h-6v-1.5h6Zm-1.5,15a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,157.819,202.335Z"/>
                                 </g>
                              </svg>
                           </div>
                           <p>{ props.tariff.min } минут <nobr>Безлимит на МегаФон России</nobr></p>
                        </div>
                        <div className={ s.info__desc }>
                           <div className={ s.info__descIcon }>
                              <svg xmlns="http://www.w3.org/2000/svg" width="26" viewBox="0 0 24 21.337">
                                 <path fill="var(--mf-green)"
                                       d="M22.756,10a9.334,9.334,0,1,0,0,9.334L23.91,20a10.668,10.668,0,1,1,0-10.668ZM26,12H24.67v2h-2v1.333h2v2H26v-2h2V14H26ZM13.335,18.668V17.334H14V16h-.667V14H12v2H9.528l1.647-5.127-1.267-.407L8.1,16.094l-.067.347.58.893H12v1.333Zm6.934-6.154.8-1.073a4.074,4.074,0,0,0-5.234.373,4,4,0,0,0,5.234,6.054l.267-.2V14H18.669v1.333H20v1.647a2.714,2.714,0,0,1-3.22-.427,2.667,2.667,0,0,1,0-3.78A2.72,2.72,0,0,1,20.269,12.514Z"
                                       transform="translate(-4.004 -3.999)"/>
                              </svg>
                           </div>
                           <p>
                              <nobr>50 ГБ</nobr>
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className={ s.info__item }>
                     <h5 className={ s.info__title }>Беспроводной интернет и ТВ</h5>
                     <div className={ s.info__row }>
                        <div className={ s.info__desc }>
                           <div className={ s.info__descIcon }>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17.998"
                                   viewBox="0 0 24 17.998">
                                 <g transform="translate(-74.41 -268.552)">
                                    <ellipse fill="var(--mf-green)" cx="1.555" cy="1.514" rx="1.555" ry="1.514"
                                             transform="translate(84.895 283.522)"/>
                                    <path fill="var(--mf-green)"
                                          d="M74.41,273.324l1.41,1.445a15.418,15.418,0,0,1,21.18,0l1.41-1.445A17.475,17.475,0,0,0,74.41,273.324Zm7.36,6.966,1.41,1.445a4.883,4.883,0,0,1,6.46,0l1.41-1.445A7.019,7.019,0,0,0,81.77,280.29Z"/>
                                    <path fill="var(--mf-green)"
                                          d="M138.03,365.259l1.4,1.464a11.049,11.049,0,0,1,14.627,0l1.4-1.464A13.17,13.17,0,0,0,138.03,365.259Z"
                                          transform="translate(-60.167 -88.404)"/>
                                 </g>
                              </svg>
                           </div>
                           <p>{ props.tariff.speed } Мбит/с</p>
                        </div>
                        <div className={ s.info__desc }>
                           <div className={ s.info__descIcon }>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M11 11.91V20.08L12.32 21L21 17.22V14.64L12.25 11L11 11.91ZM13 13.49L19 15.93L13 18.47V13.49Z"
                                    fill="#00B956"/>
                                 <path
                                    d="M24.74 7H19.59L20.89 4.39L19.11 3.5L17.36 7H14.64L12.89 3.5L11.1 4.39L12.41 7H7.26C6.39621 7.00264 5.56854 7.34695 4.95775 7.95775C4.34695 8.56854 4.00264 9.39621 4 10.26V21.74C4.00264 22.6038 4.34695 23.4315 4.95775 24.0423C5.56854 24.6531 6.39621 24.9974 7.26 25H24.75C25.1768 25 25.5994 24.9159 25.9937 24.7526C26.388 24.5893 26.7463 24.3499 27.0481 24.0481C27.3499 23.7463 27.5893 23.388 27.7526 22.9937C27.9159 22.5994 28 22.1768 28 21.75V10.26C27.9974 9.39621 27.6531 8.56854 27.0423 7.95775C26.4315 7.34695 25.6038 7.00264 24.74 7ZM26 21.75C26 22.0815 25.8683 22.3995 25.6339 22.6339C25.3995 22.8683 25.0815 23 24.75 23H7.26C6.92664 22.9974 6.60767 22.8638 6.37194 22.6281C6.1362 22.3923 6.00261 22.0734 6 21.74V10.26C6.00261 9.92664 6.1362 9.60767 6.37194 9.37193C6.60767 9.1362 6.92664 9.00261 7.26 9H24.74C25.0734 9.00261 25.3923 9.1362 25.6281 9.37193C25.8638 9.60767 25.9974 9.92664 26 10.26V21.75Z"
                                    fill="#00B956"/>
                              </svg>
                           </div>
                           <p>{ props.tariff.tvLength }</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={ s.switch }>
                  <div className={ s.checkbox }>
                     <div className={ `${ s.checkbox__hire } item-option` }>
                        <label>
                           <div className={ `${ s.checkbox__switch } switch` }>
                              <input
                                 type="checkbox"
                                 onClick={ handleChange }
                                 defaultChecked={ props.tariff.routerSwitch }
                              />
                              <span className="round"/>
                           </div>
                        </label>

                        <div className={ s.checkbox__switchText }>
                           <p>
                              <span className={ s.checkbox__switchName }>
                                 Аренда 4G Wi-Fi-роутера </span>
                              <nobr
                                 className={ s.linkParams }
                                 onClick={ showModalEq }>
                                 Технические характеристики
                              </nobr>
                           </p>
                           <p className={ s.switchPrice }>{ router.price } ₽ в месяц</p>
                        </div>
                     </div>

                  </div>
               </div>
               <div className={ s.order }>
                  <div
                     className={ `${ s.order__btn } btn` }
                     data-view="block_vezde_ntv"
                     onClick={ props.showModalOrder }>
                     Отправить заявку
                  </div>

                  <div className={ `${ s.price } price` }>
                     <span className={ `${ s.price__oldPrice } old-price` }>{ oldPrice } ₽</span> <span>
                        <span className={ `${ s.price__newPrice } new-price` }>
                           { priceSale }</span> <span>₽</span> <span>в месяц</span>
                     </span>
                  </div>
               </div>
            </div>
            <div className={ s.img }>
               <img
                  alt="router"
                  src={ '/images/equipments/router_info_2x.webp' }
               />
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