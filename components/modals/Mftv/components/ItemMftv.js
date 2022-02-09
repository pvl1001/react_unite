function ItemMftv(props) {

   return (
      <li className="tariff-modal__item item-modal wrapp">

         <img
            src={`/svg/mftv_${props.item.icon}.svg`}
            className={`item-modal__logo item-modal__logo_${props.item.icon}`}
            height={40}
            alt={props.item.icon}
         />

         <p className="item-modal__desc">{props.item.desc}</p>

      </li>
   )

}

export default ItemMftv