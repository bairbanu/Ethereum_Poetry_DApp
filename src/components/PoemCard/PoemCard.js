import React from 'react'

const PoemCard = (props) => {
  return (
    <div className="poem-card-container">
      <h1 className="poem-card-title">{ props.title }</h1>
      <p className="poem-card-body">{ props.body }</p>
    </div>
  )
}

export default PoemCard
