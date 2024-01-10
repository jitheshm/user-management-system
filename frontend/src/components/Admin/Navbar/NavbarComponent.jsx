import React from 'react'

function NavbarComponent() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="/admin">Admin Panel</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse col-lg-10" id="navbar">
                            {'{'}{'{'}!-- <form className="d-flex ">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light text-white ml-2" type="submit">Search</button>
                            </form> --{'}'}{'}'}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <form action="/admin/logout" method="post"><button className="btn text-white" type="submit" style={{ backgroundColor: 'transparent', border: 'none' }}>logout</button></form>
                                    {'{'}{'{'}!-- <a className="nav-link text-light" aria-current="page" href="/admin/logout">Logout</a> --{'}'}{'}'}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default NavbarComponent