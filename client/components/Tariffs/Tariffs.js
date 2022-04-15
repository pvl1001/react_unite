import s from './Tariffs.module.sass'
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { settingsSlider } from "../../plugins_config";


function Tariffs( { children } ) {

   const pageName = useSelector( state => state.page.name )
   const tariffsName = pageName === 'Объединяй!' ? '«Объединяй!»' : pageName

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
