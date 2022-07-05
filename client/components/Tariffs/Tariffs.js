import s from './Tariffs.module.scss'
import { swiperConfig } from "../../plugins_config";
import React from "react";
import { Swiper } from "swiper/react";
import Tabs from "../Tabs/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../redux/slices/modalsSlice";


function Tariffs( { children, setStateOnChangeSlider, setActiveTab } ) {
   const dispatch = useDispatch()
   const { region } = useSelector( state => state.page )

   function showModalCity() {
      dispatch( showModal( { modal: 'cities', bool: true } ) )
   }

   function onSetTransition( slider ) {
      const activeSlideBtn = Array.from( slider.slides ).find( s => s.classList.contains( 'swiper-slide-active' ) )
      setStateOnChangeSlider( activeSlideBtn )
   }


   return (
      <section className={ 'tariffs ' + s.container }>
         <div className="wrapper">

            <h1 className={ s.title }>Тарифы для твоего региона: <span onClick={ showModalCity }>{ region.name }</span></h1>

            <Tabs setActiveTab={ setActiveTab }/>

            <div className={ `${ s.slider } slider-tariffs` }>
               <button className="swiper-btn swiper-next"/>
               <button className="swiper-btn swiper-prev"/>
               <Swiper { ...swiperConfig } onSetTransition={ onSetTransition } navigation={ {
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
