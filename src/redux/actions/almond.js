import {HANDLER_COUNTER_ALMOND, HANDLE_SWITCH_ALMOND, SUM_ALMOND_TOTAL_PRICE} from "../types";

export function switchAlmond(payload) {
   return {type: HANDLE_SWITCH_ALMOND, payload}
}

export function counterAlmond(payload) {
   return {type: HANDLER_COUNTER_ALMOND, payload}
}

export function sumAlmondTotalPrice(payload) {
   return {type: SUM_ALMOND_TOTAL_PRICE, payload}
}

