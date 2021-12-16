import {SHOW_MODAL} from "../types";
import produce from "immer";

const initialState = {
   order: {show: false},
   cities: {show: false},
   mftv: {show: false},
   equipment: {show: false},
   tariff: {show: false},
   tariffAll: {show: false},
}

export function modalsReducer(state = initialState, action) {
   switch(action.type) {
      case SHOW_MODAL:
         return produce(state, setState => {
            setState[action.payload.modal].show = action.payload.bool
            setState[action.payload.modal].props = action.payload.props || null
         })
      default: return state
   }
}