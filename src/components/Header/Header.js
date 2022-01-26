import './Header.scss'
import React from 'react'
import {connect} from 'react-redux'
import head_banner_mob from '../../img/pic/head_banner_mob.webp'
import head_banner_tap from '../../img/pic/head_banner_tap.webp'
import head_banner_desctop from '../../img/pic/head_banner_desctop.webp'
import showModal from "../../redux/actions/showModal";
import {setDataOrder} from "../../redux/reducers/orderReducer";

function Header(props) {

   function showModalOrder() {
      props.showModal({modal: 'order', bool: true})
      props.setDataOrder({tariffName: props.tariff.name, tariffId: props.tariff.tariffId})
   }

   function showModalTariff() {
      props.showModal({modal: 'tariff', bool: true, props: props.tariff.id})
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
                     <source srcSet={head_banner_mob} media="(max-width: 602px)"/>
                     <source srcSet={head_banner_tap} media="(max-width: 935px)"/>
                     <img className="header__img" src={head_banner_desctop} alt="head_banner"/>
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