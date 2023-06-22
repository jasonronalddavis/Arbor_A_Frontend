
import React from 'react'
import { connect } from 'react-redux'
import {signup} from "../actions/User/signup.js"
import {updateSignupForm} from "../actions/User/signup.js"
import {googleSignup} from "../actions/User/googleAuth.js"

//ROOT LEVEL OF COMPONENT DIR
//MOUNTED ON APP COMPONENT


const SignupForm = ({signupFormData, updateSignupForm, googleAuthData, signup}) => {


//EVENT HANDLERS
const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData)  
  }


const handleGoogle = event => {
event.preventDefault()
googleSignup(googleAuthData)
}

  const  handleChange = event => {
      event.preventDefault();
        const {name, value} = event.target
       const  updatedFormInfo = {
        ...signupFormData,
        [name]: value
       }
       updateSignupForm(updatedFormInfo) 
  }


  const GoogleLogo = () => {
    return (
      <img  src={require('../public/googlelogo.png')} alt="" id="google_logo" className="Google_Logo"/>
        )
  }




//RENDERED FORM 

return (
<div className= "signup">
<h3 className="Signup_Header"> SIGNUP </h3>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
       
          placeholder="Create a Username"
            type="text"
            name="name"
          //  onChange={(event) => this.props.handleChange(event)}
            value={signupFormData.name} onChange={handleChange}
          /><br/>
          <input
          placeholder="Create a Password"
          type="text"
            name="password"
         //   onChange={(event) => this.props.handleChange(event)}
            value={signupFormData.password} onChange={handleChange}
          /><label>Password</label><br/>
    <input className="Signup" type="submit" value="signup"/>

        </form>
        {<GoogleLogo/>}
        </div>      
)  
}

//MAP TO PROPS


const mapStateToProps = state => {
  return {
  signupFormData: state.signup
  } 
}



export default connect(mapStateToProps, { updateSignupForm, signup})(SignupForm)

