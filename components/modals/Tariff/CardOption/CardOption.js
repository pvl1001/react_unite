import { connect } from "react-redux";
import { optionSwitch } from "../../../../redux/slices/tariffsSlice";
import { tariffRadioPlan } from "../../../../redux/slices/tariffsSlice";
import { sumTotalPrice } from "../../../../redux/slices/tariffsSlice";
import { showModal } from "../../../../redux/slices/modalsSlice";
import Image from 'next/image';
import s from './CardOption.module.sass'


function CardOption( props ) {
   const payload = { id: props.id, index: props.idx }

   const handleSwitch = ( e ) => {
      props.optionSwitch( { ...payload, checked: e.target.checked } )
      props.sumTotalPrice( payload )
   }

   const handleRadio = () => {
      props.tariffRadioPlan( payload )
      props.sumTotalPrice( payload )
   }

   const price = ( id ) => {
      if ( id === 'eq-almond' ) {
         return props.equipment.currentPrice || props.equipment.price
      }
      if ( props.equipment.plan ) {
         return props.equipment.plan.find( p => p.checked ).value
      }
      return props.equipment.price
   }

   const openModalEquipment = () => {
      props.showModal( { modal: 'equipment', bool: true, props: props.equipment } )
   }

   const openModalAlmond = () => {
      props.showModal( { modal: 'almond', bool: true } )
   }


   return (
      <li key={ props.equipment.id }
          className={ s.container }>

         <div className={ s.img }>

            { props.equipment.name === 'Android TV' &&
               <div className={ s.mark + " mark" }>Акция</div>
            }

            <Image
               alt={ props.equipment.img }
               src={ `/images/equipments/${ props.equipment.img }.webp` }
               layout={ 'fill' }
               objectFit={ 'contain' }
            />
         </div>

         <div className={ s.option }>
            <div>
               { props.equipment.id === 'eq-almond'
                  ? <h3 onClick={ openModalAlmond }
                        dangerouslySetInnerHTML={ {
                           __html: props.equipment.name + (props.equipment.speed
                              ? ` <nobr>${ props.equipment.speed }</nobr>`
                              : '')
                        } }/>
                  : <h3 onClick={ openModalEquipment }>{ props.equipment.name }</h3> }


            </div>

            { props.equipment.plan
               ? <p>Рассрочка</p>
               : <p>Аренда</p> }

            { props.equipment.plan &&
               <div className={ s.option__radio + " option-radio" }>

                  { props.equipment.plan.map( ( p, i ) => (
                     <label key={ p.name } className="option-radio__radio-btn">
                        <input
                           name={ `radio-${ props.equipment.id }-${ props.idx }` }
                           id={ `plan-${ i }-${ props.equipment.id }-${ props.idx }` }
                           type="radio"
                           value={ p.value }
                           onChange={ handleRadio }
                           checked={ p.checked }
                           disabled={ !props.equipment.switch }
                        />
                        <label htmlFor={ `plan-${ i }-${ props.equipment.id }-${ props.idx }` }/>
                        <span>{ p.name }</span>
                     </label>
                  ) ) }
               </div> }
         </div>

         <div className={ s.price }>
            <div className={ s.price__price }>
               <span className={ s.price__current }>
                  { price( props.equipment.id ) }
               </span> <span> ₽</span>
               <span className={ s.price__month }> в месяц</span>
            </div>

            <label className={ s.price__switch + " switch" }>
               <input type="checkbox"
                      onChange={ ( e ) => handleSwitch( e ) }
                      checked={ props.equipment.switch }/>
               <span className="round"/>
            </label>
         </div>
      </li>
   )
}


export default connect( null, {
   optionSwitch,
   tariffRadioPlan,
   sumTotalPrice,
   showModal
} )( CardOption )
