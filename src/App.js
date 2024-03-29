import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';//import ListUsers from "../components/User/users";
import LoginForm from "./components/Login.js";
import { NavLink} from 'react-router-dom';
import {getCurrentUser} from './actions/User/user';
import { useEffect, useDispatch,useRef, useState} from "react";
import {logout} from './actions/User/user.js';
import {Link} from 'react-router-dom';
import AppRouter from "./Router";


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



const BackBlocks = () => {
  return (
    <img  src={require('./public/back_blocks.jpg')} alt="" id="BackBlock" className="Back_block" />
      )
}

const BackBlocks2 = () => {
  return (
    <img  src={require('./public/back_blocks 2.jpg')} alt="" id="BackBlock2" className="Back_block_w" />
      )
}


const Background = () => {
  return (
    <img  src={require('./public/home page.png')} alt="" id="Background" className="BckGrnd" />
      )
}

const Menu = () => {
  return (
    <img  src={require('./public/menu.png')} alt="" id="Menu" className="Menu" />
      )
}



//CURRENTLY RENDERS SEVERAL GRAPHICAL ELEMENTS WHICH DEPEND ON A USERS LOGGED ON STATUS 
//COMPONENTS RENDER BASED ON USERS LOGGED ON STATUS
  return (
  <div className="App">  
{<Logo/>}
{<AppRouter/>}

{<Background/>}
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
