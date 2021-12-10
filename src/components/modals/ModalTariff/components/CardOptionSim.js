export default function CardOptionSim(props) {
   return (
      <li key={props.equipment.id}
          className="tariff-modal__dop-options-card dop-options-card">
         <div className="dop-options-card__sim">
            <p>SIM-карта с тарифом
               <span data-toggle="modal" data-target="#tariff-all"> «Без переплат. Всё»</span> Скидка 40% на абонентскую плату
            </p>
            <div className="tariff-modal__counter counter">
               <div className="counter__minus">&minus;</div>
               <input type="text" readOnly value="1"/>
               <div className="counter__plus">+</div>
            </div>
         </div>

         <div className="dop-options-card__price">
            <div className="price">
               <span className="price__old">
                  {props.equipment.oldPrice} ₽
               </span>
               <span className="price__current">
                  {props.equipment.price}
               </span> <span> ₽</span>
               <span className="price__month"> в месяц</span>
            </div>

            <label className="switch">
               <input type="checkbox" data-equip-name="SIM"/>
               <span className="round"/>
            </label>
         </div>

      </li>
   )
}