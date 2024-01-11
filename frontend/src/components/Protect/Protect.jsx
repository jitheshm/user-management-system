import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Protect({ children }) {
    const { name, verified } = useSelector((state) => state.user)
    const navigate = useNavigate()
    useEffect(() => {
        if (!verified) {
            navigate('/login')
        }

    }, [verified])

    return (
        <>
            {
                verified && children
            }
        </>
    )
}

export default Protect