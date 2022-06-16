import s from './CheckAddress.module.sass'
import Form from "./Form/Form";
import { useEffect, useState } from "react";
import Offer from "./Offer/Offer";
import $ from "jquery";
import Success from "./Success/Success";
import { connect } from "react-redux";
import { showModal } from "../../redux/slices/modalsSlice";
import { api } from "../../api/api";
import { onUniteSwitch } from "../../redux/slices/tariffVezdeSlice";
import { setDataOrder } from "../../redux/slices/orderSlice";
import { useRouter } from 'next/router'


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
            setIsLoading( true )
            const data = await api( 'https://api.wifire.ru/api/address/check_dadata_address', address )
            setIsLoading( false )
            setFormLabel( textLabelCheck )
            return setResult( data.result )
         } catch ( err ) {
            setIsLoading( false )
            setFormLabel( textLabelError )
         }

      }

      setIsShowLabel( true )
   }

   const eventLabelDefault = {
      order: `click_button_order_${ props.tariff.id }_ntv`,
      send: `click_button_send_${ props.tariff.id }_ntv`
   }

   function showModalOrder( eventLabel = eventLabelDefault ) {
      props.showModal( {
         modal: 'order',
         bool: true
      } )
      props.setDataOrder( {
         tariffName: `${ props.pageName } ${ props.tariff.name }`,
         tariffId: props.tariff.tariffId,
         equipments: props.tariff.equipments,
         eventLabel: eventLabel
      } )
   }


   return (
      <section className={ container }>
         <div className={ 'wrapper ' }>
            <div className={ s.address }>

               <Form
                  result={ result }
                  address={ address }
                  setAddress={ setAddress }
                  isShowLabel={ isShowLabel }
                  setIsShowLabel={ setIsShowLabel }
                  submit={ submit }
                  isLoading={ isLoading }
                  formLabel={ formLabel }
               />

               { result === 1 &&
                  <Success
                     resultNull={ resultNull }
                     showModalOrder={ showModalOrder }
                     address={ address.address }
                  />
               }

               { result === 0 &&
                  <Offer
                     resultNull={ resultNull }
                     showModalOrder={ showModalOrder }
                     address={ address.address }
                  />
               }

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