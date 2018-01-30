import { FETCH_POEMS_SUCCESS } from '../actions/types'

export default function ({ dispatch }) {
  return next => action => {
    if (action.type === FETCH_POEMS_SUCCESS) {
      setTimeout(() => {
        next(action)
      }, 3000)
    }
  }
}
