import { combineReducers } from 'redux'
import {
  eightArticlesReducer,
  featuredArticles,
  firstTwoArticleReducer,
  twoArticleBottom,
} from './articleReducer'
import { heroSliderReducer } from './heroSliderReducer'
import { getLaligaTableReducer } from './laligaTableReducer'
import { upcomingMatchesReducer } from './upcomingMatchesReducer'
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
  heroSlider: heroSliderReducer,
  upcomingMatches: upcomingMatchesReducer,
})

export default rootReducer
