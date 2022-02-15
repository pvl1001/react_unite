import s from './Tariffs.module.sass'
import TariffCard from "./TariffCard/TariffCard";
import Slider from "react-slick";
import React, { useState } from "react";
import { connect } from "react-redux";


function Tariffs( props ) {
   const premium = props.tariffs.find( el => el.id === 'premium' )
   const [ collapseGroup, setCollapseGroup ] = useState( false )
   const [ collapseChannels, setCollapseChannels ] = useState( [] )


   const settingsSlider = {
      dots: true,
      infinite: false,
      slidesToShow: 4,
      responsive: [
         {
            breakpoint: 1280,
            settings: {
               slidesToShow: 3,
            }
         }, {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
            }
         }, {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               arrows: false,
            }
         }
      ]
   }

   return (
      <section className={ 'tariffs ' + s.container }>
         <div className="wrapper">
            <h1 className={ s.title }>Тарифы «Объединяй!»</h1>

            <Slider className="slider" { ...settingsSlider }>
               { props.tariffs.map( tariff =>
                  <TariffCard
                     key={ tariff.id }
                     tariff={ tariff }
                     premium={ premium }
                     collapse={ {
                        collapseGroup,
                        setCollapseGroup,
                        collapseChannels,
                        setCollapseChannels
                     } }
                  />
               ) }
            </Slider>

         </div>

      </section>
   )
}


export default connect(
   state => ({
      tariffs: state.tariffs
   })
)( Tariffs )
