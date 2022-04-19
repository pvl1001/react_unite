import s from './Equipments.module.sass';
import EqCard from "./EqCard/EqCard";
import { connect } from "react-redux";
import { swiperConfig } from "../../plugins_config";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";


function Equipments( props ) {

   return (
      <section className={ 'equipments ' + s.container }>
         <div className="wrapper">
            <h1 className={ s.title }>Оборудование</h1>

            <div className={ `${ s.slider } slider-equipments` }>
               <button className="swiper-btn swiper-next"/>
               <button className="swiper-btn swiper-prev"/>
               <Swiper { ...swiperConfig } navigation={ {
                  nextEl: '.slider-equipments .swiper-next',
                  prevEl: '.slider-equipments .swiper-prev'
               } }>
                  { props.data.map( eq => (
                     <SwiperSlide key={ eq.id }>
                        <EqCard eq={ eq }/>
                     </SwiperSlide>
                  ) ) }
               </Swiper>
            </div>

         </div>
      </section>
   )
}


const mapStateToProps = state => ({
   data: state.equipments
})
export default connect( mapStateToProps, null )( Equipments )