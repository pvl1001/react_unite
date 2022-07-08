import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   order: { show: false },
   orderResponse: { show: false },
   cities: { show: false },
   mftv: { show: false },
   equipment: { show: false },
   tariff: { show: false },
   megaTariff: { show: false },
   channels: { show: false },
   // almond: { show: false },
   // aboutAlmond: { show: false },
   // choiceRouter: { show: false },
}


export const modalsSlice = createSlice( {
   name: 'modals',
   initialState,
   reducers: {
      showModal( state, action ) {
         const { modal, bool, props } = action.payload
         state[modal].show = bool
         state[modal].props = props || null
      }
   }
} )

export const { showModal } = modalsSlice.actions
export default modalsSlice.reducer