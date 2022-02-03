import React from 'react'
import {connect} from 'react-redux'
import head_banner_mob from '../../assets/img/pic/head_banner_mob.webp'
import head_banner_tap from '../../assets/img/pic/head_banner_tap.webp'
import head_banner_desctop from '../../assets/img/pic/head_banner_desctop.webp'
import showModal from "../../redux/actions/showModal";
import {setDataOrder} from "../../redux/reducers/orderReducer";
import {analyticsEvent} from "../../analytics/events";

function Header(props) {

   function showModalOrder() {
      props.showModal({modal: 'order', bool: true})
      props.setDataOrder({
         tariffName: props.tariff.name,
         tariffId: props.tariff.tariffId,
         eventLabel: {
            order: `click_button_connect_${props.tariff.dataView}`,
            send: `click_button_connect_send_${props.tariff.dataView}`
         }
      })
   }

   function showModalTariff() {
      props.showModal({modal: 'tariff', bool: true, props: props.tariff.id})
      analyticsEvent(`click_button_connect_details_${props.tariff.dataView}`)
   }


   return (
      <header className="header">
         <div className="wrapper">
            <div className="section-row">
               <div className="header__text">
                  <h1>
                     Домашний интернет,
                     <nobr> ТВ и связь</nobr>
                  </h1>

                  <p>В тарифах «Объединяй!»</p>

                  <div className="header__btns">
                     <button
                        type="button"
                        onClick={showModalOrder}
                        className="btn btn-fiolet"
                        data-view="first_banner">
                        Подключить
                     </button>

                     <span
                        className="header__about"
                        onClick={showModalTariff}>
                        Подробнее
                     </span>
                  </div>
               </div>

               <div className="header__img-wrapp">
                  <picture>
                     <source srcSet={head_banner_mob.src} media="(max-width: 602px)"/>
                     <source srcSet={head_banner_tap.src} media="(max-width: 935px)"/>
                     <img className="header__img" src={head_banner_desctop.src} alt="head_banner"/>
                  </picture>
               </div>
            </div>
         </div>
      </header>
   )
}


export default connect(
   state => ({
      tariff: state.tariffs.find(tariff => tariff.id === 'for-their')
   }),
   {
      showModal,
      setDataOrder
   }
)(Header)