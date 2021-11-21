import * as PropTypes from "prop-types";
import ModalOrder from "../../modals/Order/ModalOrder";
import {useState} from "react";

export default function EqCard(props) {

   const [statusModalOrder, setStatusModalOrder] = useState(false)

   const styleMark = (mark) => mark === 'ГОД СЕРИАЛОВ В ПОДАРОК' && "var(--mf-orange)"


   return (
      <div className="slider__card equipments-card card">

         {props.eq.mark && (
            <div className="equipments-card__mark mark"
                 style={{backgroundColor: styleMark(props.eq.mark)}}
            >
               <span>{props.eq.mark}</span>
            </div>
         )}

         <div className="equipments-card__info info-card">

            <div className="info-card__img">
               <img src={props.eq.img} alt={props.eq.img}/>
            </div>
            <h2 className="info-card__title">{props.eq.name}</h2>
            <p className="info-card__text">{props.eq.text}</p>
         </div>

         <div className="equipments-card__price price-card">
            <div className="price">
               {props.eq.oldPrice && <span className="old-price"/>}

               <span className="new-price">
                              {
                                 props.eq.plan
                                    ? <>от {props.eq.plan.plan_36}</>
                                    : <>{props.eq.price}</>
                              }
                           </span><span className="always">₽</span>

               <span>в месяц</span>
            </div>
            <button className="price-card__btn btn" onClick={() => setStatusModalOrder(true)}>Заказать</button>

            {props.eq.id === "eq-almond"
               ? <div className="link almond">Подробнее</div>
               : <div className="link">Подробнее</div>
            }

         </div>

         <ModalOrder status={{statusModalOrder, setStatusModalOrder}} />
      </div>
   )
}

EqCard.propTypes = {
   eq: PropTypes.object,
}