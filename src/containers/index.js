import React from 'react'
import Header from '../components/Header/Header'
import PoemContainer from '../containers/PoemContainer/PoemContainer'

const AppContainer = (props) => {
  return (
    <div>
      <Header title="Poetry" subtitle="Zubair Ahmed" />
      <PoemContainer />
    </div>
  )
}

export default AppContainer
