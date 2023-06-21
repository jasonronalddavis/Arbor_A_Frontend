import '../App.css';
import './products.css';
import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom'
import LoginForm from "./Login.js";
import SignupForm from "./signup.js";
import {logout} from '../actions/User/user.js';
import {getCurrentUser} from '../actions/User/user';
import AppRouter from "../Router";

//import Logout from "./components/logout.js";
import { useEffect, useDispatch,useRef, useState} from "react";


//LoginForm IS CURRENTLY THE ONLY MOUNTED COMPONENT
//ROOT LEVEL OF DIR

function Products({user,getCurrentUser,logout},props){

  //RREACT HOOK FOR FETCHING AND STORING LOGGED IN USER
  const [fetchUser, setUser] = useState({});



      
//HANDLER FOR LOGGING OUT USER UPON CLICKING LOGOUT IMAGE
const logoutUser = (e) => {
logout();
window.location.reload();
}


//APP MAIN PAGE ICONS
const LogoutIcon = () => {
  return (
    <img  src={require('../public/logout.png')} alt="" id="StDefimg" className="LogoutIcon" onClick={(e) => {logoutUser(e)}}/>
      )
}

//COMPANY LOGO
const HomeLogo = () => {
  return (
    <img  src={require('../public/home logo.png')} alt="" id="home_logo" className="Home_Logo"/>
      )
}


const Menu = () => {
    return (
      <img  src={require('../public/menu.png')} alt="" id="Menu" className="Menu" />
        )
  }




//CURRENTLY RENDERS SEVERAL GRAPHICAL ELEMENTS WHICH DEPEND ON A USERS LOGGED ON STATUS 
//COMPONENTS RENDER BASED ON USERS LOGGED ON STATUS
  return (
  <div className="Products"> 
  {<HomeLogo/>}
  <h1 className="Username"> { user != null ? user.name : null } </h1>
{console.log(fetchUser)}
{user.name == "" ?  null : <LogoutIcon/>}
  <h1 className="Products_Header"> Check Out Our Products!</h1>
  <h4 className="Categories_Header"> Categories</h4>
{console.log(fetchUser)}
{<NavLink exact="true"to="/home"
className="HomeLink">
<img  src={require('../public/home logo.png')} alt="" id="home_logo" className="Home_Logo"/>
</NavLink>}

    </div>
  );
}


//ONLY USER STATE CURRENTLY IMPLEMENTED
const mapStateToProps = ({user}) => {
  return {
    user,
  }
 }
 



 export default connect(mapStateToProps,{getCurrentUser,logout})(Products);
