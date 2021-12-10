import './CheckAddress.scss'
import success from '../../img/svg/success.svg'
import wiFi from '../../img/svg/wi-fi.svg'
import tv from '../../img/svg/tv.svg'
import mobile from '../../img/svg/mobile.svg'
import web_4g from '../../img/svg/4g.svg'
import router_info_2x from '../../img/pic/router_info_2x.png'


export default function CheckAddress() {
   return (
      <section className="unite-wrapper">
         <div className="unite unite-check-address wrapper">
            <div className="unite-address">
               <div id="addressCheckHead">
                  <p className="unite-address__title">
                     Проверь возможность <nobr>подключения по твоему</nobr> адресу
                  </p>
                  <form id="CHKADR" name="address" className="unite-address__input">
                     <div>
                        <input type="text" id="addressCheck" name="address" placeholder="Адрес"/>
                        <label className="error" htmlFor="addressCheck">Выберите адрес дома из выпадающего
                           списка!</label>
                     </div>
                     <button type="submit" className="btn" data-view="block_checkaddress">Проверить</button>
                  </form>
               </div>

               <div className="unite-address__offer">
                  <p>
                     К сожалению, мы пока не можем подключить ваш дом к домашнему интернету. <br/>
                     Но по адресу <b/> доступно
                     <span className="underline">специальное предложение</span>
                     на беспроводной интернет:
                  </p>
                  <span className="link">Изменить адрес</span>
               </div>

               <div className="success-check">
                  <img src={success} alt="success"/>
                  <p>Подключение по адресу <b>адрес</b> Возможно!</p>
                  <span className="link">Изменить адрес</span>
                  <button className="btn"
                          data-toggle="modal"
                          data-target="#showOrder"
                  >Отправить заявку
                  </button>
               </div>

               <div className="unite__router" id="unite">
                  <div className="unite__to-plug">
                     <h2>Мобильная связь, домашний интернет и ТВ на 4G+ скоростях со скидкой 40% навсегда</h2>
                     <p>
                        Пользуйтесь самым быстрым интернетом дома, даже когда недоступен проводной интернет. Берите
                        роутер с
                        собой и пользуйтесь Wi-Fi дома, на даче или у друзей.
                     </p>
                  </div>

                  <div className="unite-row">

                     {/*{{#each tariffs}}*/}
                     {/*{{#h-if id '===' 'around'}}*/}
                     <div className="unite__params">
                        <div className="unite__params-title">
                           <h2>Объединяй!
                              {/*{{name}}*/}
                           </h2>
                        </div>
                        <div className="unite-info-row">
                           <div className="unite-info">
                              <p className="unite-info__title">Беспроводной интернет и ТВ</p>
                              <div className="unite-info__desc">
                                 <div className="unite-info__desc_icon">
                                    <img src={wiFi} alt="wi-fi"/>
                                 </div>
                                 {/*{{speed}} */}
                                 Мбит/с
                              </div>
                              <div className="unite-info__desc desk-channels">
                                 <div className="unite-info__desc_icon">
                                    <img src={tv} alt="tv"/>
                                 </div>
                                 <a href="#">
                                    {/*{{tvLength}}*/}
                                 </a>
                              </div>
                           </div>
                           <div className="unite-info">
                              <p className="unite-info__title">Мобильная связь</p>
                              <div className="unite-info__desc desk-mobile">
                                 <div className="unite-info__desc_icon">
                                    <img src={mobile} alt="mobile"/>
                                 </div>
                                 <div>
                                    <p>
                                       {/*{{min}}*/}
                                       минут</p>
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
                                    <input defaultChecked type="checkbox"/>
                                    <span className="round"/>
                                 </div>
                                 <div className="switch-text">
                                    <p>Аренда 4G Wi-Fi роутера</p>
                                    <span className="item-option__num">
                                       {/*{{../unite.price}}*/}
                                       </span> < span> ₽ в месяц</span>
                                 </div>
                              </label>
                           </div>
                        </div>

                        <div className="unite__links">
                           <a href="#">Скачать подробную информацию</a>
                           <span data-target="#{{../unite.id}}"
                                 data-toggle="modal"
                           >Технические характеристики</span>
                        </div>

                        <div className="unite-order">
                           <div data-toggle="modal" data-target="#showOrder" className="btn" data-view="block_vezde_ntv"
                           >Отправить заявку
                           </div>
                           <div className="price">
                              <span className="old-price">1600 ₽</span>
                              <span className="new-price">
                                          {/*{{../unite.priceSale}}*/}
                                          </span> <span>₽</span>
                              <span>в месяц</span>
                           </div>
                        </div>
                     </div>
                     <div className="unite__img">
                        <img src={router_info_2x} alt="router"/>
                     </div>
                     {/*{{/h-if}}*/}
                     {/*{{/each}}*/}
                  </div>
               </div>
            </div>
         </div>
      </section>
      // <!--г Москва, ул Набережная, д 4-->
   )
}