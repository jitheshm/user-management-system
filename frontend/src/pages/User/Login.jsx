import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoginComponent from '../../components/User/Login/LoginComponent'
function Login() {
  const { name, verified } = useSelector((state) => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (verified) {
      navigate('/')
    }


  }, [verified])

  return (
    <>
      {
        !verified && <LoginComponent />
      }
    </>
  )
}

export default Login