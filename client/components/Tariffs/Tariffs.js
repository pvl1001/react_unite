import s from './Tariffs.module.sass'
import Slider from "react-slick";
import { useSelector } from "react-redux";


function Tariffs( { children } ) {

   const pageName = useSelector( state => state.page.name )
   const tariffsName = pageName === 'Объединяй!' ? '«Объединяй!»' : pageName
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
            <h1 className={ s.title }>Тарифы { tariffsName }</h1>

            <Slider className="slider" { ...settingsSlider }>
               { children }
            </Slider>

         </div>

      </section>
   )
}


export default Tariffs
