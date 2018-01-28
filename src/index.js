import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import Header from './components/Header/Header'
import AppContainer from './containers'
import reducers from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(
    loggerMiddleware
  )
)

ReactDOM.render(
  <Provider store={ store }>
    <AppContainer />
  </Provider>,
  document.getElementById('app-root'))
