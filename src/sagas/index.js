import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_POEMS_SUCCESS, FETCH_POEMS_FAILED} from '../actions/types'

function fetchFromSmartContract(poemNumber, getPoem) {
  return new Promise((resolve, reject) => {
    getPoem(poemNumber, (err, poem) => {
      resolve([poem])
    })
  })
}

function* fetchPoems(action) {
  try {
    // action.payload.getPoem is where the smart contract method is living
    const poems = yield call(fetchFromSmartContract, 0, action.payload)
    yield put({ type: FETCH_POEMS_SUCCESS, poems})
  } catch (e) {
    yield put({ type: FETCH_POEMS_FAILED, message: e.message })
  }
}

function* mySaga() {
  yield takeLatest('LOAD_POEMS', fetchPoems)
}

export default mySaga
