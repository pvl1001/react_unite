export default function ModalTariffFooter(props) {
   return (
      <div className="tariff-modal__footer wrapp">
         <div className="tariff-modal__price price">

            {props.tariff.oldPrice &&
               <span className="price__old">{props.tariff.oldPrice} ₽</span>}

            <span className="price__current">{props.tariff.totalPrice}</span>

            <span className="price__month"> ₽ в месяц</span>

            {/*{props.tariff.iconInfo &&*/}
            {/*   <div className="price__icon price__icon_all" aria-expanded="false"/>}*/}
         </div>

         <button type="button"
                 className="tariff-modal__price-btn btn"
                 onClick={() => props.showModal( {modal: 'order', bool: true} )}
         >Заказать
         </button>

         <p className="tariff-modal__price-desc"
            style={{visibility: props.tariff.equipments.find( eq => eq.switch ) ? 'visible' : 'hidden'}}>
            с учетом выбранных опций</p>
      </div>
   )
}