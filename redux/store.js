import { configureStore } from '@reduxjs/toolkit'
import tariffsSlice from "./slices/tariffsSlice";
import equipmentsSlice from "./slices/equipmentsSlice";
import modalsSlice from "./slices/modalsSlice";
import orderSlice from "./slices/orderSlice";
import tariffAroundSlice from "./slices/tariffAroundSlice";


export const store = configureStore( {
   reducer: {
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