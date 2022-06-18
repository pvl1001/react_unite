import s from './Tabs.module.scss';
import { useState } from "react";
import AllIcon from '../../public/svg/tabs_all.svg'
import UniteIcon from '../../public/svg/tabs_unite.svg'
import ForHomeIcon from '../../public/svg/tabs_forhome.svg'


function Tabs( { tariffFilter } ) {
   const [ tabs, setTabs ] = useState( {
      'Все': {
         name: 'Все тарифы',
         icon: <AllIcon/>,
         active: true
      },
      'Объединяй!': {
         name: 'Домашний интернет, мобильная связь + ТВ',
         icon: <UniteIcon/>
      },
      '#ДляДома': {
         name: 'Домашний интернет + ТВ',
         icon: <ForHomeIcon/>
      }
   } )

   function clickHandler( key ) {
      const newTabs = { ...tabs }
      for ( const k in tabs ) {
         key === k
            ? tabs[k].active = true
            : tabs[k].active = false
      }
      setTabs( newTabs )
      tariffFilter( key )
   }

   function activeClass( active ) {
      return active ? `${ s.item } ${ s.active }` : s.item
   }


   return (
      <div className={ s._ }>
         <ul className={ s.container }>
            { Object.keys( tabs ).map( key =>
               <li className={ activeClass( tabs[key].active ) }
                   key={ key }
                   onClick={ () => clickHandler( key ) }
               >
                  { tabs[key].icon }
                  { tabs[key].name }
               </li>
            ) }
         </ul>
      </div>
   )
}


export default Tabs;