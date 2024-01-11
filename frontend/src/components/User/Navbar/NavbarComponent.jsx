import React from 'react'
import './Navbar.css'
import { useSelector } from 'react-redux'
function NavbarComponent() {
    const { name, verified } = useSelector((state) => state.user)
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
                                        <li><a className="dropdown-item" href="#">profile</a></li>
                                        <li><a className="dropdown-item" href="#">logout</a></li>
                                       
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