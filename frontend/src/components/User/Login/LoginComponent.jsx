import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { BASEURL } from '../../../constants/constant.json'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
function LoginComponent() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = () => {
        axios.post(`${BASEURL}/api/login`, {
            email: email,
            password: password
        }).then((res) => {
            console.log(res.data);
            if (res.data.status) {
                console.log(res.data.token);
                Cookies.set('token', res.data.token, { expires: 365 })
                navigate('/')
            } else {
                setError(true)
            }
        })
    }

    return (
        <>
            <section className="signupContainer bg-danger py-5">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Login</h2>
                                        <form method="post" action="/login">
                                            {
                                                error &&
                                                <div className="text-danger">
                                                    <span>username or password invalid</span>
                                                </div>
                                            }
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                                <input type="email" name="email" id="form3Example3cg" className="form-control form-control-lg" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                                                    value={email} onChange={(e) => {
                                                        setEmail(e.target.value)
                                                    }} />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                                <input type="password" name="password" id="form3Example4cg" className="form-control form-control-lg"
                                                    value={password} onChange={(e) => {
                                                        setPassword(e.target.value)
                                                    }} />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                    onClick={handleSubmit}>Login</button>
                                            </div>
                                            <div>
                                                <p className="text-center text-muted mt-5 mb-0">Don't have an account? <a href="/signup" className="fw-bold text-body"><u>Register here</u></a></p>
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