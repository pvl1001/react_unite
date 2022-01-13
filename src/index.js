import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from "./pages/App";

import {compose, createStore} from "redux";
import {Provider} from 'react-redux';
import {rootReducer} from "./redux/reducers/rootReducer";

export const store = createStore(
   rootReducer,
   compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <App/>
      </Provider>
   </React.StrictMode>,
   document.getElementById( 'root' )
)
