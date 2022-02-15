import s from './Equipments.module.sass';
import Slider from 'react-slick'
import EqCard from "./EqCard/EqCard";
import { connect } from "react-redux";


function Equipments( props ) {

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
               arrows: false,
               variableWidth: true
            }
         }, {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               arrows: false,
               variableWidth: true
            }
         }
      ]
   }

   return (
      <section className={ 'equipments ' + s.container }>
         <div className="wrapper">
            <h1 className={ s.title }>Оборудование</h1>

            <Slider { ...settingsSlider } className={ 'slider' }>

               { props.data.map( eq => (
                  <EqCard key={ eq.id } eq={ eq }/>
               ) ) }

            </Slider>

         </div>
      </section>
   )
}


const mapStateToProps = state => ({
   data: state.equipments
})
export default connect( mapStateToProps, null )( Equipments )