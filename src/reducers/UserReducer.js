const initialState = {
id: 0,
name: "",
products: [],
carts: [],
categories: [],
images: []
}


//PARTICULAR TO LOGGED IN USER

export const userReducer = (state = initialState, action) => {
switch(action.type){
case 'SET_USER':
return action.payload 
default:
return state
}
}