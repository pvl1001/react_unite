import success from "../../../img/svg/success.svg";

function Success(props) {
   return (
      <div className="success-check">
         <img src={success} alt="success"/>
         <p>Подключение по адресу <b>{props.address}</b> Возможно!</p>
         <span className="link" onClick={props.resultNull}>Изменить адрес</span>
         <button className="btn" onClick={props.showModalOrder}
         >Отправить заявку
         </button>
      </div>
   )
}

export default Success