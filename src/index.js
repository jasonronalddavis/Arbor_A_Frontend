import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import store from "./store"; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';//import ListUsers from "../components/User/users";
import AppRouter from "./Router";


ReactDOM.render(
  <Provider store={store}>
  <Router> 
    
    <App/>
    {/* {<img className="BckGrnd" style={{ alignSelf: 'center' }}  alt="default" src={require('./public/Background.png')}/>
//BACKGROUND IMAGE
} */}
</Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
