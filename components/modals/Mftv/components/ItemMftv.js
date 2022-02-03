function ItemMftv(props) {

   return (
      <li className="tariff-modal__item item-modal wrapp">

         <img
            src={require(`/assets/img/svg/mftv_${props.item.icon}.svg`).default.src}
            className={`item-modal__logo item-modal__logo_${props.item.icon}`}
            height={40}
            alt={props.item.icon}
         />

         <p className="item-modal__desc">{props.item.desc}</p>

      </li>
   )

}

export default ItemMftv