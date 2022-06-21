import s from './CheckAddress.module.scss'
import $ from "jquery";
import AddressForm from "./AddressForm/AddressForm";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { showModal } from "../../redux/slices/modalsSlice";
import { api } from "../../api/api";
import { onUniteSwitch } from "../../redux/slices/tariffVezdeSlice";
import { setDataOrder } from "../../redux/slices/orderSlice";
import { useRouter } from 'next/router'
import Image from "next/image";
import OrderForm from "./OrderForm/OrderForm";


function CheckAddress( props ) {
   const router = useRouter()
   useEffect( () => {
      window.autocomplete = require( '../../plugins/jquery.autocomplete' )

      $( inputAddress ).autocomplete( {
         width: 'auto',
         maxHeight: window.innerWidth > 767 ? 417 : 337,
         minChars: 1,
         deferRequestBy: 200,
         serviceUrl: 'https://api.wifire.ru/api/address/check_address_dadata',
         type: 'POST',

         onSelect( suggestion ) {
            setIsShowLabel( false )

            setAddress( {
               house_guid: suggestion.data.aoguid,
               address: suggestion.data.address
            } )
         }
      } )

      props.onUniteSwitch( true )
   }, [] )

   const inputAddress = '#addressCheck'
   const textLabelCheck = 'Выберите адрес дома из выпадающего списка!'
   const textLabelError = 'Сервис временно не доступен'
   const [ addressValue, setAddressValue ] = useState( '' )
   const [ address, setAddress ] = useState( {} )
   const [ formLabel, setFormLabel ] = useState( textLabelCheck )
   const [ result, setResult ] = useState( null )
   const [ isShowLabel, setIsShowLabel ] = useState( false )
   const [ isLoading, setIsLoading ] = useState( false )
   const container = router.route === '/internetvse'
      ? s.container_vse
      : s.container

   function clearInput() {
      $( inputAddress ).val( '' )
      setAddressValue('')
   }

   function resultNull() {
      setResult( null )
      setAddress( {} )
      clearInput()
   }

   async function submit( e ) {
      e.preventDefault()
      // analyticsEvent( 'click_button_address' )

      if ( address.house_guid ) {
         props.setDataOrder( {
            clientAddress: address.address,
            house_guid: address.house_guid
         } )
         try {
            // debugger
            setIsLoading( true )
            const data = await api( 'https://api.wifire.ru/api/address/check_dadata_address', address )
            setIsLoading( false )
            setFormLabel( textLabelCheck )
            setResultHandler( data.result, address.address )
            return
         } catch ( err ) {
            setIsLoading( false )
            setFormLabel( textLabelError )
         }

      }

      setIsShowLabel( true )
   }

   // const eventLabelDefault = {
   //    order: `click_button_order_${ props.tariff.id }_ntv`,
   //    send: `click_button_send_${ props.tariff.id }_ntv`
   // }

   // function showModalOrder( eventLabel = eventLabelDefault ) {
   //    props.showModal( {
   //       modal: 'order',
   //       bool: true
   //    } )
   //    props.setDataOrder( {
   //       tariffName: `${ props.pageName } ${ props.tariff.name }`,
   //       tariffId: props.tariff.tariffId,
   //       equipments: props.tariff.equipments,
   //       eventLabel: eventLabel
   //    } )
   // }

   function setResultHandler( result, address ) {
      if ( result === 1 ) {
         setResult( {
            result,
            text: {
               title: 'Ура! Есть контакт',
               icon: 'smile_success',
               description: `По адресу <span>${ address }</span> можно подключить интернет.`,
               label: `Оставь заявку на подключение`
            }
         } )
      }
      if ( result === 0 ) {
         setResult( {
            result,
            text: {
               title: 'К сожалению, твой дом пока не подключен к интернету',
               icon: 'smile_invalid',
               description: `Но можно попробовать <span id="change-address">изменить адрес</span>`,
               label: `Или оставь заявку, чтобы узнать, когда будет подключение`
            }
         } )
         const $changeAddress = document.getElementById( 'change-address' )
         $changeAddress.addEventListener( 'click', resultNull )
      }
   }


   return (
      <section className={ container }>
         <div className={ 'wrapper' }>
            <div className={ s.address }>

               <div className={ s._ }>
                  <AddressForm
                     hidden={ result !== null }
                     showLabel={ isShowLabel }
                     formLabel={ formLabel }
                     disabled={ isLoading }
                     addressValue={ addressValue }
                     setAddressValue={ setAddressValue }
                     submit={ submit }
                  />
                  { result &&
                     <OrderForm
                        result={ result }
                        resultNull={ resultNull }
                        showLabel={ isShowLabel }
                        formLabel={ formLabel }
                        disabled={ isLoading }
                     />
                  }

                  <div className={ s.container_img }>
                     <Image
                        src={ '/images/check_address/check_address.png' }
                        layout="fill"
                        objectFit="contain"
                        objectPosition="bottom right"
                     />
                  </div>
               </div>

            </div>
         </div>
      </section>
   )
}


export default connect( state => ({
   tariff: state.tariffVezde,
   pageName: state.page.name
}), {
   showModal,
   onUniteSwitch,
   setDataOrder,
} )( CheckAddress )