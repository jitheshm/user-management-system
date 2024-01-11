import React, { useState } from 'react'
import './Login.css'

import axios from 'axios'
import { BASEURL } from '../../../constants/constant.json'
import { useSelector, useDispatch } from 'react-redux'
import { verify } from '../../../features/user/userSlice'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
function LoginComponent() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const { verified } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate() 
    const handleSubmit=()=>{
        axios.post(`${BASEURL}/api/admin/login`, {
            userId: name,
            password: password
        }).then((res)=>{
            console.log(res.data);
            if (res.data.success) {
                console.log(res.data.data.name);
                Cookies.set('token', res.data.token, { expires: 365 })
                dispatch(verify({ name: res.data.data.name }))
                navigate('/admin/')
            } else {
                setError(true)
            }
        })
    }
    return (
        <>
            <section className="signupContainer py-5">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Admin Login</h2>
                                        <form method="post" action="/admin/login">
                                        {
                                                error &&
                                                <div className="text-danger">
                                                    <span>username or password invalid</span>
                                                </div>
                                            }
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">User Name</label>
                                                <input type="text" name="userId" id="adminName" className="form-control form-control-lg" pattern="[a-zA-Z][a-zA-Z ]{2,}" 
                                                value={name} onChange={(e)=>{
                                                    setName(e.target.value)
                                                }}/>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                                <input type="password" name="password" id="adminPassword" className="form-control form-control-lg" 
                                                value={password} onChange={(e)=>{
                                                    setPassword(e.target.value)
                                                }}/>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                onClick={handleSubmit}>Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LoginComponent