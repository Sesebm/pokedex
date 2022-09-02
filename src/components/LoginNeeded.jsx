import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const LoginNeeded = () => {

  const nameTrainer = useSelector(state => state.nameSlice)


    if(nameTrainer) {
      return <Outlet />
    } else {
      return <Navigate to='/' />
    }
  
}

export default LoginNeeded