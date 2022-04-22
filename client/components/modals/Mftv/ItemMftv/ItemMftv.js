import s from './ItemMftv.module.sass'
import { wrapp } from '../../Tariff/ModalTariff.module.sass'
import { container } from '../../Tariff/BlockInfo/BlockInfo.module.sass'


function ItemMftv( { item } ) {

   return (
      <li className={ `${ s.container } ${ container } ${ wrapp }` }>

         <img
            src={ `/svg/mftv_${ item.icon }.svg` }
            className={ `${ s.logo } item-modal__logo_${ item.icon }` }
            height={ 40 }
            alt={ item.icon }
         />

         <p className={ s.desc }>{ item.desc }</p>

      </li>
   )

}


export default ItemMftv