import {combineReducers} from 'redux'
import {userReducer} from './UserReducer'
import {LoginFormReducer} from './LoginFormReducer'
import {signupReducer} from './signupreducer'

//ACQUIRED BY REDUX STORE

export const rootReducer = combineReducers({
 user: userReducer,
// images: imageReducer,
// categories: categoriesReducer,
 signup: signupReducer,
// storytext: storytextReducer,
// storytexts: storytextsReducer,
// user: userReducer,
 LoginFormReducer
})