import { FETCH_POEMS } from '../actions/types'

export function (state = [], action) {
  switch (action.type) {
    case FETCH_POEMS:
      return [...state, action.poem]
      break;
    default:
      return state
  }
}
