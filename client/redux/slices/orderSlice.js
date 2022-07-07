import { createSlice } from '@reduxjs/toolkit';
import { initialStatePage } from "./pageSlice";


function arrEquipmentsChecked( value ) {
   if ( Array.isArray( value ) ) {
      const arrEq = value.filter( eq => eq.switch ).map( eq => eq.id )
      return arrEq.length ? arrEq.join( ', ' ) : ''
   }
   return ' ' + value
}

function isPrice( value ) {
   return typeof value === 'number'
      ? ` ${ value }₽`
      : value
}


const initialState = {
   eventLabel: {},
   city: initialStatePage.region.name,
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
      setDataOrder( state, { payload } ) {
         const { equipments, price, tariffName, tariffId } = payload
         return {
            ...state, ...payload,
            tariffName: tariffName || '',
            tariffId: tariffId || '',
            equipments: equipments ? arrEquipmentsChecked( equipments ).trim() : '',
            price: price ? isPrice( price ).trim() : '',
            get comment() {
               return (
                  `${ (this.clientAddress ? 'По адресу ' + this.clientAddress : '') } ${ this.tariffName } ${ this.equipments } ${ this.price }`)
                  .replace( /\s+/g, ' '
                  ).trim()
            }
         }
      }
   }
} )

export const { setDataOrder } = orderSlice.actions
export default orderSlice.reducer