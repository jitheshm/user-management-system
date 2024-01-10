import React from 'react'
import './Home.css'
function Home() {
    return (
        <>
            <section className="container-fluid home bg-danger ">
                <div className="content d-flex align-items-center">
                    <div className="col-12 col-md-6 m-auto text-white text-center border border-light p-5">
                        <h1 className="text-warning ">
                            Hi, jithesh
                        </h1>
                        <h1 className="text-warning mb-5">
                            Welcome To Home Page
                        </h1>
                        <form action="/logout" method="post"><button className="btn btn-light btn-block m-auto col-8 col-md-4" type="submit">logout</button></form>
                        <a type="button" href="/logout" className="btn btn-light btn-block m-auto col-8 col-md-4">Logout</a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home