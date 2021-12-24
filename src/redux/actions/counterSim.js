import {COUNTER_SIM, TARIFF_RADIO_PLAN} from "../types";

export function counterSim(payload) {
   return {type: COUNTER_SIM, payload}
}

export function tariffRadioPlan(payload) {
   return {type: TARIFF_RADIO_PLAN, payload}
}