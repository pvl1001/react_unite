import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { showModal } from "../../../redux/slices/modalsSlice";
import s from './ModalCity.module.sass';
import { useRouter } from 'next/router';


function ModalCity( props ) {
   const { route } = useRouter()
   const cities = {
      "А": [
         {
            "name": "Астрахань",
            "link": "https://astrakhan.home.megafon.ru"
         },
      ],
      "Б": [
         {
            "name": "Балашиха",
            "link": "https://balashiha.home.megafon.ru"
         },
         {
            "name": "Белая Калитва",
            "link": "https://kalitva.home.megafon.ru"
         },
         {
            "name": "Белгород",
            "link": "https://bel.home.megafon.ru"
         },
         {
            "name": "Белоярский",
            "link": "https://beloyarsky.home.megafon.ru"
         }
      ],
      "В": [
         {
            "name": "Волгодонск",
            "link": "https://volgodonsk.home.megafon.ru"
         },
         {
            "name": "Воронеж",
            "link": "https://vrn.home.megafon.ru"
         },
      ],
      "Д": [
         {
            "name": "Дмитров",
            "link": "https://dmitrov.home.megafon.ru"
         },
         {
            "name": "Дубна",
            "link": "https://dubna.home.megafon.ru"
         }
      ],
      "Ж": [
         {
            "name": "Железнодорожный",
            "link": "https://zheldor.home.megafon.ru"
         },
      ],
      "З": [
         {
            "name": "Зеленоград",
            "link": "https://zelenograd.home.megafon.ru"
         },
      ],
      "К": [
         {
            "name": "Калининград",
            "link": "https://kaliningrad.home.megafon.ru"
         },
         {
            "name": "Клин",
            "link": "https://klin.home.megafon.ru"
         },
         {
            "name": "Королев",
            "link": "https://korolev.home.megafon.ru"
         },
         {
            "name": "Курск",
            "link": "https://ks.home.megafon.ru"
         },
         {
            "name": "Курчатов",
            "link": "https://kurchatov.home.megafon.ru"
         },
      ],
      "Л": [
         {
            "name": "Лангепас",
            "link": "https://langepas.home.megafon.ru"
         },
         {
            "name": "Липецк",
            "link": "https://lc.home.megafon.ru"
         },
         {
            "name": "Лобня",
            "link": "https://lobnya.home.megafon.ru"
         },
         {
            "name": "Люберцы",
            "link": "https://lyubercy.home.megafon.ru"
         },
      ],
      "М": [
         {
            "name": "Мурманск",
            "link": "https://murmansk.home.megafon.ru"
         },
         {
            "name": "Москва и область",
            "link": "https://moscow.home.megafon.ru"
         },
         {
            "name": "Мценск",
            "link": "https://mtsensk.home.megafon.ru"
         },
      ],
      "Н": [
         {
            "name": "Находка",
            "link": "https://nht.home.megafon.ru"
         },
         {
            "name": "Нефтеюганск",
            "link": "https://nefteyugansk.home.megafon.ru"
         },
         {
            "name": "Новосибирск",
            "link": "https://nsk.home.megafon.ruvezde"
         },
         {
            "name": "Новочебоксарск",
            "link": "https://cheb.home.megafon.ru"
         },
         {
            "name": "Новый Уренгой",
            "link": "https://n-urengoy.home.megafon.ru"
         },
         {
            "name": "Нягань",
            "link": "https://nyagan.home.megafon.ru"
         },
      ],
      "О": [
         {
            "name": "Орел",
            "link": "https://orl.home.megafon.ru"
         },
      ],
      "П": [
         {
            "name": "Пойковский",
            "link": "https://poykovsky.home.megafon.ru"
         },
         {
            "name": "Приморский край",
            "link": "https://prim.home.megafon.ru"
         },
         {
            "name": "Псков",
            "link": "https://pskov.home.megafon.ru"
         },
      ],
      "Р": [
         {
            "name": "Раменское",
            "link": "https://ramensk.home.megafon.ru"
         },
         {
            "name": "Ростов-на-Дону",
            "link": "https://rostov.home.megafon.ru"
         },
      ],
      "С": [
         {
            "name": "Самара",
            "link": "https://samara.home.megafon.ru"
         },
         {
            "name": "Североморск",
            "link": "https://murmansk.home.megafon.ru"
         },
         {
            "name": "Серпухов",
            "link": "https://serpuhov.home.megafon.ru"
         },
         {
            "name": "Советский",
            "link": "https://sovetsky.home.megafon.ru"
         },
         {
            "name": "Солнечногорск",
            "link": "https://moscow.home.megafon.ru"
         },
         {
            "name": "Сочи",
            "link": "https://sochi.home.megafon.ru"
         },
         {
            "name": "Старый Оскол",
            "link": "https://osk.home.megafon.ru"
         },
         {
            "name": "Сургут",
            "link": "https://surgut.home.megafon.ru"
         },
      ],
      "Т": [
         {
            "name": "Тверь",
            "link": "https://tver.home.megafon.ru"
         },
         {
            "name": "Тихвин",
            "link": "https://tikhvin.home.megafon.ru"
         },
      ],
      "У": [
         {
            "name": "Ульяновск", //!
            "link": "https://ulyanovsk.home.megafon.ru"
         },
      ],
      "Х": [
         {
            "name": "Ханты-Мансийск",
            "link": "https://khanty-mansiysk.home.megafon.ru"
         },
      ],
      "Ч": [
         {
            "name": "Чебоксары",
            "link": "https://cheb.home.megafon.ru"
         },
      ],
      "Ш": [
         {
            "name": "Шумерля",
            "link": "https://shumerlya.home.megafon.ru"
         },
      ],
      "Ю": [
         {
            "name": "Югорск",
            "link": "https://yugorsk.home.megafon.ru"
         },
      ],
   }

   const onHide = () => props.showModal( {
      modal: 'cities',
      bool: false
   } )


   return (
      <Modal
         centered
         animation={ false }
         className={ s.modal }
         dialogClassName={ s.modal_dialog }
         contentClassName={ s.modal_content }
         show={ props.show }
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
                  <div className={ s.region__link_container }>
                     <a
                        href={ "https://moscow.home.megafon.ru" + route }
                        className={ s.region__link }>
                        Москва и область
                     </a>
                  </div>
                  <div className={ s.region__link_container }>
                     <a
                        href={ "https://spb.home.megafon.ru" + route }
                        className={ s.region__link }>
                        Санкт-Петербург и область
                     </a>
                  </div>
               </div>

               { Object.keys( cities ).map( group =>
                  <div key={ group } className={ s.region__group }>
                     <div className={ s.region__title }>{ group }</div>

                     { cities[group].map( ( city ) =>
                        <div key={ city.name } className={ s.region__link_container }>
                           <a
                              href={ city.link + route }
                              className={ s.region__link }>
                              { city.name }
                           </a>
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
   show: state.modals.cities.show
}), {
   showModal
} )( ModalCity )