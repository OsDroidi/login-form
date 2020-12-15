import React from 'react'

function Welcome({ Logout, user }) {
  return (
    <div className='welcome'>
      <h2>
        Welcome, <span>{user.name}</span>
      </h2>
      <button className='btn-lg btn-dark btn-block' onClick={Logout}>
        Logout
      </button>
    </div>
  )
}

export default Welcome
