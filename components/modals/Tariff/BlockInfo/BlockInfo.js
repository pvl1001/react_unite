import s from './BlockInfo.module.sass'
import { wrapp } from '../ModalTariff.module.sass'
import ItemInfo from "./ItemInfo/ItemInfo";


function BlockInfo( { info, tariff } ) {

   return (
      <li className={ `${ s.container } ${ wrapp }` }>
         <div className={ s.title }>

            <div className={ s.title__icon }>
               <img src={ `/svg/${ info.icon }.svg` } alt={ info.icon }/>
            </div>

            <h2>{ info.title }</h2>

         </div>

         <ul>
            { info.options.map( option =>
                  option && <ItemInfo
                     key={ option.name }
                     option={ option }
                     tariff={ tariff }
                  />
            ) }
         </ul>

      </li>
   )
}


export default BlockInfo