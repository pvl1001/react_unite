import { createSlice } from '@reduxjs/toolkit';


function arrEquipmentsChecked( value ) {
   if ( Array.isArray( value ) ) {
      const arrEq = value.filter( eq => eq.switch ).map( eq => eq.dataView )
      return arrEq.length
         ? ' ' + arrEq.join( ', ' )
         : ''
   }
   return ` ${ value }`
}

function isPrice( value ) {
   return typeof value === 'number'
      ? ` ${ value }₽`
      : value
}


const initialState = {
   eventLabel: {},
   city: '',
   clientName: '',
   clientPhone: '',
   clientAddress: '',
   house_guid: '',
   tariffId: '',
   tariffName: '',
   comment: '',
   equipments: '',
   price: '',
}


export const orderSlice = createSlice( {
   name: 'order',
   initialState,
   reducers: {
      setDataOrder( state, action ) {
         const data = action.payload

         const orderData = {
            city: data.city || state.city,
            clientName: data.clientName || state.clientName,
            clientPhone: data.clientPhone || state.clientPhone,
            clientAddress: data.clientAddress || state.clientAddress,
            house_guid: data.house_guid || state.house_guid,
            tariffId: data.tariffId || state.tariffId,
            tariffName: data.tariffName && data.tariffName !== state.tariffName
               ? data.tariffName
               : state.tariffName,
            equipments: data.equipments
               ? arrEquipmentsChecked( data.equipments )
               : '',
            price: data.price
               ? isPrice( data.price )
               : '',
            eventLabel: data.eventLabel,
            get comment() {
               return (`${ (this.clientAddress && 'По адресу ' + this.clientAddress) } ${ this.tariffName } ${ this.equipments } ${ this.price }`)
                  .replace( /\s+/g, ' ' ).trim()
            },
         }
         return { ...state, ...orderData }
      }
   }
} )

export const { setDataOrder } = orderSlice.actions
export default orderSlice.reducer