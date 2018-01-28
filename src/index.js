import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Header from './components/Header/Header'

import AppContainer from './containers'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <AppContainer />
  </Provider>,
  document.getElementById('app-root'))
