import s from './OrderTabs.module.scss'


function OrderTabs( props ) {
   const { setActiveTab } = props

   const tabs = [ 'Себе', 'Другу' ]

   return (
      <ul className={ s._ }>
         { tabs.map( ( tab, i ) =>
            <li key={ tab } className={ s.item }>
               <input
                  type="radio"
                  name={ 'order-tabs' }
                  defaultChecked={ i === 0 }
                  value={ tab }
                  id={ tab }
                  onChange={ e => {
                     setActiveTab( e.target.value )
                  } }
               />
               <label htmlFor={ tab }>{ tab }</label>
            </li>
         ) }
      </ul>
   )
}

export default OrderTabs