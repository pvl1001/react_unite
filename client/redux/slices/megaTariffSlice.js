import { createSlice } from '@reduxjs/toolkit';


export const stateMegaTariff = {
   name: 'МегаТариф',
   price: 228,
   minutes: 600,
   web: 30,
   sms: 100
}

const megaTariff = createSlice( {
   name: 'megaTariff',
   initialState: stateMegaTariff,
   reducers: {}
} )


export default megaTariff.reducer