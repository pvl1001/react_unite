import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';


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

const initialState = tariffAround

export const tariffAroundSlice = createSlice( {
   name: 'tariffAround',
   initialState,
   reducers: {
      onUniteSwitch( state, action ) {
         return produce( state, setState => {
            setState.routerSwitch = action.payload
            const priceReduce = [ setState.price * 0.6, setState.routerSwitch && setState.equipments[0].price ]
            setState.calcPriceSale = priceReduce.reduce( ( a, b ) => a + b )
         } )
      },
   }
} )


export const { onUniteSwitch } = tariffAroundSlice.actions
export default tariffAroundSlice.reducer