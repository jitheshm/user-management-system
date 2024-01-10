import React from 'react'
import './Login.css'
function Login() {
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
                                            <div className="text-danger">
                                                <span>{'{'}{'{'}error{'}'}{'}'}</span>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">User Name</label>
                                                <input type="text" name="userId" id="adminName" className="form-control form-control-lg" pattern="[a-zA-Z][a-zA-Z ]{2,}" />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                                <input type="password" name="password" id="adminPassword" className="form-control form-control-lg" />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
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

export default Login