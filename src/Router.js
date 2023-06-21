import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect} from 'react-router-dom';//import ListUsers from "../components/User/users";
import Account from "./components/Account";
import Home from "./home.js";
import Products from "./components/products";


// ROUTING LINKS TO STORYTEXT CONTAINER(PREFIXED AS '/storyTexts') 
// ROUTED STORYTEXT FORM PREFIXED AS '/storyTextForm'
// ROUTED TO USERSCONTAINER(PREFIXED AS /users')
//ROUTED TO '/' AS HOME PATH


const AppRouter = () => {
return (
     <Routes>
        <Route path="/Account" element={<Account/>} exact={true}/> 
        <Route path="/home" element={<Home/>} exact={true}/> 
        <Route path="/Products" element={<Products/>} exact={true}/>
</Routes>
);
};












export default AppRouter;