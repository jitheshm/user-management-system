/* eslint-disable react/jsx-key */
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
    const [search, setSearch] = useState("")

    const handleDelete = (userId) => {
        if (confirm('Are you sure you want to delete this user?')) {
            axios.get(`${BASEURL}/api/admin/delete?id=${userId}`, {
                headers:{
                    Authorization: Cookies.get('token') 
                }
            }).then((res)=>{
                console.log(res);
                setUsers(users.filter((user)=>user._id!==userId))
            })
        }

    }
    return (
        <>

            <section className=" container-fluid">
                <div className="col-lg-10 m-auto">
                    <div className="d-flex justify-content-between align-items-center ">
                        <input type="text" placeholder='search' style={{ height: '50px' }} value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }} />
                        <Link className="btn btn-success m-5" to={'/admin/create'}>Create</Link>
                    </div>
                    <div className="table-responsive">

                        <table id="userTable" className="table table-hover  border border-success table-fixed" style={{ tableLayout: 'fixed' }}>
                            <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">Profile Picture</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => {
                                        if (user.name.startsWith(search) || search === "" || user.email.includes(search)) {
                                            return (
                                                // eslint-disable-next-line react/jsx-key

                                                <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td className="w-25"><img src={user.img?user.img:'https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg'} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></td>
                                                    <td className="w-25">{user.name}</td>
                                                    <td className="w-25">{user.email}</td>
                                                    <td className="d-flex">
                                                        <div>
                                                            <Link to={`/admin/edit/${user._id}`} className="btn btn-primary mx-2" >Edit</Link>
                                                            <button className="btn btn-danger mx-2" onClick={() => {

                                                                handleDelete(user._id)
                                                            }}>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>

                                            )
                                        } else {
                                            return null
                                        }

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