import React from 'react'
import {connect} from 'react-redux'
import   {updateLoginForm}  from '../actions/login/loginForm';
import {login} from '../actions/User/user';





function LoginForm({loginData, updateLoginForm, login}) {


//MOUNTED ON APP COMPONENT
//ROOT LEVEL OF COMPONENT DIR

//EVENT HANDLERS
    const  handleChange = event => {
      event.preventDefault();
        const {name, value} = event.target
       const  updatedFormInfo = {
        ...loginData,
        [name]: value
       }
      updateLoginForm(updatedFormInfo)
      }
    


    const handleSubmit = event => {
    event.preventDefault()
    login(loginData)
   }
    

//RENDERED FORM 

    return (  
      <div className="login"> 
      <h3 className="LoginHeader"> LOGIN </h3>
        <form onSubmit={handleSubmit}>
          <label>username</label>
          <input
          placeholder="Username"
            type="text"
            name="name"
            value={loginData.name} onChange={handleChange}
          /><br/>
          <input
          placeholder="Password"
          type="text"
            name="password"
            value={loginData.password} onChange={handleChange}
          /><label>Password</label><br/>
<input type="submit" value="Login"/>
        </form> 
        </div>  
    );

  }
  

//MAP TO PROPS


const mapStateToProps = state => {
  return {
    loginData: state.LoginFormReducer
  } 
}
 



export default connect(mapStateToProps, {updateLoginForm,login})(LoginForm);

//we can connect functions to thunk login^^



