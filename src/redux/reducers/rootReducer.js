import { combineReducers } from 'redux'
import {
  addNewArticleReducer,
  allArticlesReducer,
  articleByIdReducer,
  eightArticlesReducer,
  featuredArticles,
  firstTwoArticleReducer,
  postCommentReducer,
  twoArticleBottom,
} from './articleReducer'
import { heroSliderReducer } from './heroSliderReducer'
import { getLaligaTableReducer } from './laligaTableReducer'
import {
  getNewsletterSubscribersReducer,
  subscribeNewsletterReducer,
} from './newsLetterReducer'
import { upcomingMatchesReducer } from './upcomingMatchesReducer'
import {
  getAllAdminReducer,
  getAllUserReducer,
  getLoggedInUser,
  loginUserReducer,
  registerUserReducer,
} from './userReducer'
import { addCategoryReducer, getCategoriesReducer } from './categoryReducer'
import { addTagReducer, getTagsReducer } from './tagReducer'

const rootReducer = combineReducers({
  laligaTable: getLaligaTableReducer,
  registerUser: registerUserReducer,
  loginUser: loginUserReducer,
  loggedInUser: getLoggedInUser,
  allUsers: getAllUserReducer,
  allAdmins: getAllAdminReducer,
  firstTwoArticle: firstTwoArticleReducer,
  eightArticles: eightArticlesReducer,
  twoArticleBottom: twoArticleBottom,
  featuredArticles: featuredArticles,
  heroSlider: heroSliderReducer,
  upcomingMatches: upcomingMatchesReducer,
  addNewArticle: addNewArticleReducer,
  allArticles: allArticlesReducer,
  article: articleByIdReducer,
  postComment: postCommentReducer,
  newsletter: subscribeNewsletterReducer,
  newsletterSubscribers: getNewsletterSubscribersReducer,
  addCategory: addCategoryReducer,
  getCategories: getCategoriesReducer,
  addTag: addTagReducer,
  getTags: getTagsReducer,
})

export default rootReducer
