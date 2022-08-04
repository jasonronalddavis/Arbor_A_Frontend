import React from 'react'
import { connect } from 'react-redux'
import {logout} from '../actions/User/user.js';

//ROOT LEVEL OF COMPONENT DIR
//MOUNTED ON APP COMPONENT




//MOUNTED ON APP
const Logout = ({logout}) => {
    return(
        <div className="logout">
<form onSubmit={logout}> 
    <input type="submit" value="Logout"/>
</form>
</div>
    )    
}



export default connect(null,{logout})(Logout);