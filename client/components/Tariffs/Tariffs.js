import s from './Tariffs.module.scss'
import { swiperConfig } from "../../plugins_config";
import React from "react";
import { Swiper } from "swiper/react";
import Tabs from "../Tabs/Tabs";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/slices/modalsSlice";


function Tariffs( { children, tariffFilter } ) {
   const dispatch = useDispatch()

   function showModalCity() {
      dispatch( showModal( { modal: 'cities', bool: true } ) )
   }


   return (
      <section className={ 'tariffs ' + s.container }>
         <div className="wrapper">

            <h1 className={ s.title }>Тарифы для твоего города: <span onClick={ showModalCity }>Москва</span></h1>

            <Tabs tariffFilter={ tariffFilter }/>

            <div className={ `${ s.slider } slider-tariffs` }>
               <button className="swiper-btn swiper-next"/>
               <button className="swiper-btn swiper-prev"/>
               <Swiper { ...swiperConfig } navigation={ {
                  nextEl: '.slider-tariffs .swiper-next',
                  prevEl: '.slider-tariffs .swiper-prev',
               } }>
                  { children }
               </Swiper>
            </div>

         </div>
      </section>
   )
}


export default Tariffs
