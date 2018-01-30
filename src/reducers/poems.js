import {
  FETCH_POEMS_SUCCESS,
  FETCH_POEMS_FAILED
} from '../actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_POEMS_SUCCESS:
      return [...state, ...action.poems]
    case FETCH_POEMS_FAILED:
      throw Error('Smart contract connection failed')
    default:
      return state
  }
}
