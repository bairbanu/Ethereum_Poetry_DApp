import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import { createLogger } from 'redux-logger'
import createSageMiddleware from 'redux-saga'

import AppContainer from './containers'
import reducers from './reducers'
import mySaga from './sagas'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSageMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(
    loggerMiddleware,
    sagaMiddleware
  )
)

sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={ store }>
    <AppContainer />
  </Provider>,
  document.getElementById('app-root'))
