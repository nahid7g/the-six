import {
  HERO_SLIDER_FAIL,
  HERO_SLIDER_REQUIEST,
  HERO_SLIDER_SUCCESS,
} from '../actionTypes/actionTypes'

export const heroSliderReducer = (state = {}, action) => {
  switch (action.type) {
    case HERO_SLIDER_REQUIEST:
      return { loading: true }
    case HERO_SLIDER_SUCCESS:
      return { loading: false, data: action.payload }
    case HERO_SLIDER_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}
