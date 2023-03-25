import {
  LOGGED_IN_USER_FAIL,
  LOGGED_IN_USER_REQUEST,
  LOGGED_IN_USER_RESET,
  LOGGED_IN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from '../actionTypes/userActionTypes'

export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { loading: true }
    case REGISTER_USER_SUCCESS:
      return { loading: false, success: true }
    case REGISTER_USER_FAIL:
      return { loading: false, message: action.payload, success: false }
    default:
      return state
  }
}

export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { loading: true }
    case LOGIN_USER_SUCCESS:
      return { loading: false, success: true, data: action.payload }
    case LOGIN_USER_FAIL:
      return { loading: false, message: action.payload, success: false }
    case LOGOUT_USER:
      return {}
    default:
      return state
  }
}

export const getLoggedInUser = (state = {}, action) => {
  switch (action.type) {
    case LOGGED_IN_USER_REQUEST:
      return { loading: true }
    case LOGGED_IN_USER_SUCCESS:
      return { loading: false, data: action.payload }
    case LOGGED_IN_USER_FAIL:
      return { loading: false }
    case LOGGED_IN_USER_RESET:
      return {}
    default:
      return state
  }
}
