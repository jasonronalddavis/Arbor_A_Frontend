


export const updateSignupForm = userData => {
    return {
      type: "UPDATE_SIGNUP_FORM",
   userData
    }
  }
  
  
  
  export const resetSignupForm = () => {
    return {
      type: "RESET_SIGNUP_FORM"
    }
  }
  
  
  
  
  export const setUser = user => {
   //debugger;
    return {
     type: "SET_USER",
    payload: user
        }
    }
    
  
  //ASYNC
  
  
  export const googleSignup = (credentials) => {
    return dispatch => {
    const userInfo = {
        user: credentials
      }
      return fetch("http://localhost:3000/api/v1/auth/google_oauth2", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setUser(response))
            dispatch(resetSignupForm())
          }
        })
        .catch(console.log())
    }
  }