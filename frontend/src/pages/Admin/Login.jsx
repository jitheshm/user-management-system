import React, { useEffect } from 'react'
import LoginComponent from '../../components/Admin/Login/LoginComponent'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Login() {
  const { name, verified } = useSelector((state) => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (verified) {
      navigate('/admin')
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