import {COUNTER_MINUS, COUNTER_PLUS, TARIFF_RADIO_PLAN} from "../types";

export function counterPlus(payload) {
   return {type: COUNTER_PLUS, payload}
}

export function counterMinus(payload) {
   return {type: COUNTER_MINUS, payload}
}

export function tariffRadioPlan(payload) {
   return {type: TARIFF_RADIO_PLAN, payload}
}