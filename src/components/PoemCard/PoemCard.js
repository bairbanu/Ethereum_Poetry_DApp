import React from 'react'

const PoemCard = (props) => {
  const _firstTwoLines = props.body.split('/line').splice(0, 2)
  const firstTwoLines = _firstTwoLines.map(line => (<span key={ line }> { line } <br/> </span>))

  return (
    <div
      className="poem-card-container"
      onClick={ props.showModalWithPoem.bind(null, props.title) }>
        <h1 className="poem-card-title">{ props.title }</h1>
        { firstTwoLines }
    </div>
  )
}

export default PoemCard
