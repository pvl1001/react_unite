import './ModalAlmond.scss'
import {connect} from "react-redux";
import {Modal} from "react-bootstrap";
import showModal from "../../../redux/actions/showModal";
import Banner from "./components/Banner";
import AlmondCard from "./components/AlmondCard";

function ModalAlmond(props) {
   const banners = [
      {
         "id": "easy",
         "img": "pic_1",
         "alt": "Умный дом",
         "title": "Умный <span>дом</span>",
         "text": "Сервис, который заботится о самом главном: безопасности и удобстве вашего дома. Все устройства\n                     подключаются к роутеру и образуют единую экосистему, которая реагирует на всё, что происходит дома."
      },
      {
         "id": "smartphone",
         "img": "pic_4",
         "alt": "Оповещения из дома",
         "title": "Оповещения <nobr><span>из дома</span></nobr>",
         "text": "Установите датчики открытия двери, протечки воды или движения и получите push-уведомление на\n                     смартфон при срабатывании, где бы вы ни находились. Посмотрите прямую трансляцию с камеры и\n                     убедитесь, что дома всё в порядке."
      },
      {
         "id": "their",
         "img": "pic_3",
         "alt": "Родительский контроль",
         "title": "Родительский <br><span>контроль</span>",
         "text": "Управляйте доступом всей семьи к интернету и легко контролируйте подключённые к сети устройства."
      },
      {
         "id": "around",
         "imgMob": "pic_5_mob",
         "img": "pic_5",
         "alt": "Интернет во всём доме",
         "title": "Интернет <nobr><span>во всём доме</span></nobr>",
         "text": "Один роутер покрывает площадь до 120 кв. м. Для покрытия большей площади объедините несколько\n                     роутеров Almond в единую сеть без проводов."
      },
      {
         "id": "habits",
         "img": "pic_2",
         "alt": "Всегда на связи",
         "title": "Всегда <nobr><span>на связи</span></nobr>",
         "text": "Если в доме начнутся перебои с электричеством, роутер Almond 3S продолжит работать благодаря\n                     встроенному аккумулятору и сохранит доступ в интернет, подключившись к мобильной сети LTE."
      }
   ]
   const routers = [
      {
         id: "almond-0",
         name: "Роутер Almond 3",
         img: "Almond-3_about",
         params: [
            {
               icon: "speed-2_w",
               text: "Скорость <br> до 300 Мбит/с"
            },
            {
               icon: "zone-24_w",
               text: "Зона покрытия <br> до 120 м<sup>2</sup>"
            },
            {
               icon: "hertz_24_w",
               text: "Диапазоны частот <br> 2,4 и 5 Ггц"
            }
         ],
         price: 229,
         totalPrice: 0,
         cnt: 1,
         status: false
      },
      {
         id: "almond-1",
         name: "Роутер Almond 3S",
         img: "Almond-3S_about",
         params: [
            {
               icon: "speed-2_w",
               text: "Скорость <br> до 300 Мбит/с"
            },
            {
               icon: "Whats-left_24",
               text: "Встроенный <br> аккумулятор"
            },
            {
               icon: "zone-24_w",
               text: "Зона покрытия <br> до 120 м<sup>2</sup>"
            },
            {
               icon: "Sim-card_24",
               text: "LTE <br> резервирование"
            },
            {
               icon: "hertz_24_w",
               text: "Диапазоны частот <br> 2,4 и 5 Ггц"
            }
         ],
         price: 339,
         totalPrice: 0,
         cnt: 1,
         status: false
      }
   ]
   const sensors = [
      {
         id: "sensor-0",
         name: "Wi-Fi камера",
         img: "Wi-Fi-kamera_about",
         desc: "Наблюдайте за происходящим дома в реальном времени, где бы вы ни были",
         price: 120,
         totalPrice: 0,
         cnt: 1,
         status: false
      },
      {
         id: "sensor-1",
         name: "Датчик движения",
         img: "Datchik-dvizheniya_about",
         desc: "Будьте в курсе любых передвижений в доме",
         price: 50,
         totalPrice: 0,
         cnt: 1,
         status: false
      },
      {
         id: "sensor-2",
         name: "Датчик открытия и закрытия",
         img: "Datchik-otkrytiya-i-zakrytiya_about",
         desc: "Будьте в курсе всех незваных гостей",
         price: 50,
         totalPrice: 0,
         cnt: 1,
         status: false
      },
      {
         id: "sensor-3",
         name: "Датчик протечки воды",
         img: "Datchik-protechki-vody_about",
         desc: "Узнавайте даже о незаметных протечках, чтобы вовремя их устранять",
         price: 50,
         totalPrice: 0,
         cnt: 1,
         status: false
      }
   ]

   const onHide = () => props.showModal( {modal: 'almond', bool: false} )


   return (
      <Modal centered
             animation={false}
             className="modalAlmond"
             show={props.show}
             onHide={onHide}
      >
         <button type="button" className="modal-close" onClick={onHide}/>
         <h2 className="modalAlmond__banners-title modalAlmond__banners-title_head d-mobile">
            Роутер Almond
         </h2>

         <div className="modalAlmond__banners">
            <h2 className="modalAlmond__banners-title modalAlmond__banners-title_head">Роутер Almond</h2>

            {banners.map( banner =>
               <Banner key={banner.id} banner={banner}/>
            )}

         </div>
         <div className="modalAlmond__price">
            <h3 className="modalAlmond__price-title">Купить Almond</h3>

            <div className="modalAlmond__price-router">
               <h4 className="modalAlmond__price-router-title">Выберите роутер</h4>
               <span className="modalAlmond__price-link"
                     data-toggle="modal" data-target="#choiceRouter">Какой роутер мне подойдет?</span>
               <div className="modalAlmond__price-cards">
                  {routers.map(router =>
                     <AlmondCard key={router.id} card={router} />
                  )}
               </div>

            </div>

            <div className="modalAlmond__price-device">
               <h4 className="modalAlmond__price-device-title">Выберите устройство</h4>

               <div className="modalAlmond__price-cards">
                  {sensors.map(sensor =>
                     <AlmondCard key={sensor.id} card={sensor}/>
                  )}
               </div>
            </div>

            <div className="modalAlmond__price-price price" hidden>
                  <span className="new-price">
                        {/*{{price}}*/}
                  </span>
               <span>₽</span>
               <span>в месяц</span>
               {/*<div className="price__icon" aria-expanded="false"></div>*/}
            </div>
            <button className="modalAlmond__price-btn btn" disabled>Добавить к тарифу</button>
            {/*<button className="modalAlmond__price-btn btn js-modalAlmond-btn" hidden>Отправить заявку</button>*/}
         </div>
      </Modal>

   )
}

const mapStateToProps = state => ({
   show: state.modals.almond.show,
})

const mapDispatchToProps = {
   showModal
}

export default connect( mapStateToProps, mapDispatchToProps )( ModalAlmond )