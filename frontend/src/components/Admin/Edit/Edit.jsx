import React from 'react'

function Edit() {
    return (
        <>
            <section className="createContainer py-5">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Edit an user</h2>
                                        <form id="createUserForm" method="post" action="/admin/update">
                                            <div className="text-danger">
                                                <span>error</span>
                                            </div>
                                            <input type="text" name="id" defaultValue="{{user._id}}" hidden />
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1cg">User Name</label>
                                                <input type="text" name="name" id="name" defaultValue="{{user.name}}" className="form-control form-control-lg" pattern="[a-zA-Z][a-zA-Z ]{2,}" required />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">User Email</label>
                                                <input type="email" name="email" id="email" defaultValue="{{user.email}}" className="
                                  form-control form-control-lg" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required />
                                            </div>
                                            {'{'}{'{'}!-- <div>
                                                <span id="message" className="text-danger" />
                                            </div> --{'}'}{'}'}
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Update</button>
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

export default Edit