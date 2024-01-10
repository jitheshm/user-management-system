import React from 'react'
import './Signup.css'
function SignupComponent() {
    return (
        <>
            <section className="signupContainer bg-danger py-5">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                        <form id="signupForm">
                                            <div className='my-4' >

                                                <div className='m-auto' style={{ display: 'flex', width: '100px', height: '100px', borderRadius: "50px",  backgroundImage: `url("https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg")`, backgroundSize:"cover" }}>
                                                    <input name="files" type="file" title=' ' />
                                                </div>
                                            </div>

                                            <div className="text-danger">
                                                <span>error</span>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1cg">Name</label>
                                                <input type="text" name="name" id="name" className="form-control form-control-lg" pattern="[a-zA-Z][a-zA-Z ]{2,}" required />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">Email</label>
                                                <input type="email" name="email" id="email" className="form-control form-control-lg" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                                <input type="password" name="password" id="password" className="form-control form-control-lg" required />
                                            </div>
                                            <div>
                                                <span id="message" className="text-danger" />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cdg">Confirm password</label>
                                                <input type="password" name="repassword" id="confirm" className="form-control form-control-lg" required />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                            </div>
                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login" className="fw-bold text-body"><u>Login here</u></a></p>
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

export default SignupComponent