function Success(props) {

   const eventLabel = {
      order: `click_button_order_address_success`,
      send: `click_button_send_address_success`
   }


   return (
      <div className="success-check">
         <img src={'/svg/success.svg'} alt="success"/>

         <p>Подключение по адресу <b>{props.address}</b> Возможно!</p>

         <span className="link" onClick={props.resultNull}>Изменить адрес</span>

         <button
            className="btn"
            onClick={() => props.showModalOrder(eventLabel)}>
            Отправить заявку
         </button>
      </div>
   )
}

export default Success