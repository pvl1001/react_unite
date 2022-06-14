import { connect, useSelector } from 'react-redux'
import { showModal } from "../../redux/slices/modalsSlice";
import { setDataOrder } from "../../redux/slices/orderSlice";
import { useRouter } from 'next/router';


function Header( { style, ...props } ) {
   const router = useRouter()
   const pageName = useSelector( state => state.page.name )
   
   const data = useSelector( state => state.page.header )
   const tariff = useSelector( state => state.tariffs.their )

   function showModalOrder() {
      props.showModal( {
         modal: 'order',
         bool: true
      } )
      props.setDataOrder( {
         tariffName: `${ pageName } ${ tariff.name }`,
         tariffId: tariff.tariffId,
         eventLabel: {
            order: `click_button_connect_${ tariff.dataView }`,
            send: `click_button_connect_send_${ tariff.dataView }`
         }
      } )
   }

   function showModalTariff() {
      props.showModal( {
         modal: 'tariff',
         bool: true,
         props: tariff.id
      } )
      // analyticsEvent( `click_button_connect_details_${ tariff.dataView }` )
   }


   return (
      <header className={ style.container }>
         <div className={ style.wrapper + ' wrapper' }>
            <div className={ style.row }>
               <div className={ style.text }>
                  <h1>{ data.title }
                     <nobr>{ data.titleBr }</nobr>
                  </h1>

                  <p>{ data.desc }</p>

                  <div className={ style.btns }>
                     <button
                        type="button"
                        onClick={ showModalOrder }
                        className={ `${ style.btn } btn btn-fiolet` }
                        data-view="first_banner">
                        Подключить
                     </button>

                     { router.route === '/' &&
                        <span
                           className={ style.about }
                           onClick={ showModalTariff }>
                           Подробнее
                        </span>
                     }
                  </div>
               </div>

               <picture className={ style.img_container }>
                  <source srcSet={ data.img.mobile } media="(max-width: 767px)"/>
                  <img className={ style.img } src={ data.img.desktop } alt="главный баннер"/>
               </picture>
            </div>
         </div>
      </header>
   )
}


export default connect( null, {
   showModal,
   setDataOrder
} )( Header )