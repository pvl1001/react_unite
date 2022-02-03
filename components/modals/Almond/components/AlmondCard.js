import {connect} from "react-redux";
import {showModal} from "../../../../redux/modals/modalsAction";

function almondCard(props) {
   const eqAlmond = props.almond.equipments[props.index]
   const classActive = () => eqAlmond?.checked ? ' active' : ''

   const showModalAbout = () =>
      props.showModal({modal: 'aboutAlmond', bool: true, props: {...props.card, index: props.index}})


   return (
      <div className={"modalAlmond__price-card card-price" + classActive()}
           onClick={showModalAbout}
      >
         <div className="card-price__img">
            <img src={require(`/assets/img/pic/${props.card.img}.webp`).default.src}
                 alt={props.card.img}/>
         </div>
         <div className="card-price__text">
            <p className="card-price__text-name">{props.card.name}</p>
            <div className="card-price__text-price">
               <p>{props.card.price} ₽ в месяц</p>
               <p className="card-price__cnt"><span>{eqAlmond?.cnt || 1}</span> шт.</p>
            </div>
         </div>
      </div>
   )
}


const mapDispatchToProps = {showModal}

export default connect(null, mapDispatchToProps)(almondCard)