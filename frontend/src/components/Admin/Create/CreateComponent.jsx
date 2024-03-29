import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASEURL } from '../../../constants/constant.json'
import Cookies from 'js-cookie'
function CreateComponent() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = () => {
        if (name.trim() === "") {
            alert("Please enter name.");
            return;
          }
          if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
          }   
          if(password===""){  
            alert("Please enter password");
            return;   
          }
        axios.post(`${BASEURL}/api/admin/create`, {
            name: name,
            email: email,
            password: password
        }, {
            headers: {
                Authorization: Cookies.get('token')
            }
        }).then((res) => {
            console.log(res.data.success);
            if (res.data.success) {
                navigate('/admin/')
            } else {
                setError(true)
            }

        })    
    }
    return (
        <>
            <section className="signupContainer  py-5">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an User</h2>
                                        <form id="signupForm">

                                            {error && <div className="text-danger">
                                                <span>email id already exist</span>
                                            </div>}
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1cg">Name</label>
                                                <input type="text" name="name" id="name" className="form-control form-control-lg" pattern="[a-zA-Z][a-zA-Z ]{2,}" required
                                                    value={name} onChange={(e) => {
                                                        setName(e.target.value)
                                                    }} />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">Email</label>
                                                <input type="email" name="email" id="email" className="form-control form-control-lg" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required
                                                    value={email} onChange={(e) => {
                                                        setEmail(e.target.value)
                                                    }} />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                                <input type="password" name="password" id="password" className="form-control form-control-lg" required
                                                    value={password} onChange={(e) => {
                                                        setPassword(e.target.value)
                                                    }} />
                                            </div>
                                            <div>
                                                <span id="message" className="text-danger" />
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                    onClick={handleSubmit}>Create</button>
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

export default CreateComponent