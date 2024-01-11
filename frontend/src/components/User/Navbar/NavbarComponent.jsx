import React from 'react'
import './Navbar.css'

import { logout } from '../../../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
function NavbarComponent() {
    const { name, verified } = useSelector((state) => state.user)
    const dispatch = useDispatch() 
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav " >

                            {
                                !verified&&<a href="">login</a>
                            }

                            {
                                verified && <li className="nav-item dropdown px-5">
                                    <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {name}
                                    </a>

                                    <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link to={'/profile'} className="dropdown-item" href="#">profile</Link></li>
                                        <li><button className="dropdown-item" onClick={()=>{
                                            Cookies.remove('token');
                                            dispatch(logout())
                                        }}>logout</button></li>
                                       
                                    </ul>

                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        </>

    )
}

export default NavbarComponent