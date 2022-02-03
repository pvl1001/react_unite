export const CHANGE_ALMOND_TOTAL_PRICE = 'CHANGE_ALMOND_TOTAL_PRICE'
export const SUM_ALMOND_TOTAL_PRICE = 'SUM_ALMOND_TOTAL_PRICE'
export const HANDLER_COUNTER_ALMOND = 'HANDLE_COUNTER_ALMOND'
export const HANDLE_SWITCH_ALMOND = 'HANDLE_SWITCH_ALMOND'
export const HANDLE_SWITCH = 'HANDLE_SWITCH'
export const SUM_TOTAL_PRICE = 'SUM_TOTAL_PRICE'
export const COUNTER_SIM = 'COUNTER_SIM'
export const TARIFF_RADIO_PLAN = 'TARIFF_RADIO_PLAN'
export const SET_CHANNELS = 'SET_CHANNELS'
export const UNITE_SWITCH = 'UNITE_SWITCH'











export const changeAlmondTotalPrice = (payload) => ({type: CHANGE_ALMOND_TOTAL_PRICE, payload})

export const sumAlmondTotalPrice = (payload) => ({type: SUM_ALMOND_TOTAL_PRICE, payload})

export const counterAlmond = (payload) => ({type: HANDLER_COUNTER_ALMOND, payload})

export const switchAlmond = (payload) => ({type: HANDLE_SWITCH_ALMOND, payload})

export const optionSwitch = (payload) => ({type: HANDLE_SWITCH, payload})

export const sumTotalPrice = (payload) => ({type: SUM_TOTAL_PRICE, payload})

export const counterSim = (payload) => ({type: COUNTER_SIM, payload})

export const tariffRadioPlan = (payload) => ({type: TARIFF_RADIO_PLAN, payload})

export const onUniteSwitch = (payload) => ({type: UNITE_SWITCH, payload})

const setChannels = (payload) => ({type: SET_CHANNELS, payload})

export const getChannels = (tvId) => (dispatch) => {
   return fetch(`https://home.megafon.ru/billing/bt/json/gettvchannelsbygroup?pack_id=${tvId}`)
      .then(res => res.json())
      .then(data => dispatch(setChannels(data.packages[tvId])))
      .catch(err => console.log('Ошибка загрузки тв-каналов (getChannels)', err))
}

