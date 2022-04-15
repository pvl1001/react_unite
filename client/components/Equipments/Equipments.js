import s from './Equipments.module.sass';
import Slider from 'react-slick'
import EqCard from "./EqCard/EqCard";
import { connect } from "react-redux";
import { settingsSlider } from "../../plugins_config";


function Equipments( props ) {

   return (
      <section className={ 'equipments ' + s.container }>
         <div className="wrapper">
            <h1 className={ s.title }>Оборудование</h1>

            <Slider { ...settingsSlider } className={ 'slider slider-equipments' }>

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