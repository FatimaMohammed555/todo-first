import React from 'react'

const Footer = () => {
  return (
<div className="row">
    <div className='bottom-sec'>
    <label htmlFor="all">
      <input type="checkbox" id="all" name="all" />
      All
    </label>
    <p>You have 0 to do</p>
    <button id="delete">Delete</button>
    </div>
  </div>
  )
}

export default Footer
