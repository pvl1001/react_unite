export const HANDLER_COUNTER_ALMOND_EQ = 'EQUIPMENTS/HANDLER_COUNTER_ALMOND_EQ'
export const SUM_ALMOND_TOTAL_PRICE_EQ = 'EQUIPMENTS/SUM_ALMOND_TOTAL_PRICE_EQ'
export const HANDLE_SWITCH_ALMOND_EQ = 'EQUIPMENTS/HANDLE_SWITCH_ALMOND_EQ'
export const CHANGE_PLAN = 'CHANGE_PLAN'


export const changePlan = (payload) => ({ type: CHANGE_PLAN, payload })

export const sumAlmondTotalPriceEq = (payload) => ({type: SUM_ALMOND_TOTAL_PRICE_EQ, payload})

export const counterAlmondEq = (payload) => ({type: HANDLER_COUNTER_ALMOND_EQ, payload})

export const switchAlmondEq = (payload) => ({type: HANDLE_SWITCH_ALMOND_EQ, payload})