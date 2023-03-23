import { combineReducers } from 'redux'
import { getLaligaTableReducer } from './laligaTableReducer'

const rootReducer = combineReducers({
  laligaTable: getLaligaTableReducer,
})

export default rootReducer
