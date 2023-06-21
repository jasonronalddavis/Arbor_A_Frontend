import './App.css';
import './home.css';
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

function Home({user,getCurrentUser,logout},props){

  //RREACT HOOK FOR FETCHING AND STORING LOGGED IN USER
  const [fetchUser, setUser] = useState({});
  const [open, setOpen] = useState(false);

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

const Menu = () => {
    return (
      <div className={`dropDownContainer ${open? 'active' : 'inactive'}`}>

  <li className='menu'>
  {<NavLink exact="true"to="/Account"
className="AccountLink">
<img  src={require('./public/Account icon.png')} alt="" id="Account" className="Account_Icon"/>
</NavLink>}
  </li>

  <li>
  {<NavLink exact="true"to="/Products"
className="ProductLink">
<img  src={require('./public/product icon.png')} alt="" id="Products" className="Products_Icon"/>
</NavLink>}

{<NavLink exact="true"to="/Wallet"
className="WallettLink">
<img  src={require('./public/wallet icon.png')} alt="" id="Wallet" className="Wallet_Icon"/>
</NavLink>}

{<NavLink exact="true"to="/Contact_us"
className="Contact_us_Link">
<img  src={require('./public/contact us icon.png')} alt="" id="Contact_Us" className="Contact_Us_Icon"/>
</NavLink>}
  </li>
  </div>
      )
  }





//CURRENTLY RENDERS SEVERAL GRAPHICAL ELEMENTS WHICH DEPEND ON A USERS LOGGED ON STATUS 
//COMPONENTS RENDER BASED ON USERS LOGGED ON STATUS
  return (
  <div className="Home">  
{<CartIcon/>}
{
<div>
<img  src={require('./public/menu.png')} alt="" id="Menu" className="Menu" onClick={() => {setOpen(!open)}}/>
  <ul><Menu/></ul>
  </div>
  }
    </div>
  );
}


//ONLY USER STATE CURRENTLY IMPLEMENTED
const mapStateToProps = ({user}) => {
  return {
    user,
  }
 }
 



 export default connect(mapStateToProps,{getCurrentUser,logout})(Home);
