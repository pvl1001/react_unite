import { createSlice } from '@reduxjs/toolkit'
import produce from "immer";


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
}


export const modalsSlice = createSlice( {
   name: 'modals',
   initialState,
   reducers: {
      showModal( state, action ) {
         return produce( state, setState => {
            setState[action.payload.modal].show = action.payload.bool
            setState[action.payload.modal].props = action.payload.props || null
         } )
      }
   }
} )

export const { showModal } = modalsSlice.actions
export default modalsSlice.reducer