import React from 'react'
import Login from '../../components/Login/Login'
import Navbar from '../../components/Navbar/Navbar'

const AuthLogin = () => {
  return (
    <div>
      <Navbar />
      <main className='flex justify-center items-center '>
      <Login />
      </main>
    </div>
  )
}

export default AuthLogin
