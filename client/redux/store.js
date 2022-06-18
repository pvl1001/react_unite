import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import pageSlice from "./slices/pageSlice";
import tariffsSlice from "./slices/tariffsSlice";
import equipmentsSlice from "./slices/equipmentsSlice";
import modalsSlice from "./slices/modalsSlice";
import orderSlice from "./slices/orderSlice";
import tariffVezdeSlice from "./slices/tariffVezdeSlice";
import megaTariffSlice from "./slices/megaTariffSlice";
import tariffsFilteredSlice from "./slices/tariffsFilteredSlice";


export const store = configureStore( {
   reducer: {
      page: pageSlice,
      tariffs: tariffsSlice,
      megaTariff: megaTariffSlice,
      modals: modalsSlice,
      equipments: equipmentsSlice,
      order: orderSlice,
      tariffVezde: tariffVezdeSlice,
      tariffsFiltered: tariffsFilteredSlice
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware( {
         serializableCheck: false,
      } )
} )

export const wrapper = createWrapper( () => store, { debug: false } )