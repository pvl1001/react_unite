import {SUM_TOTAL_PRICE} from "../types";

export function sumTotalPrice (payload) {
   return {type: SUM_TOTAL_PRICE, payload}
}
