import {HANDLER_COUNTER_ALMOND, HANDLE_SWITCH_ALMOND} from "../types";

export function switchAlmond(payload) {
   return {type: HANDLE_SWITCH_ALMOND, payload}
}

export function counterAlmond(payload) {
   return {type: HANDLER_COUNTER_ALMOND, payload}
}