import { LOAD_POEMS } from './types'

export function loadPoems(getPoem) {
  return {
    type: LOAD_POEMS,
    payload: getPoem
  }
}
