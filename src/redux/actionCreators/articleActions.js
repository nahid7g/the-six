import axios from 'axios'
import {
  ARTICLE_BY_ID_FAIL,
  ARTICLE_BY_ID_REQUIEST,
  ARTICLE_BY_ID_SUCCESS,
  EIGHT_ARTICLES_FAIL,
  EIGHT_ARTICLES_REQUEST,
  EIGHT_ARTICLES_SUCCESS,
  FEATURED_ARTICLES_FAIL,
  FEATURED_ARTICLES_REQUEST,
  FEATURED_ARTICLES_SUCCESS,
  FIRST_TWO_ARTICLE_FAIL,
  FIRST_TWO_ARTICLE_REQUEST,
  FIRST_TWO_ARTICLE_SUCCESS,
  GET_COMMENTS_REQUEST,
  POST_COMMENT_FAIL,
  POST_COMMENT_REQUIEST,
  POST_COMMENT_SUCCESS,
  TWO_ARTICLES_BOTTOM_FAIL,
  TWO_ARTICLES_BOTTOM_REQUEST,
  TWO_ARTICLES_BOTTOM_SUCCESS,
} from '../actionTypes/actionTypes'

export const getFirstTwoArticle = () => async (dispatch) => {
  try {
    dispatch({ type: FIRST_TWO_ARTICLE_REQUEST })
    const { data } = await axios.get(
      'http://localhost:5000/api/v1/articles/getfirsttwo'
    )
    dispatch({ type: FIRST_TWO_ARTICLE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FIRST_TWO_ARTICLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getEightArticles = () => async (dispatch) => {
  try {
    dispatch({ type: EIGHT_ARTICLES_REQUEST })
    const { data } = await axios.get(
      'http://localhost:5000/api/v1/articles/get-eight-articles'
    )
    dispatch({ type: EIGHT_ARTICLES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: EIGHT_ARTICLES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getTwoArticleBottom = () => async (dispatch) => {
  try {
    dispatch({ type: TWO_ARTICLES_BOTTOM_REQUEST })
    const { data } = await axios.get(
      'http://localhost:5000/api/v1/articles/get-two-articles-bottom'
    )
    dispatch({ type: TWO_ARTICLES_BOTTOM_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: TWO_ARTICLES_BOTTOM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const getFeaturedArticles = () => async (dispatch) => {
  try {
    dispatch({ type: FEATURED_ARTICLES_REQUEST })
    const { data } = await axios.get(
      'http://localhost:5000/api/v1/articles/featured-article'
    )
    dispatch({ type: FEATURED_ARTICLES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FEATURED_ARTICLES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getArticleById = (articleId) => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_BY_ID_REQUIEST })
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/articles/${articleId}`
    )
    dispatch({ type: ARTICLE_BY_ID_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ARTICLE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const postComment = (articleId, comment) => async (dispatch) => {
  try {
    dispatch({ type: POST_COMMENT_REQUIEST })
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const { data } = await axios.post(
      `http://localhost:5000/api/v1/articles/${articleId}/comment`,
      comment,
      config
    )
    console.log(data)
    dispatch({ type: POST_COMMENT_SUCCESS, payload: true })
  } catch (error) {
    dispatch({
      type: POST_COMMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
