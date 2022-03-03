import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import pageSlice from "./slices/pageSlice";
import tariffsSlice from "./slices/tariffsSlice";
import equipmentsSlice from "./slices/equipmentsSlice";
import modalsSlice from "./slices/modalsSlice";
import orderSlice from "./slices/orderSlice";
import tariffAroundSlice from "./slices/tariffAroundSlice";


export const store = configureStore( {
   reducer: {
      page: pageSlice,
      modals: modalsSlice,
      tariffs: tariffsSlice,
      equipments: equipmentsSlice,
      order: orderSlice,
      tariffAround: tariffAroundSlice
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware( {
         serializableCheck: false,
      } )
} )

export const wrapper = createWrapper( () => store, { debug: true } )