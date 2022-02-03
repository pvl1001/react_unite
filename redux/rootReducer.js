import {combineReducers} from "redux";
import {modalsReducer} from "./modals/modalsReducer";
import {tariffsReducer} from "./tariffs/tariffsReducer";
import {equipmentsReducer} from "./equipments/equipmentsReducer";
import {orderReducer} from "./order/orderReducer";

export const rootReducer = combineReducers({
   modals: modalsReducer,
   tariffs: tariffsReducer,
   equipments: equipmentsReducer,
   order: orderReducer
})