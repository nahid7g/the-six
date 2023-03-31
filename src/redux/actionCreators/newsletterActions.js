import axios from 'axios'
import {
  SUBSCRIBE_NEWSLETTER_FAIL,
  SUBSCRIBE_NEWSLETTER_REQUIEST,
  SUBSCRIBE_NEWSLETTER_SUCCESS,
} from '../actionTypes/actionTypes'

export const subscribeNewsletter = (userData) => async (dispatch) => {
  try {
    dispatch({ type: SUBSCRIBE_NEWSLETTER_REQUIEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios.post(
      'http://localhost:5000/api/v1/newsletter',
      userData,
      config
    )
    dispatch({ type: SUBSCRIBE_NEWSLETTER_SUCCESS, payload: true })
  } catch (error) {
    dispatch({
      type: SUBSCRIBE_NEWSLETTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
