import s from './Tariffs.module.sass'
import { useSelector } from "react-redux";
import { swiperConfig } from "../../plugins_config";
import React from "react";
import { Swiper } from "swiper/react";


function Tariffs( { children } ) {

   const pageName = useSelector( state => state.page.name )
   const tariffsName = pageName === 'Объединяй!' ? '«Объединяй!»' : pageName

   return (
      <section className={ 'tariffs ' + s.container }>
         <div className="wrapper">
            <h1 className={ s.title }>Тарифы { tariffsName }</h1>

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
