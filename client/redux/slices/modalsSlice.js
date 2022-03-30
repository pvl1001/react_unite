import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   order: { show: false },
   cities: { show: false },
   mftv: { show: false },
   equipment: { show: false },
   tariff: { show: false },
   tariffAll: { show: false },
   almond: { show: false },
   aboutAlmond: { show: false },
   choiceRouter: { show: false },
   channels: { show: false },
}


export const modalsSlice = createSlice( {
   name: 'modals',
   initialState,
   reducers: {
      showModal( state, action ) {
         state[action.payload.modal].show = action.payload.bool
         state[action.payload.modal].props = action.payload.props || null
      }
   }
} )

export const { showModal } = modalsSlice.actions
export default modalsSlice.reducer