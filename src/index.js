import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/Header'

const AppContainer = (props) => {
  return (
    <Header title="Poetry" subtitle="Zubair Ahmed" />
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('root'))
