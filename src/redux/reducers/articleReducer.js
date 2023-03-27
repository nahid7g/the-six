import {
  EIGHT_ARTICLES_FAIL,
  EIGHT_ARTICLES_REQUEST,
  EIGHT_ARTICLES_SUCCESS,
  FEATURED_ARTICLES_FAIL,
  FEATURED_ARTICLES_REQUEST,
  FEATURED_ARTICLES_SUCCESS,
  FIRST_TWO_ARTICLE_FAIL,
  FIRST_TWO_ARTICLE_REQUEST,
  FIRST_TWO_ARTICLE_SUCCESS,
  TWO_ARTICLES_BOTTOM_FAIL,
  TWO_ARTICLES_BOTTOM_REQUEST,
  TWO_ARTICLES_BOTTOM_SUCCESS,
} from '../actionTypes/actionTypes'

export const firstTwoArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case FIRST_TWO_ARTICLE_REQUEST:
      return { loading: true }
    case FIRST_TWO_ARTICLE_SUCCESS:
      return { loading: false, data: action.payload }
    case FIRST_TWO_ARTICLE_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}

export const eightArticlesReducer = (state = {}, action) => {
  switch (action.type) {
    case EIGHT_ARTICLES_REQUEST:
      return { loading: true }
    case EIGHT_ARTICLES_SUCCESS:
      return { loading: false, data: action.payload }
    case EIGHT_ARTICLES_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}
export const twoArticleBottom = (state = {}, action) => {
  switch (action.type) {
    case TWO_ARTICLES_BOTTOM_REQUEST:
      return { loading: true }
    case TWO_ARTICLES_BOTTOM_SUCCESS:
      return { loading: false, data: action.payload }
    case TWO_ARTICLES_BOTTOM_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}
export const featuredArticles = (state = {}, action) => {
  switch (action.type) {
    case FEATURED_ARTICLES_REQUEST:
      return { loading: true }
    case FEATURED_ARTICLES_SUCCESS:
      return { loading: false, data: action.payload }
    case FEATURED_ARTICLES_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}
