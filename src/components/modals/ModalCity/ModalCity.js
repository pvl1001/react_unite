import {Modal} from "react-bootstrap";
import PropTypes from "prop-types";
import ModalEquipment from "../ModalEquipment/ModalEquipment";
import './ModalCity.scss'


ModalEquipment.propTypes = {
   status: PropTypes.object,
}

export default function ModalCity(props) {

   const cities = [
      {
         "alph": "A",
         "cities": [
            {
               "name": "Алтайский край",
               "link": "//www.megafon.ru/regions.action?rid=75"
            },
            {
               "name": "Амурская область",
               "link": "//www.megafon.ru/regions.action?rid=85"
            },
            {
               "name": "Архангельская область",
               "link": "//www.megafon.ru/regions.action?rid=11"
            },
            {
               "name": "Астраханская область",
               "link": "//www.megafon.ru/regions.action?rid=38"
            }
         ]
      },
      {
         "alph": "Б",
         "cities": [
            {
               "name": "Белгородская область",
               "link": "//www.megafon.ru/regions.action?rid=24"
            },
            {
               "name": "Брянская область",
               "link": "//www.megafon.ru/regions.action?rid=3"
            }
         ]
      },
      {
         "alph": "В",
         "cities": [
            {
               "name": "Владимирская область",
               "link": "//www.megafon.ru/regions.action?rid=4"
            },
            {
               "name": "Волгоградская область",
               "link": "//www.megafon.ru/regions.action?rid=39"
            },
            {
               "name": "Вологодская область",
               "link": "//www.megafon.ru/regions.action?rid=12"
            },
            {
               "name": "Воронежская область",
               "link": "//www.megafon.ru/regions.action?rid=25"
            }
         ]
      },
      {
         "alph": "Е",
         "cities": [
            {
               "name": "Еврейская автономная область",
               "link": "//www.megafon.ru/regions.action?rid=86"
            }
         ]
      },
      {
         "alph": "З",
         "cities": [
            {
               "name": "Забайкальский край",
               "link": "//www.megafon.ru/regions.action?rid=87"
            }
         ]
      },
      {
         "alph": "И",
         "cities": [
            {
               "name": "Ивановская область",
               "link": "//www.megafon.ru/regions.action?rid=13"
            },
            {
               "name": "Иркутская область",
               "link": "//www.megafon.ru/regions.action?rid=88"
            }
         ]
      },
      {
         "alph": "К",
         "cities": [
            {
               "name": "Калининградская область",
               "link": "//www.megafon.ru/regions.action?rid=14"
            },
            {
               "name": "Калужская область",
               "link": "//www.megafon.ru/regions.action?rid=5"
            },
            {
               "name": "Камчатский край",
               "link": "//www.megafon.ru/regions.action?rid=89"
            },
            {
               "name": "Кемеровская область",
               "link": "//www.megafon.ru/regions.action?rid=76"
            },
            {
               "name": "Кировская область",
               "link": "//www.megafon.ru/regions.action?rid=65"
            },
            {
               "name": "Костромская область",
               "link": "//www.megafon.ru/regions.action?rid=15"
            },
            {
               "name": "Краснодарский край",
               "link": "//www.megafon.ru/regions.action?rid=26"
            },
            {
               "name": "Красноярский край",
               "link": "//www.megafon.ru/regions.action?rid=77"
            },
            {
               "name": "Курганская область",
               "link": "//www.megafon.ru/regions.action?rid=66"
            },
            {
               "name": "Курская область",
               "link": "//www.megafon.ru/regions.action?rid=6"
            }
         ]
      },
      {
         "alph": "Л",
         "cities": [
            {
               "name": "Липецкая область",
               "link": "//www.megafon.ru/regions.action?rid=27"
            }
         ]
      },
      {
         "alph": "Н",
         "cities": [
            {
               "name": "Н.Новгород и область",
               "link": "//www.megafon.ru/regions.action?rid=7"
            },
            {
               "name": "Новгородская область",
               "link": "//www.megafon.ru/regions.action?rid=17"
            },
            {
               "name": "Новосибирская область",
               "link": "//www.megafon.ru/regions.action?rid=78"
            },
            {
               "name": "Норильск и Таймырский МР",
               "link": "//www.megafon.ru/regions.action?rid=83"
            }
         ]
      },
      {
         "alph": "О",
         "cities": [
            {
               "name": "Омская область",
               "link": "//www.megafon.ru/regions.action?rid=79"
            },
            {
               "name": "Оренбургская область",
               "link": "//www.megafon.ru/regions.action?rid=40"
            },
            {
               "name": "Орловская область",
               "link": "//www.megafon.ru/regions.action?rid=8"
            }
         ]
      },
      {
         "alph": "П",
         "cities": [
            {
               "name": "Пензенская область",
               "link": "//www.megafon.ru/regions.action?rid=41"
            },
            {
               "name": "Пермский край",
               "link": "//www.megafon.ru/regions.action?rid=67"
            },
            {
               "name": "Приморский край",
               "link": "//www.megafon.ru/regions.action?rid=91"
            },
            {
               "name": "Псковская область",
               "link": "//www.megafon.ru/regions.action?rid=19"
            }
         ]
      },
      {
         "alph": "Р",
         "cities": [
            {
               "name": "Республика Адыгея",
               "link": "//www.megafon.ru/regions.action?rid=28"
            },
            {
               "name": "Республика Алтай",
               "link": "//www.megafon.ru/regions.action?rid=80"
            },
            {
               "name": "Республика Башкортостан",
               "link": "//www.megafon.ru/regions.action?rid=42"
            },
            {
               "name": "Республика Бурятия",
               "link": "//www.megafon.ru/regions.action?rid=92"
            },
            {
               "name": "Республика Дагестан",
               "link": "//www.megafon.ru/regions.action?rid=29"
            },
            {
               "name": "Республика Ингушетия",
               "link": "//www.megafon.ru/regions.action?rid=30"
            },
            {
               "name": "Республика Кабардино-Балкария",
               "link": "//www.megafon.ru/regions.action?rid=31"
            },
            {
               "name": "Республика Калмыкия",
               "link": "//www.megafon.ru/regions.action?rid=43"
            },
            {
               "name": "Республика Карачаево-Черкесия",
               "link": "//www.megafon.ru/regions.action?rid=32"
            },
            {
               "name": "Республика Карелия",
               "link": "//www.megafon.ru/regions.action?rid=18"
            },
            {
               "name": "Республика Коми",
               "link": "//www.megafon.ru/regions.action?rid=68"
            },
            {
               "name": "Республика Марий Эл",
               "link": "//www.megafon.ru/regions.action?rid=44"
            },
            {
               "name": "Республика Мордовия",
               "link": "//www.megafon.ru/regions.action?rid=45"
            },
            {
               "name": "Республика Саха (Якутия)",
               "link": "//www.megafon.ru/regions.action?rid=93"
            },
            {
               "name": "Республика Северная Осетия",
               "link": "//www.megafon.ru/regions.action?rid=33"
            },
            {
               "name": "Республика Татарстан",
               "link": "//www.megafon.ru/regions.action?rid=46"
            },
            {
               "name": "Республика Тыва",
               "link": "//www.megafon.ru/regions.action?rid=81"
            },
            {
               "name": "Республика Хакасия",
               "link": "//www.megafon.ru/regions.action?rid=82"
            },
            {
               "name": "Ростовская область",
               "link": "//www.megafon.ru/regions.action?rid=34"
            },
            {
               "name": "Рязанская область",
               "link": "//www.megafon.ru/regions.action?rid=9"
            }
         ]
      },
      {
         "alph": "С",
         "cities": [
            {
               "name": "Самарская область",
               "link": "//www.megafon.ru/regions.action?rid=47"
            },
            {
               "name": "Санкт-Петербург и область",
               "link": "//www.megafon.ru/regions.action?rid=20"
            },
            {
               "name": "Саратовская область",
               "link": "//www.megafon.ru/regions.action?rid=48"
            },
            {
               "name": "Сахалинская область",
               "link": "//www.megafon.ru/regions.action?rid=94"
            },
            {
               "name": "Свердловская область",
               "link": "//www.megafon.ru/regions.action?rid=69"
            },
            {
               "name": "Смоленская область",
               "link": "//www.megafon.ru/regions.action?rid=21"
            },
            {
               "name": "Ставропольский край",
               "link": "//www.megafon.ru/regions.action?rid=35"
            }
         ]
      },
      {
         "alph": "Т",
         "cities": [
            {
               "name": "Тамбовская область",
               "link": "//www.megafon.ru/regions.action?rid=36"
            },
            {
               "name": "Тверская область",
               "link": "//www.megafon.ru/regions.action?rid=22"
            },
            {
               "name": "Томская область",
               "link": "//www.megafon.ru/regions.action?rid=84"
            },
            {
               "name": "Тульская область",
               "link": "///www.megafon.ru/regions.action?rid=10"
            },
            {
               "name": "Тюменская область",
               "link": "//www.megafon.ru/regions.action?rid=70"
            }
         ]
      },
      {
         "alph": "У",
         "cities": [
            {
               "name": "Удмуртская Республика",
               "link": "//www.megafon.ru/regions.action?rid=71"
            },
            {
               "name": "Ульяновская область",
               "link": "//www.megafon.ru/regions.action?rid=49"
            }
         ]
      },
      {
         "alph": "Х",
         "cities": [
            {
               "name": "Хабаровский край",
               "link": "//www.megafon.ru/regions.action?rid=95"
            },
            {
               "name": "Ханты-Мансийский АО",
               "link": "//www.megafon.ru/regions.action?rid=72"
            }
         ]
      },
      {
         "alph": "Ч",
         "cities": [
            {
               "name": "Челябинская область",
               "link": "//www.megafon.ru/regions.action?rid=73"
            },
            {
               "name": "Чеченская Республика",
               "link": "//www.megafon.ru/regions.action?rid=37"
            },
            {
               "name": "Чувашская Республика",
               "link": "//www.megafon.ru/regions.action?rid=64"
            },
            {
               "name": "Чукотский АО",
               "link": "//www.megafon.ru/regions.action?rid=96"
            }
         ]
      },
      {
         "alph": "Я",
         "cities": [
            {
               "name": "Ямало-Ненецкий АО",
               "link": "//www.megafon.ru/regions.action?rid=74"
            },
            {
               "name": "Ярославская область",
               "link": "//www.megafon.ru/regions.action?rid=23"
            }
         ]
      }
   ]

   const handleHide = () => props.status.setStatusModalCity( false )


   return (
      <Modal centered
             animation={false}
             className="city-selection"
             show={props.status.statusModalCity}
             onHide={handleHide}
      >
         <Modal.Body>
            <button type="button" className="modal-close" onClick={handleHide}/>
            <div className="city-selection-wrapper">
               <div className="city-selection__header header-city">
                  <div className="header-city__title">Выбор региона</div>
                  <input type="text" placeholder="Поиск региона"/>
                  <div className="header-city__auto">
                     Автоопределение местоположения: <span>Москва и область</span>
                  </div>
               </div>

               <div className="city-selection__body select-region">
                  <div className="select-region__top">
                     <a href="#">Москва и область</a>
                     <a href="#">Санкт-Петербург и область</a>
                  </div>

                  {cities.map( el => (
                     <div key={el.alph} className="select-region__regions-group">
                        <div className="select-region__region-title">{el.alph}</div>
                        {el.cities.map( city => (
                           <div key={city.name} className="select-region__region">
                              <a className="select-region__link" href={city.link}>{city.name}</a>
                           </div>
                        ) )}
                     </div>
                  ) )}

               </div>
            </div>
         </Modal.Body>
      </Modal>
   )
}