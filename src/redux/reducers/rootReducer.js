import { combineReducers } from 'redux'
import {
  eightArticlesReducer,
  featuredArticles,
  firstTwoArticleReducer,
  twoArticleBottom,
} from './articleReducer'
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
  firstTwoArticle: firstTwoArticleReducer,
  eightArticles: eightArticlesReducer,
  twoArticleBottom: twoArticleBottom,
  featuredArticles: featuredArticles,
})

export default rootReducer
