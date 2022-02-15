import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.scss"
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

import '../public/fonts/fonts.css'
import '../public/styles/null.sass'
import '../public/styles/colors.css'
import '../public/styles/main.sass'

import '../components/Tariffs/Tariffs.sass'
import '../components/Equipments/Equipments.sass'

import React, { useEffect } from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "../redux/rootReducer";
import Analytics from "../analytics/Analytics";
import { analyticsView } from "../analytics/events";

const composedEnhancer = composeWithDevTools( applyMiddleware( thunk ) )
export const store = createStore( rootReducer, composedEnhancer )


export default function App( { Component, pageProps } ) {

   useEffect( () => {
      window.eventFired = []
      analyticsView()
   }, [] )


   return (
      <React.StrictMode>
         <Provider store={ store }>

            <Component { ...pageProps } />

            <Analytics/>

         </Provider>
      </React.StrictMode>
   )
}