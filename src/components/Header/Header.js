import React from 'react'
import './header.css'

const Header = (props) => {
  return (
    <div className="header-container">
      <h1 className="header-title">{ props.title }</h1>
      <h2 className="header-subtitle">{ props.subtitle }</h2>
    </div>
  )
}

export default Header
