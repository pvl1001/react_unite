import s from './ItemInfo.module.sass'


function ItemInfo( { option, tariff } ) {

   return (
      <li className={ s.container }>

         <div className={ s.text }>
            <p className={ s.text__name }>
               { option.name }
            </p>

            { option.description &&
               <p
                  className={ s.text__desc }
                  dangerouslySetInnerHTML={ { __html: option.description } }
               />
            }
         </div>

         <p className={ s.value }>
            { option.value }
            { (option.name === 'Мегафон ТВ' && tariff.mftv) &&
               tariff.mftv.map( el => <span key={ el.name }>, <br/> { el.name }</span> )
            }
         </p>

      </li>
   )
}

export default ItemInfo
