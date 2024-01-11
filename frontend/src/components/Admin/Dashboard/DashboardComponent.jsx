import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { BASEURL } from '../../../constants/constant.json'
import Cookies from 'js-cookie';
import axios from 'axios'
import { Link } from 'react-router-dom';
function DashboardComponent() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(`${BASEURL}/api/admin/`, {
            headers: {
                Authorization: Cookies.get('token')
            }
        }).then((res) => {
            console.log(res.data.data);
            setUsers(res.data.data)
        })
    }, [])
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
                            <tbody>
                                {
                                    users.map((user,index) => {
                                        return (
                                            // eslint-disable-next-line react/jsx-key
                                            <tr>
                                                <th scope="row">{index+1}</th>
                                                <td className="w-25">{user.name}</td> 
                                                <td className="w-25">{user.email}</td>
                                                <td className="d-flex">
                                                    <div>
                                                        <Link to={`/admin/edit/${user._id}`} className="btn btn-primary mx-2" >Edit</Link>
                                                        <a className="btn btn-danger mx-2"  >Delete</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </>
    )
}

export default DashboardComponent