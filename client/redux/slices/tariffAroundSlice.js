import { createSlice } from '@reduxjs/toolkit';


export const tariffAround = {
   id: 'around',
   tariffId: 3981,
   dataView: "vezde",
   name: "Везде",
   marks: [],
   web: 50,
   min: 2100,
   speed: 150,
   sale: null,
   tvId: 1,
   tvLength: "61 канал",
   oldPrice: null,
   price: 1050,
   totalPrice: null,
   get iconInfo() {
      return this.oldPrice && iconInfo
   },
   rentDevice: [
      {
         text: "Аренда 4G Wi-Fi роутера",
         price: 100
      }
   ],
   equipments: [
      {
         id: "eq-unite",
         name: "4G Wi-Fi роутер",
         params: [
            {
               icon: "fiolet_speed",
               text: "Скорость до 150 Мбит/с"
            },
            {
               icon: "fiolet_hertz",
               text: "Wi-Fi 2,4 и 5 ГГц"
            },
            {
               icon: "fiolet_zone",
               text: "Уверенный сигнал и большая зона покрытия"
            },
            {
               icon: "fiolet_settings",
               text: "Простое подключение до 50 пользователей"
            },
            {
               icon: "fiolet_razmer",
               text: "Компактные размеры"
            }
         ],
         img: "router_info",
         price: 200,
         dataView: "router-4g",
         switch: true,
         plan: null,
         link: "/download/~federal/~federal/oferta/wi_fi/rukovodstvo_polzovatelya.pdf"
      }
   ],
   link: "/uploads/docs/2022/home/tariff_5687_chuvashia.pdf"
}


export const tariffAroundSlice = createSlice( {
   name: 'tariffAround',
   initialState: tariffAround,
   reducers: {
      onUniteSwitch( state, action ) {
         state.routerSwitch = action.payload
         const priceReduce = [ state.price * 0.6, state.routerSwitch && state.equipments[0].price ]
         state.calcPriceSale = priceReduce.reduce( ( a, b ) => a + b )
      },
   }
} )


export const { onUniteSwitch } = tariffAroundSlice.actions
export default tariffAroundSlice.reducer