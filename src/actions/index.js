import { FETCH_POEMS_REQUEST } from './types'

export function fetchPoemsRequest(getPoem) {
  return {
    type: FETCH_POEMS_REQUEST,
    payload: getPoem
  }
}
