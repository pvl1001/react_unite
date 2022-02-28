import s from './CheckAddress.module.sass'
import Form from "./Form/Form";
import { useEffect, useState } from "react";
import Offer from "./Offer/Offer";
import $ from "jquery";
import Success from "./Success/Success";
import { connect } from "react-redux";
import { showModal } from "../../redux/slices/modalsSlice";
import { api } from "../../api";
import { analyticsEvent } from "../../analytics/events";
import { onUniteSwitch } from "../../redux/slices/tariffAroundSlice";
import { setDataOrder } from "../../redux/slices/orderSlice";


function CheckAddress( props ) {

   useEffect( () => {
      window.autocomplete = require( '../../plugins/jquery.autocomplete' )

      $( inputAddress ).autocomplete( {
         width: 'auto',
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
   const [ address, setAddress ] = useState( {} )
   const [ result, setResult ] = useState( null )
   const [ isShowLabel, setIsShowLabel ] = useState( false )

   function clearInput() {
      $( inputAddress ).val( '' )
   }

   function resultNull() {
      setResult( null )
      setAddress( {} )
      clearInput()
   }

   function submit( e ) {
      e.preventDefault()
      analyticsEvent( 'click_button_address' )

      if ( address.house_guid ) {
         props.setDataOrder( {
            clientAddress: address.address,
            house_guid: address.house_guid
         } )
         return api( 'https://api.wifire.ru/api/address/check_dadata_address', address )
            .then( data => setResult( data.result ) )
      }

      setIsShowLabel( true )
   }

   const eventLabelDefault = {
      order: `click_button_order_${ props.tariff.dataView }_ntv`,
      send: `click_button_send_${ props.tariff.dataView }_ntv`
   }

   function showModalOrder( eventLabel = eventLabelDefault ) {
      props.showModal( {
         modal: 'order',
         bool: true
      } )
      props.setDataOrder( {
         tariffName: props.tariff.name,
         tariffId: props.tariff.tariffId,
         equipments: props.tariff.equipments,
         eventLabel: eventLabel
      } )
   }


   return (
      <section className={ s.wrapper }>
         <div className={ 'wrapper ' }>
            <div className={ s.address }>

               <Form
                  result={ result }
                  address={ address }
                  setAddress={ setAddress }
                  isShowLabel={ isShowLabel }
                  setIsShowLabel={ setIsShowLabel }
                  submit={ submit }
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
      // <!--г Москва, ул Набережная, д 4-->
   )
}


export default connect( state => ({
   tariff: state.tariffAround
}), {
   showModal,
   onUniteSwitch,
   setDataOrder,
} )( CheckAddress )