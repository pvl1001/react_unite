import s from "../Tariff/BlockInfo/ItemInfo/ItemInfo.module.sass";


function ItemOption( { option } ) {

   return (
      <li className={ s.container }>

         <div className={ s.text }>
            <p className={ s.text__name }>
               { option.name }
            </p>

            { option.description &&
               <p className={ s.text__desc }>
                  { option.description }</p>
            }
         </div>

         <p className={ s.value }>
            { option.value }
         </p>

      </li>
   )

}


export default ItemOption
