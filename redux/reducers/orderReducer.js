// types
export const SET_DATA_ORDER = 'SET_DATA_ORDER'


function arrEquipmentsChecked(value) {
   if (Array.isArray(value)) {
      const arrEq = value.filter(eq => eq.switch).map(eq => eq.dataView)
      return arrEq.length ? ' ' + arrEq.join(', ') : ''
   }
   return ` ${value}`
}

function isPrice(value) {
   return typeof value === 'number' ? ` ${value}₽` : value
}


// reducer
const initialState = {
   eventLabel: {},
   city: '',
   clientName: '',
   clientPhone: '',
   clientAddress: '',
   house_guid: '',
   tariffId: '',
   tariffName: '',
   comment: '',
   equipments: '',
   price: '',
}


export function orderReducer(state = initialState, action) {
   switch (action.type) {
      case SET_DATA_ORDER:

         const data = action.payload

         const orderData = {
            city: document.querySelector('.nav__city span').textContent,
            clientName: data.clientName || state.clientName,
            clientPhone: data.clientPhone || state.clientPhone,
            clientAddress: data.clientAddress || state.clientAddress,
            house_guid: data.house_guid || state.house_guid,
            tariffId: data.tariffId || state.tariffId,
            tariffName: data.tariffName && data.tariffName !== state.tariffName ? 'Объединяй! ' + data.tariffName : state.tariffName,
            equipments: data.equipments ? arrEquipmentsChecked(data.equipments) : '',
            price: data.price ? isPrice(data.price) : '',
            eventLabel: data.eventLabel,
            get comment() {
               return (`${(this.clientAddress && 'По адресу ' + this.clientAddress)} ${this.tariffName} ${this.equipments} ${this.price}`)
                  .replace(/\s+/g, ' ').trim()
            },
         }
         return {...state, ...orderData}

      default:
         return state
   }
}


// actions
export function setDataOrder(payload) {
   return {type: SET_DATA_ORDER, payload}
}