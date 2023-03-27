import axios from 'axios'
import {
  HERO_SLIDER_FAIL,
  HERO_SLIDER_REQUIEST,
  HERO_SLIDER_SUCCESS,
} from '../actionTypes/actionTypes'

export const getHeroslider = () => async (dispatch) => {
  try {
    dispatch({ type: HERO_SLIDER_REQUIEST })
    const { data } = await axios.get('http://localhost:5000/api/v1/heroslider')
    dispatch({ type: HERO_SLIDER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: HERO_SLIDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
