import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import showModal from "../../../redux/actions/showModal";


EqCard.propTypes = {
   eq: PropTypes.object,
}


function EqCard(props) {

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
               <img src={require( `../../../img/pic/${props.eq.img}.webp`).default} alt={props.eq.name}/>
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
                                    ? <>от {props.eq.plan[0].value}</>
                                    : <>{props.eq.price}</>
                              }
                           </span><span className="always">₽</span>

               <span>в месяц</span>
            </div>
            <button className="price-card__btn btn" onClick={() => props.showModal({modal: 'order', bool: true})}>Заказать</button>

            {props.eq.id === "eq-almond"
               ? <div className="link almond">Подробнее</div>
               : <div className="link" onClick={() => props.showModal({modal: 'equipment', bool: true, props: props.eq})}>Подробнее</div>
            }

         </div>

      </div>
   )
}

const mapDispatchToProps = {
   showModal
}

export default connect(null, mapDispatchToProps)(EqCard)
