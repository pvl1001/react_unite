import s from './ModalAlmond.module.sass'
import { connect, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { showModal } from "../../../redux/slices/modalsSlice";
import Banner from "./Banner/Banner";
import AlmondCard from "./AlmondCard/AlmondCard";
import { templateEqAlmond } from "../../../redux/slices/tariffsSlice";
import { optionSwitch } from "../../../redux/slices/tariffsSlice";
import { sumTotalPrice } from "../../../redux/slices/tariffsSlice";
import { changeAlmondTotalPrice } from "../../../redux/slices/tariffsSlice";
import { setDataOrder } from "../../../redux/slices/orderSlice";


function ModalAlmond( props ) {
   const show = useSelector( state => state.modals.almond.show )
   const pageName = useSelector( state => state.page.name )
   const tariffDefault = useSelector( state => state.tariffs.their )
   const showModalTariff = useSelector( state => state.modals.tariff.show )
   const tariff = useSelector( state => state.modals.tariff.props )
   const tariffs = useSelector( state => state.tariffs )
   const equipments = useSelector( state => state.equipments )


   if ( show ) {

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

      const payload = { id: tariff, eqKey: 'almond' }

      const almond = showModalTariff
         ? tariffs[tariff].equipments.almond
         : equipments.almond

      function onHide() {
         if ( showModalTariff && isEquipments() ) {
            props.changeAlmondTotalPrice( payload )
            props.optionSwitch( { ...payload, checked: false } )
            props.sumTotalPrice( payload )
         }

         props.showModal( { modal: 'almond', bool: false } )
      }

      function isEquipments() {
         return !tariffs[tariff].equipments.almond.totalPrice
      }

      function addToTariff() {
         props.optionSwitch( { ...payload, checked: true } )
         props.changeAlmondTotalPrice( payload )
         props.sumTotalPrice( payload )
         props.showModal( { modal: 'almond', bool: false } )
      }

      function showModalOrder() {
         props.showModal( { modal: 'order', bool: true } )
         props.setDataOrder( {
            tariffName: `${ pageName } ${ tariffDefault.name }`,
            tariffId: tariffDefault.tariffId,
            equipments: almond.id,
            eventLabel: {
               order: `click_button_order_${ almond.id }`,
               send: `click_button_${ almond.id }_send_equipment`
            }
         } )
      }

      function showModalChoiceRouter() {
         props.showModal( { modal: 'choiceRouter', bool: true } )
      }


      return (
         <Modal
            centered
            animation={ false }
            show={ show }
            onHide={ onHide }
            className={ s.modal }
            dialogClassName={ s.modal_dialog }
            contentClassName={ s.modal_content }
         >
            <button
               type="button"
               className="modal-close"
               onClick={ onHide }
            />
            <h2 className={ `${ s.banners_title } ${ s.banners_title_head } ${ s.d_mobile }` }>
               Роутер Almond
            </h2>


            <div className={ s.banners }>
               <h2 className={ `${ s.banners_title } ${ s.banners_title_head }` }>Роутер Almond</h2>

               { banners.map( banner =>
                  <Banner key={ banner.id } banner={ banner }/>
               ) }
            </div>


            <div className={ s.prices }>
               <h3 className={ s.prices__title }>Купить Almond</h3>

               <div className={ s.prices__routers }>
                  <h4 className={ s.prices__title_routers }>Выберите роутер</h4>

                  <span
                     className={ s.prices__link }
                     onClick={ showModalChoiceRouter }>
                     Какой роутер мне подойдет?
                  </span>

                  <div className={ s.prices__cards }>
                     { templateEqAlmond.map( ( router, i ) =>
                        i <= 1 &&
                        <AlmondCard
                           key={ router.id }
                           card={ router }
                           almond={ almond }
                           index={ i }
                        />
                     ) }
                  </div>

               </div>

               <div className={ s.prices__devices }>
                  <h4 className={ s.prices__title_devices }>Выберите устройство</h4>

                  <div className={ s.prices__cards }>
                     { templateEqAlmond.map( ( sensor, i ) =>
                        i >= 2 &&
                        <AlmondCard
                           key={ sensor.id }
                           card={ sensor }
                           almond={ almond }
                           index={ i }
                        />
                     ) }
                  </div>
               </div>

               { almond.totalPrice &&
                  <div className={ s.prices__total_price + " price" }>
                     <span className={ s.new_price + " new-price" }>{ almond.totalPrice }</span>
                     <span>₽</span>
                     <span>в месяц</span>
                     {/*<div className="price__icon"/>*/ }
                  </div>
               }

               { showModalTariff
                  ? <button
                     className={ s.prices__btn + " btn" }
                     disabled={ !almond.totalPrice }
                     onClick={ addToTariff }>
                     Добавить к тарифу
                  </button>

                  : <button
                     className={ s.prices__btn + " btn" }
                     onClick={ showModalOrder }>
                     Отправить заявку
                  </button>
               }

            </div>
         </Modal>

      )
   }

   return null
}


export default connect( null, {
   showModal,
   optionSwitch,
   sumTotalPrice,
   changeAlmondTotalPrice,
   setDataOrder
} )( ModalAlmond )