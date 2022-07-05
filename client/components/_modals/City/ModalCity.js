import { Modal } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { showModal } from "../../../redux/slices/modalsSlice";
import s from './ModalCity.module.sass';
import { setInitialChannels, setInitialStateTariffs } from "../../../redux/slices/tariffsSlice";
import getLocationData from "../../../api/getLocationData";
import { setRegion } from "../../../redux/slices/pageSlice";
import getChannels from "../../../mixins/getChannels";


function ModalCity( props ) {
   const { show, tariffs } = props
   const dispatch = useDispatch()
   const regions = {
      А: [
         {
            name: "Астраханская область",
            id: 15
         },
      ],
      Б: [
         {
            name: "Белгородская область",
            id: 16
         }
      ],
      В: [
         {
            name: "Воронежская область",
            id: 21
         }
      ],
      К: [
         {
            name: "Калининградская область",
            id: 22
         },
         {
            name: "Курская область",
            id: 26
         }
      ],
      Л: [
         {
            name: "Липецкая область",
            id: 28
         }
      ],
      М: [
         {
            name: "Москва и область",
            id: 1
         },
         {
            name: "Мурманская область",
            id: 29
         }
      ],
      О: [
         {
            name: "Орловская область",
            id: 33
         },
      ],
      П: [
         {
            name: "Приморский край",
            id: 68
         },
         {
            name: "Псковская область",
            id: 39
         }
      ],
      Р: [
         {
            name: "Ростовская область",
            id: 42
         }
      ],
      С: [
         {
            name: "Самарская область",
            id: 65
         },
         {
            name: "Санкт-Петербург и область",
            id: 14
         }
      ],
      Т: [
         {
            name: "Тверская область",
            id: 47
         }
      ],
      Х: [
         {
            name: "Ханты-Мансийский АО",
            id: 57
         },
      ],
      Ч: [
         {
            name: "Чувашская Республика",
            id: 61
         },
      ],
      Я: [
         {
            name: "Ямало-Ненецкий АО",
            id: 63
         },
      ]
   }
   const topRegions = [
      {
         name: "Москва и область",
         id: 1
      },
      {
         name: "Санкт-Петербург и область",
         id: 14
      }
   ]


   const onHide = () => props.showModal( {
      modal: 'cities',
      bool: false
   } )

   async function clickHandler( e, region ) {
      e.preventDefault()
      const { id } = region
      try {
         const { data } = await getLocationData( id )
         const channelsResponses = await getChannels( tariffs )
         dispatch( setInitialStateTariffs( data ) )
         dispatch( setInitialChannels( channelsResponses ) )
         dispatch( setRegion( region ) )
         onHide()
      } catch ( err ) {
         console.error( err )
      }
   }


   return (
      <Modal
         centered
         animation={ false }
         className={ s.modal }
         dialogClassName={ s.modal_dialog }
         contentClassName={ s.modal_content }
         show={ show }
         onHide={ onHide }
      >
         <button
            type="button"
            className="modal-close"
            onClick={ onHide }
         />
         <div className={ s.wrapper }>
            <div className={ s.header }>
               <div className={ s.header__title }>Выбор региона</div>
            </div>

            <div className={ s.region }>
               <div className={ s.region__top }>
                  { topRegions.map( region =>
                     <div key={ region.id } className={ s.region__link_container }>
                        <a
                           onClick={ ( e ) => clickHandler( e, region ) }
                           className={ s.region__link }
                        >{ region.name }</a>
                     </div>
                  ) }
               </div>

               { Object.keys( regions ).map( group =>
                  <div key={ group } className={ s.region__group }>
                     <div className={ s.region__title }>{ group }</div>

                     { regions[group].map( ( region ) =>
                        <div key={ region.name } className={ s.region__link_container }>
                           <a
                              className={ s.region__link }
                              onClick={ ( e ) => clickHandler( e, region ) }
                           >{ region.name }</a>
                        </div>
                     ) }

                  </div>
               ) }

            </div>
         </div>
      </Modal>
   )
}


export default connect( state => ({
   show: state.modals.cities.show,
   tariffs: state.tariffs
}), {
   showModal
} )( ModalCity )