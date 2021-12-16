import React from 'react'
import './Header.scss'
import {connect} from 'react-redux'
import head_banner_mob from '../../img/pic/head_banner_mob.webp'
import head_banner_tap from '../../img/pic/head_banner_tap.webp'
import head_banner_desctop from '../../img/pic/head_banner_desctop.webp'
import showModal from "../../redux/actions/showModal";

function Header(props) {

   return (
      <header className="header">
         <div className="wrapper">
            <div className="section-row">
               <div className="header__text">
                  <h1>
                     Домашний интернет,
                     <nobr>ТВ и связь</nobr>
                  </h1>
                  <p>В тарифах «Объединяй!»</p>
                  <div className="header__btns">
                     <button onClick={ () => props.showModal( {modal: 'order', bool: true}) }
                             type="button"
                             className="btn btn-fiolet"
                             data-view="first_banner"
                     >Подключить
                     </button>
                     <span data-target="#for-their" data-toggle="modal"
                           className="header__about"
                           onClick={() => props.showModal( {modal: 'tariff', bool: true, props: 'for-their'} )}
                     >Подробнее</span>
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

const mapDispatchToProps = {
   showModal
}

export default connect(null, mapDispatchToProps)(Header)