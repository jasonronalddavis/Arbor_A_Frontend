import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import store from "./store"; 


ReactDOM.render(
  <Provider store={store}>

    
    <App/>
    {<img className="BckGrnd" style={{ alignSelf: 'center' }}  alt="default" src={require('./public/Background.png')}
/>
//BACKGROUND IMAGE
}
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
