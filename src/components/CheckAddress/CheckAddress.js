import './CheckAddress.scss'
import Form from "./components/Form";
import {useEffect, useState} from "react";
import Offer from "./components/Offer";
import $ from "jquery";
import Success from "./components/Success";
import {connect} from "react-redux";
import showModal from "../../redux/actions/showModal";
import {onUniteSwitch} from "../../redux/reducers/tariffsReducer";


function CheckAddress(props) {

   const inputAddress = '#addressCheck'
   const [address, setAddress] = useState({})
   const [result, setResult] = useState(null)
   const [isShowLabel, setIsShowLabel] = useState(false)

   useEffect(() => {
      $(inputAddress).autocomplete({
         width: 'auto',
         minChars: 1,
         deferRequestBy: 200,
         serviceUrl: 'https://api.wifire.ru/api/address/check_address_dadata',
         type: 'POST',

         onSelect(suggestion) {
            setIsShowLabel(false)

            setAddress({
               house_guid: suggestion.data.aoguid,
               address: suggestion.data.address
            })
         }
      })

      props.onUniteSwitch(true)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   function clearInput() {
      $(inputAddress).val('')
   }

   function resultNull() {
      setResult(null)
      setAddress({})
      clearInput()
   }

   function checkAddress() {
      return $.ajax({
         url: 'https://api.wifire.ru/api/address/check_dadata_address',
         method: 'POST',
         data: address
      })
   }

   function submit(e) {
      e.preventDefault()
      !address.house_guid && setIsShowLabel(true)
      address.house_guid && checkAddress().then(data => setResult(data.result))
   }

   function showModalOrder() {
      props.showModal({modal: 'order', bool: true})
   }


   return (
      <section className="unite-wrapper">
         <div className="unite unite-check-address wrapper">
            <div className="unite-address">

               <Form
                  result={result}
                  address={address}
                  setAddress={setAddress}
                  isShowLabel={isShowLabel}
                  setIsShowLabel={setIsShowLabel}
                  submit={submit}
               />

               {result === 1 &&
                  <Success
                     resultNull={resultNull}
                     showModalOrder={showModalOrder}
                     address={address.address}
                  />
               }

               {result === 0 &&
               <Offer
                  resultNull={resultNull}
                  showModalOrder={showModalOrder}
                  address={address.address}
               />
               }

            </div>
         </div>
      </section>
      // <!--г Москва, ул Набережная, д 4-->
   )
}


export default connect(
   null,
   {
      showModal,
      onUniteSwitch
   }
)(CheckAddress)