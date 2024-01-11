import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SignupComponent from '../../components/User/Signup/SignupComponent'
function Signup() {
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

                !verified && <SignupComponent />
            }
        </>
    )
}

export default Signup