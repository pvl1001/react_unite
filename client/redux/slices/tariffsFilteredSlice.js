import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { tariffs } from "./tariffsSlice";

const initialState = tariffs

const allTariffsSlice = createSlice( {
   name: 'allTariffs',
   initialState,
   reducers: {
      filterForTabs(state, action) {
         const groupName = action.payload
         const filteredTariffs = new Map()
         for ( const key in tariffs ) {
            const tariff = tariffs[key]
            const tariffGroup = tariff.name.split( ' ' )[0]
            if ( tariffGroup === groupName ) {
               filteredTariffs.set( key, tariff )
            }
         }
         return Object.fromEntries( filteredTariffs )
      },
   },
   // extraReducers: {
   //    [HYDRATE]: ( state, action ) => {
   //       return action.payload.tariffs
   //    }
   // },
} )


export const { filterForTabs } = allTariffsSlice.actions
export default allTariffsSlice.reducer