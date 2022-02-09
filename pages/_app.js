import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.scss"
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

import '../public/fonts/fonts.css'
import '../public/styles/null.scss'
import '../public/styles/colors.scss'
import '../public/styles/main.scss'

import '../components/Support/Support.scss'
import '../components/Nav/Nav.scss'
import '../components/Header/Header.scss'
import '../components/Tariffs/Tariffs.scss'
import '../components/CheckAddress/CheckAddress.scss'
import '../components/Equipments/Equipments.scss'
import '../components/WhatElse/WhatElse.scss'
import '../components/AppBanner/AppBanner.scss'
import '../components/FAQ/FAQ.scss'
import '../components/Footer/Footer.scss'

import '../components/modals/City/ModalCity.scss'
import '../components/modals/Order/ModalOrder.scss'
import '../components/modals/Tariff/ModalTariff.scss'
import '../components/modals/Tariff/components/BannerMfTv/BannerMfTv.scss'
import '../components/modals/Mftv/ModalMftv.scss'
import '../components/modals/TariffAll/ModalTariffAll.scss'
import '../components/modals/Almond/ModalAlmond.scss'
import '../components/modals/AboutAlmond/ModalAboutAlmond.scss'
import '../components/modals/ChoiceRouter/ChoiceRouter.scss'
import '../components/modals/Equipment/ModalEquipment.scss'


import React, {useEffect} from 'react';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from "../redux/rootReducer";
import Analytics from "../analytics/Analytics";
import {analyticsView} from "../analytics/events";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
export const store = createStore(rootReducer, composedEnhancer)


export default function App({Component, pageProps}) {

   useEffect(() => {
      window.eventFired = []
      analyticsView()
   },[])


   return (
      <React.StrictMode>
         <Provider store={store}>

            <Component {...pageProps} />

            <Analytics/>

         </Provider>
      </React.StrictMode>
   )
}