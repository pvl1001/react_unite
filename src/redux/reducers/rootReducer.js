import {combineReducers} from "redux";
import {modalsReducer} from "./modalsReducer";
import {tariffsReducer} from "./tariffsReducer";
import {equipmentsReducer} from "./equipmentsReducer";
import {orderReducer} from "./orderReducer";

export const rootReducer = combineReducers({
   modals: modalsReducer,
   tariffs: tariffsReducer,
   equipments: equipmentsReducer,
   order: orderReducer
})