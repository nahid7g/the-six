import {
  SUBSCRIBE_NEWSLETTER_FAIL,
  SUBSCRIBE_NEWSLETTER_REQUIEST,
  SUBSCRIBE_NEWSLETTER_SUCCESS,
} from '../actionTypes/actionTypes'

export const subscribeNewsletterReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBE_NEWSLETTER_REQUIEST:
      return { loading: true }
    case SUBSCRIBE_NEWSLETTER_SUCCESS:
      return { loading: false, success: action.payload }
    case SUBSCRIBE_NEWSLETTER_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}
