import {
   HANDLER_COUNTER_ALMOND,
   HANDLE_SWITCH_ALMOND,
   SUM_ALMOND_TOTAL_PRICE,
   CHANGE_ALMOND_TOTAL_PRICE,
   HANDLER_COUNTER_ALMOND_EQ,
   SUM_ALMOND_TOTAL_PRICE_EQ,
   HANDLE_SWITCH_ALMOND_EQ
} from "../types";

export function switchAlmond(payload) {
   return {type: HANDLE_SWITCH_ALMOND, payload}
}

export function counterAlmond(payload) {
   return {type: HANDLER_COUNTER_ALMOND, payload}
}

export function sumAlmondTotalPrice(payload) {
   return {type: SUM_ALMOND_TOTAL_PRICE, payload}
}

export function changeAlmondTotalPrice(payload) {
   return {type: CHANGE_ALMOND_TOTAL_PRICE, payload}
}

export function counterAlmondEq(payload) {
   return {type: HANDLER_COUNTER_ALMOND_EQ, payload}
}

export function sumAlmondTotalPriceEq(payload) {
   return {type: SUM_ALMOND_TOTAL_PRICE_EQ, payload}
}

export function switchAlmondEq(payload) {
   return {type: HANDLE_SWITCH_ALMOND_EQ, payload}
}

