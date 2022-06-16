import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";


export const tariffVezdeSlice = createSlice( {
   name: 'tariffVezde',
   initialState: {},
   reducers: {
      onUniteSwitch( state, action ) {
         state.routerSwitch = action.payload
         const priceReduce = [ state.price * 0.6, state.routerSwitch && state.equipments.router_4g.price ]
         state.calcPriceSale = priceReduce.reduce( ( a, b ) => a + b )
      },
   },
   extraReducers: {
      [HYDRATE]: ( state, action ) => action.payload.tariffs.vezde
   },
} )


export const { onUniteSwitch } = tariffVezdeSlice.actions
export default tariffVezdeSlice.reducer