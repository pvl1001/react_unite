import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from "./pages/App";

import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {rootReducer} from "./redux/reducers/rootReducer";

const composedEnhancer = composeWithDevTools( applyMiddleware(thunk) )

export const store = createStore( rootReducer, composedEnhancer )

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <App/>
      </Provider>
   </React.StrictMode>,
   document.getElementById( 'root' )
)
