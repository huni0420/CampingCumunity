import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import reducers from './reducers';

import {createStore} from 'redux'
import { Provider } from 'react-redux';



const initState = {
  email: undefined,
  nicname: ''
}
function reducers( state = initState, action){
  switch(action.type){
    case "onCheck" :
      let onCheckState = state;
      return onCheckState = action.payload
  }
  return state
}

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store} > 
    <App />
  </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

  //<React.StrictMode>
  //</React.StrictMode>