import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_POEMS_SUCCESS, FETCH_POEMS_FAILED} from '../actions/types'

function fetchFromSmartContract(poemNumber, getPoem) {
  return new Promise((resolve, reject) => {
    getPoem(poemNumber, (err, poem) => {
      resolve(poem)
    })
  })
}

function* fetchPoems(action) {
  try {
    const poems = []
    let poemCounter = 0
    while (poems[poems.length - 1] !== '') {
      poems.push(yield call(fetchFromSmartContract, poemCounter, action.payload))
      poemCounter++
    }
    yield put({ type: FETCH_POEMS_SUCCESS, poems})
  } catch (e) {
    yield put({ type: FETCH_POEMS_FAILED, message: e.message })
  }
}

function* mySaga() {
  yield takeLatest('LOAD_POEMS', fetchPoems)
}

export default mySaga
