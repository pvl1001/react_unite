import wiFi from "../../../img/svg/wi-fi.svg";
import tv from "../../../img/svg/tv.svg";
import mobile from "../../../img/svg/mobile.svg";
import web_4g from "../../../img/svg/4g.svg";
import router_info_2x from "../../../img/pic/router_info_2x.webp";
import {onUniteSwitch, scrollTo} from "../../../redux/reducers/tariffsReducer";
import {useRef} from "react";
import {connect} from "react-redux";
import showModal from "../../../redux/actions/showModal";

function Offer(props) {
   const refBlockRouter = useRef(null)
   const router = props.tariff.equipments[0]
   const oldPrice = props.tariff.price + props.tariff.equipments[0].price
   const priceSale = props.tariff.calcPriceSale


   function scroll() {
      scrollTo(refBlockRouter.current)
   }

   function handleChange(e) {
      props.onUniteSwitch(e.target.checked)
   }

   function showModalEq() {
      props.showModal({modal: 'equipment', bool: true, props: {...router, style: {marginBottom: 55}}})
   }


   return (
      <>
         <div className="unite-address__offer">
            <p>
               К сожалению, мы пока не можем подключить ваш дом к домашнему интернету. <br/>
               Но по адресу <b>{props.address}</b> доступно <span className="underline" onClick={scroll}>специальное предложение</span> на
               беспроводной интернет:
            </p>
            <span className="link" onClick={props.resultNull}>Изменить адрес</span>
         </div>

         <div className="unite__router" ref={refBlockRouter} id="unite">
            <div className="unite__to-plug">
               <h2>Мобильная связь, домашний интернет и ТВ на 4G+ скоростях со скидкой 40% навсегда</h2>
               <p>
                  Пользуйтесь самым быстрым интернетом дома, даже когда недоступен проводной интернет. Берите
                  роутер с
                  собой и пользуйтесь Wi-Fi дома, на даче или у друзей.
               </p>
            </div>

            <div className="unite-row">

               <div className="unite__params">

                  <div className="unite__params-title">
                     <h2>Объединяй! {props.tariff.name}</h2>
                  </div>

                  <div className="unite-info-row">
                     <div className="unite-info">
                        <p className="unite-info__title">Беспроводной интернет и ТВ</p>
                        <div className="unite-info__desc">
                           <div className="unite-info__desc_icon">
                              <img src={wiFi} alt="wi-fi"/>
                           </div>
                           {props.tariff.speed} Мбит/с
                        </div>
                        <div className="unite-info__desc desk-channels">
                           <div className="unite-info__desc_icon">
                              <img src={tv} alt="tv"/>
                           </div>
                           <a href=" ">{props.tariff.tvLength}</a>
                        </div>
                     </div>
                     <div className="unite-info">
                        <p className="unite-info__title">Мобильная связь</p>
                        <div className="unite-info__desc desk-mobile">
                           <div className="unite-info__desc_icon">
                              <img src={mobile} alt="mobile"/>
                           </div>
                           <div>
                              <p>{props.tariff.min} минут</p>
                              <p>Безлимит на МегаФон России</p>
                           </div>
                        </div>
                        <div className="unite-info__desc">
                           <div className="unite-info__desc_icon">
                              <img src={web_4g} alt="4g"/>
                           </div>
                           Безлимитный интернет
                        </div>
                     </div>
                  </div>

                  <div className="unite-checkbox">
                     <div className="unite-checkbox__hire item-option">
                        <label>
                           <div className="switch">
                              <input
                                 type="checkbox"
                                 onClick={handleChange}
                                 defaultChecked={props.tariff.routerSwitch}
                              />
                              <span className="round"/>
                           </div>
                           <div className="switch-text">
                              <p>Аренда 4G Wi-Fi роутера</p>
                              <span className="item-option__num">{router.price}</span>
                              <span> ₽ в месяц</span>
                           </div>
                        </label>
                     </div>
                  </div>

                  <div className="unite__links">
                     <a href=" ">Скачать подробную информацию</a>
                     <span onClick={showModalEq}>Технические характеристики</span>
                  </div>

                  <div className="unite-order">
                     <div onClick={props.showModalOrder} className="btn">Отправить заявку</div>
                     <div className="price">
                        <span className="old-price">{oldPrice} ₽</span>
                        <span className="new-price"> {priceSale} ₽</span>
                        <span> в месяц</span>
                     </div>
                  </div>
               </div>
               <div className="unite__img">
                  <img src={router_info_2x} alt="router"/>
               </div>
            </div>
         </div>
      </>
   )
}

export default connect(
   state => ({
      tariff: state.tariffs.find(tariff => tariff.id === 'around')
   }), {
      onUniteSwitch,
      showModal
   }
)(Offer)