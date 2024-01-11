import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios'
import Cookies from 'js-cookie';
import { BASEURL } from '../../../constants/constant.json'
import { useSelector, useDispatch } from 'react-redux'
import { verify } from '../../../features/user/userSlice';
function Auth({ children }) {
    const [loading, setloading] = useState(true)
    const { name, verified } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("kk"+Cookies.get('token'));
        if (verified) {
            setloading(false)
        } else {
            axios.get(`${BASEURL}/api/auth`, {
                headers: {
                    Authorization: Cookies.get('token')
                }
            }).then((res) => {
                console.log(res);
                if (res.data.success) {
                    console.log("haii");
                    dispatch(verify({ name: res.data.data.name }))
                    
                }setloading(false)
 
            })
        }
    }, [])
    return (
        <>
            {
                loading ? <div><p>loading</p></div> : children
            }
        </>
    )
}

export default Auth