import React from 'react'
import './Dashboard.css'
function DashboardComponent() {
    return (
        <>

            <section className=" container-fluid">
                <div className="col-lg-10 m-auto">
                    <div className="d-flex justify-content-end ">
                        <a className="btn btn-success m-5" href="/admin/create">Create</a>
                    </div>
                    <div className="table-responsive">
                        
                        <table id="userTable" className="table table-hover  border border-success table-fixed" style={{ tableLayout: 'fixed' }}>
                            <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody><tr>
                                <th scope="row">1</th>
                                <td className="w-25">name</td>
                                <td className="w-25">email</td>
                                <td className="d-flex">
                                    <div>
                                        <a className="btn btn-primary" href="/admin/edit/{{_id}}">Edit</a>
                                        <a className="btn btn-danger" href="/admin/delete?id={{_id}}" onclick="return confirm('Are you sure you want to delete it?')">Delete</a>
                                    </div>
                                </td>
                            </tr></tbody>
                        </table>
                    </div>
                </div>
            </section>

        </>
    )
}

export default DashboardComponent