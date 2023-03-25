import { combineReducers } from 'redux'
import { getLaligaTableReducer } from './laligaTableReducer'
import {
  getLoggedInUser,
  loginUserReducer,
  registerUserReducer,
} from './userReducer'

const rootReducer = combineReducers({
  laligaTable: getLaligaTableReducer,
  registerUser: registerUserReducer,
  loginUser: loginUserReducer,
  loggedInUser: getLoggedInUser,
})

export default rootReducer
