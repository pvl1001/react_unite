import s from './NewCard.module.scss';
import React from "react";


function NewCard( { tariff, id } ) {

   // const router = useRouter()
   // const dispatch = useDispatch()
   // const tmplIconInfo = iconInfo( tariff.id, tariff.iconInfo )
   // const premiumClass = tariff.id === 'premium' ? s[tariff.id] : ''

   // function openOrder() {
   //    dispatch( showModal( {
   //       modal: 'order',
   //       bool: true
   //    } ) )
   //    dispatch( setDataOrder( {
   //       tariffName: `${ pageName } ${ tariff.name }`,
   //       tariffId: tariff.tariffId,
   //       price: tariff.price,
   //       eventLabel: {
   //          order: `click_button_order_${ tariff.dataView }`,
   //          send: `click_button_send_${ tariff.dataView }`
   //       }
   //    } ) )
   // }

   // function showModalTariff() {
   //    if ( tariff.id === 'vse' ) {
   //       return router.push( '/internetvse' )
   //    }
   //    dispatch( showModal( {
   //       modal: 'tariff',
   //       bool: true,
   //       props: tariff.id
   //    } ) )
   //    analyticsEvent( `click_button_details_${ tariff.dataView }` )
   // }

   // function collapseGroup() {
   //    collapse.setCollapseGroup( !collapse.collapseGroup )
   // }

   // function handleCollapseChannels() {
   //    if ( !premium.channels ) {
   //       const allTvId = Array.from( new Set(
   {/*         [*/}
   //             ...tariffs.filter( tariff => tariff.tvId ).map( tariff => tariff.tvId )
   //          ] ) )
   //       const allPromise = []
   //       allTvId.forEach( ( id ) => allPromise.push( dispatch( getChannels( id ) ) ) )
   //       return Promise.all( allPromise ).then( collapseGroup )
   //    }
   //
   //    collapseGroup()
   // }


   return (
      <div className={ s.container + ' card' } id={ 'tariff-card-' + id }>

         <div className={ s.header }>

            {/*<div className={ s.sale_banner }>Скидка<br/>навсегда!</div>*/ }
            <div className={ s.tariff_icon }>
               <img src={ `/svg/tariff_${ id }.svg` } alt={ `${ id }_icon` }/>
            </div>

            <div className={ s.title }>
               <h5 className={ s.tariff_name }>{ tariff.name }</h5>
            </div>

            <div className={ s.price }>
               <span className={ s.old_price }>{ tariff.price } ₽</span> <span>
                  <span className={ s.new_price }>{ Math.ceil( tariff.price * 0.5 ) } ₽</span>
                  <span>/месяц</span>
               </span>
            </div>

         </div>

         <ul className={ s.params }>
            <li className={ s.params__item }>
               <p className={ s.params__key }>Мобильный интернет</p>
               <p className={ s.params__value }>
                  { tariff.inet ? `${ tariff.inet } ГБ` : '—' }
               </p>
            </li>
            <li className={ s.params__item }>
               <p className={ s.params__key }>Звонки</p>
               <p className={ s.params__value }>
                  { tariff.minutes ? `${ tariff.minutes } минут` : '—' }
               </p>
            </li>
            <li className={ s.params__item }>
               <p className={ s.params__key }>Домашний интернет</p>
               <p className={ s.params__value }>
                  { tariff.speed ? `${ tariff.speed } Мбит/с` : '—' }
               </p>
            </li>
            <li className={ s.params__item }>
               <p className={ s.params__key }>ТВ</p>
               <p className={ s.params__value }>
                  { tariff.tvchan != 0
                     ? <span className={ s.params__tv }>{ tariff.tvchan } каналов</span>
                     : '—' }
               </p>
            </li>
         </ul>

         { tariff.dop_params || tariff.mftv &&
            <div className={ s.dop_params }>
               <h5 className={ `${ s.dop_params__title } ${ s.params__key }` }>дополнительно</h5>

               { tariff.dop_params &&
                  <ul>
                     { tariff.dop_params.map( dp =>
                        <li key={ dp } className={ s.dop_params__item }>
                           <div className={ s.dop_params__icon }>
                              <img src="./img/svg/Plus.svg" alt="иконка плюс"/>
                           </div>
                           <p>{ dp }</p>
                        </li>
                     ) }
                  </ul>
               }

               { tariff.mftv &&
                  <ul className={ s.dop_params_mftv }>
                     { tariff.mftv.map( m =>
                        <li key={ m.icon } className={ s.dop_params_mftv__item }>
                           <img src={ `/svg/mftv_block_${ m.icon }.svg` } alt={ `иконка ${ m.icon }` }/>
                        </li>
                     ) }
                  </ul>
               }}
            </div>
         }
      </div>
   )
}


export default NewCard