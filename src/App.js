import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AppRouter from './AppRouter.js';
import LoginForm from "./components/Login.js";
//import Logout from "./components/logout.js";
import {getCurrentUser} from './actions/User/user';
import { useEffect, useDispatch,useRef, useState} from "react";
import {logout} from './actions/User/user.js';


//LoginForm IS CURRENTLY THE ONLY MOUNTED COMPONENT
//ROOT LEVEL OF DIR

function App({user,getCurrentUser,logout},props){

  //RREACT HOOK FOR FETCHING AND STORING LOGGED IN USER
  const [fetchUser, setUser] = useState({});


  // const effectTriggeredRef = useRef(false);

  // useEffect(() => {
  //   if (!effectTriggeredRef.current && user != null) {
  //     effectTriggeredRef.current = true;
  //     logStatus();
  //   }
  // }, [fetchUser], [setUser]);


//RREACT HOOK TO FETCH LOGGED IN USER ON EACH RENDER
  useEffect(() => {
        getCurrentUser();
    },[fetchUser], [setUser]);


// const logStatus = () => {
// setUser(user);
// }
      
//HANDLER FOR LOGGING OUT USER UPON CLICKING LOGOUT IMAGE
const logoutUser = (e) => {
logout();
window.location.reload();
}


//APP MAIN PAGE ICONS
const LogoutIcon = () => {
  return (
    <img  src={require('./public/logout.png')} alt="" id="StDefimg" className="LogoutIcon" onClick={(e) => {logoutUser(e)}}/>
      )
}

//COMPANY LOGO
const Logo = () => {
  return (
    <img  src={require('./public/Logo.png')} alt="" id="Arbor_A_Logo" className="Arbor_A_Logo"/>
      )
}


const CartIcon = () => {
  return (
    <img  src={require('./public/cart icon.png')} alt="" id="Arbor_A_Logo" className="Cart_Icon" />
      )
}



//CURRENTLY RENDERS SEVERAL GRAPHICAL ELEMENTS WHICH DEPEND ON A USERS LOGGED ON STATUS 
//COMPONENTS RENDER BASED ON USERS LOGGED ON STATUS
  return (
  <div className="App">  
<h1 className="Username"> { user != null ? user.name : null } </h1>
<div className="LoginForm"> {user.name == "" ? <LoginForm/> : null } </div>
{console.log(fetchUser)}
{user.name == "" ?  null : <LogoutIcon/>}
{<Logo/>}
{<CartIcon/>}
    </div>
  );
}


//ONLY USER STATE CURRENTLY IMPLEMENTED
const mapStateToProps = ({user}) => {
  return {
    user,
  }
 }
 



 export default connect(mapStateToProps,{getCurrentUser,logout})(App);
