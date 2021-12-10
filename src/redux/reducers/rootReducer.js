import {combineReducers} from "redux";
import {modalsReducer} from "./modalsReducer";
import {tariffsReducer} from "./tariffsReducer";
import {equipmentsReducer} from "./equipmentsReducer";

export const rootReducer = combineReducers({
   modals: modalsReducer,
   tariffs: tariffsReducer,
   equipments: equipmentsReducer
})