import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';


const initialState = {
   id: 'around',
   tariffId: 3981,
   dataView: "vezde",
   name: "Везде",
   speed: 150,
   min: 2100,
   web: "Безлимитный интернет",
   sale: null,
   infoProgress: [
      {
         title: "Мобильный интернет",
         value: "<span class='icon-infinity'></span> ГБ"
      },
      {
         title: "Звонки",
         value: "2100 минут"
      },
      {
         title: "Домашний&nbsp;<br>интернет",
         value: "150 Мбит/с"
      }
   ],
   tvId: 1,
   tvLength: "61 канал",
   oldPrice: null,
   price: 1400,
   totalPrice: 1400,
   priceSale: 960,
   iconInfo: false,
   rentDevice: [
      {
         text: "Аренда 4G Wi-Fi роутера",
         price: 100
      }
   ],
   infoModal: [
      {
         title: "Мобильная связь",
         icon: "mob_bold",
         options: [
            {
               name: "Мобильный интернет",
               description: "",
               value: "Безлимитно"
            },
            {
               name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
               description: "",
               value: "Безлимитно"
            },
            {
               name: "Звонки на номера МегаФона России",
               description: "Не расходуют пакет минут",
               value: "Безлимитно"
            },
            {
               name: "Звонки на мобильные номера других операторов России",
               description: "",
               value: "2100 минут"
            },
            {
               name: "МегаДиск",
               description: "Облачное хранилище для ваших фотографий и файлов",
               value: "1 ТБ"
            }
         ]
      },
      {
         title: "Интернет",
         icon: "wi-fi_bold",
         options: [
            {
               name: "Скорость",
               description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
               value: "150 Мбит/с"
            },
            {
               name: "Трафик",
               description: "",
               value: "Безлимитно"
            }
         ]
      },
      {
         title: "ТВ",
         icon: "TV_bold",
         options: [
            {
               name: "Мегафон ТВ",
               description: "",
               value: "61 канал"
            },
            {
               name: "Трафик",
               description: "",
               value: "Безлимитно"
            }
         ]
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
         plan: null
      }
   ],
}


export const tariffAroundSlice = createSlice( {
   name: 'tariffAround',
   initialState,
   reducers: {
      onUniteSwitch( state, action ) {
         return produce( state, setState => {
            setState.routerSwitch = action.payload
            const priceReduce = [ setState.priceSale, setState.routerSwitch && setState.equipments[0].price ]
            setState.calcPriceSale = priceReduce.reduce( ( a, b ) => a + b )
         } )
      },
   }
} )


export const { onUniteSwitch } = tariffAroundSlice.actions
export default tariffAroundSlice.reducer