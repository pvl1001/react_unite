export default function BlockInfo(props) {
   return (
      <li className="tariff-modal__item item-modal wrapp">
         <div className="item-modal__title">
            <div className="item-modal__title-icon">
               <img src={require( `/assets/img/svg/${props.info.icon}.svg` ).default.src} alt={props.info.icon}/>
            </div>
            <h2>{props.info.title}</h2>
         </div>

         <ul className="item-modal__options">
            {props.info.options.map( option =>
               <li key={option.name} className="item-modal__option option-item">
                  <div className="option-item__text">
                     <p className="option-item__text-name">
                        {option.name}
                     </p>
                     {option.description &&
                        <p className="option-item__text-desc"
                           dangerouslySetInnerHTML={{__html: option.description}}/>
                     }
                  </div>
                  <p className="option-item__value">
                     {option.value}
                     {(option.name === 'Мегафон ТВ' && props.tariff.mftv) &&
                        props.tariff.mftv.map( el => <span key={el.name}>, <br/> {el.name}</span> )
                     }
                  </p>
               </li>
            )}
         </ul>
      </li>
   )
}