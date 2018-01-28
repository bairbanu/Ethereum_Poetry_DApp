import React from 'react'
import './Poem.css'

const Poem = ({ poem }) => {
  return (
    <div className="modal">
      <h1>{ poem.title }</h1>
      <p>{ poem.body }</p>
      <p>{ poem.author }</p>
      <p>{ poem.credits }</p>
    </div>
  )
}

export default Poem
