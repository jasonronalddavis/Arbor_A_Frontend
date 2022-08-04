

export const userAttr = user => {
  return {
    type: "USER_ATTR",
   payload: user.attributes 
       }
}

export const setUser = user => {
  //debugger;
  return {
   type: "SET_USER",
  payload: user.attributes
      }
  }
  




export const clearUser = () => {
  return {
    type: "CLEAR_USER"
  }
}


export const deleteUser = userId => {
return {
type: "DELETE_USER",
userId
}
}


//asynchronpus action creators 

export const login = credentials => {
  console.log("credentials are",credentials)
return dispatch => {
 return fetch("http://localhost:3000/api/v1/login",{
   credentials: "include",
  method: "post",
 headers : { 
      'Content-Type': 'application/json'
        },
    body: JSON.stringify(credentials)
 })

 .then(r => r.json())
 .then( resp => {

if(resp.error){
  alert(resp.error)
} else {
 // debugger;
dispatch(setUser(resp.data))
}
 })
 .catch(console.log())
}
}




export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      'Accept': 'application/json'
      },    
    })
      .then(r => r.json())
      .then(response => {
        if (response.error){
          alert(response.error)
        } else {
        // debugger;
        //const products = response.data.relationships.products.data
          dispatch(setUser(response.data)) 
           dispatch(userAttr(response.data))  
        }
      })
      .catch(console.log())
  }
}




export const logout = () => {
  return  dispatch => {
    dispatch(clearUser())
    return fetch("http://localhost:3000/api/v1/logout", {
    credentials: "include",
    method: "DELETE"
    })
    }
  }
  



export const destroyUser = (userId) => {
 return  dispatch => {
    return fetch("http://localhost:3000/api/v1/users/{userId}", {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteUser(userId))
         // history.push(`/users`)
          // go somewhere else --> user show?
        }
      })
      .catch(console.log)
  }

}
