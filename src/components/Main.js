import React, { useState, useEffect } from 'react'
import LoginForm from './LoginForm'
import Welcome from './Welcome'

function Home() {
  // initial information to pass the login form
  const adminUser = {
    username: 'admin',
    password: 'admin123',
  }

  let msg = (
    <div>
      <span className='font-weight-bold'>Details do not match!</span>
      <br />
      Please Try again
    </div>
  )

  //   React hooks
  const [user, setUser] = useState({ name: '', username: '' })
  const [error, setError] = useState('')

  //   check if the information written from the user is equivalent to our initial admin User information
  const Login = (details) => {
    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
        username: details.username,
      })
    } else {
      setError(msg)
    }
  }

  //   function for the logout button to go back to the login form and reset the information
  const Logout = () => {
    setUser({ name: '', username: '' })
  }

  useEffect(() => {
    const data = localStorage.getItem('login');
    if(data) {
      setUser(JSON.parse(data))
    }
 
  }, [])

useEffect(() => {
  localStorage.setItem('login', JSON.stringify(user))
})
  return (
    // <> is a short syntax to declaring React.Fragment
    <>
      {user.username !== '' ? (
        // to get the Welcome Component it is the page for the successful login
        <Welcome Logout={Logout} user={user}  />
      ) : (
        // if the information is wrong the user will go back to the login form again
        <LoginForm Login={Login} error={error} />
      )}
    </>
  )
}

export default Home
