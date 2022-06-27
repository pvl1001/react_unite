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
import autocompleteHandler from "../../mixins/autocompleteHandler";
import { checkAddressPath } from "../../api/paths";


function CheckAddress( props ) {
   const router = useRouter()

   const inputAddress = '#addressCheck'
   const labelText = {
      select: 'Выберите адрес дома из выпадающего списка!',
      check: 'Проверка адреса...',
      error: 'Сервис временно не доступен',
   }
   const [ addressValue, setAddressValue ] = useState( '' )
   const [ address, setAddress ] = useState( {} )
   const [ isShowLabel, setIsShowLabel ] = useState( false )
   const [ formLabel, setFormLabel ] = useState( labelText.select )
   const [ result, setResult ] = useState( null )
   const [ isLoading, setIsLoading ] = useState( false )
   const [ suggestion, setSuggestion ] = useState( null )
   const container = router.route === '/internetvse'
      ? s.container_vse
      : s.container

   function clearInput() {
      $( inputAddress ).val( '' )
      setAddressValue( '' )
   }

   function resultNull() {
      setResult( null )
      setAddress( {} )
      clearInput()
   }

   useEffect( () => {
      autocompleteHandler( inputAddress, setSuggestion )
      props.onUniteSwitch( true )
   }, [] )

   useEffect( async () => {
      if ( suggestion ) {
         const data = {
            house_guid: suggestion.data.aoguid,
            address: suggestion.data.address
         }
         setAddress( data )
         setIsShowLabel(false)
      }
   }, [ suggestion ] )

   async function submit( e ) {
      e.preventDefault()
      // analyticsEvent( 'click_button_address' )

      if ( address.house_guid ) {
         props.setDataOrder( {
            clientAddress: address.address,
            house_guid: address.house_guid
         } )
         try {
            setFormLabel( labelText.check )
            setIsShowLabel( true )
            setIsLoading( true )
            const data = await api( checkAddressPath, address )
            setIsLoading( false )
            setFormLabel( labelText.select )
            setResultHandler( data.result, address.address )
            return
         } catch ( err ) {
            setIsLoading( false )
            setFormLabel( labelText.error )
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