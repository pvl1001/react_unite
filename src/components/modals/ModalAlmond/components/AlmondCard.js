import {connect} from "react-redux";
import showModal from "../../../../redux/actions/showModal";

function almondCard(props) {
   const classActive = () => props.data.checked ? ' active' : ''

   const showModalAbout = () => props.showModal({modal: 'aboutAlmond', bool: true, props: props.card})
   return (
      <div className={"modalAlmond__price-card card-price" + classActive()}
           onClick={showModalAbout}
      >
         <div className="card-price__img">
            <img src={require(`../../../../img/pic/${props.card.img}.webp`).default}
                 alt={props.card.img}/>
         </div>
         <div className="card-price__text">
            <p className="card-price__text-name">{props.card.name}</p>
            <div className="card-price__text-price">
               <p>{props.card.price} ₽ в месяц</p>
               <p className="card-price__cnt"><span>{props.data.cnt || 1}</span> шт.</p>
            </div>
         </div>
      </div>
   )
}


const mapDispatchToProps = {showModal}

export default connect(null, mapDispatchToProps)(almondCard)