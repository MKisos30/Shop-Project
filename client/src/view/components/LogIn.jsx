import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
  function handleLogIn(event) {
    event.preventDefault()

    const email = event.target.elements.email.value
    const password = event.target.elements.password.value

    console.log(email, password)
  }

  return (
    <div>
        <h3>LogIn</h3>
        <form onSubmit={handleLogIn}>
            <input type="email" name="email" placeholder="E-mail"/>
            <input type="text" name="password" placeholder="password"/>
            <button type="submit">LogIn</button>
        </form>
        <Link to="/auth/register">Register</Link>
    </div>

  )
}

export default LogIn