import React from 'react'
import './Backdrop.css'

const Backdrop = (prop) => {
  return (
    <div onClick={prop.onClick} className="Backdrop"></div>
  )
}

export default Backdrop;