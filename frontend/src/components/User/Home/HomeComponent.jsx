import React, { useEffect, useState } from 'react'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import Cookies from 'js-cookie'
import { BASEURL } from '../../../constants/constant.json'
function HomeComponent() {
    const { name, verified } = useSelector((state) => state.user)
    const [imagePreview, setImagePreview] = useState(null);
    useEffect(() => {
      axios.get(`${BASEURL}/api/profile`, {
                headers: {
                    Authorization: Cookies.get('token')
                }
            }).then((res)=>{
                console.log(res)
                
                setImagePreview(res.data.data.img)
            
      })
    }, [])
    
    return (
        <>
            <section className="container-fluid home bg-danger ">
                <div className="content d-flex align-items-center">
                    <div className="col-12 col-md-6 m-auto text-white text-center border border-light p-5">
                    <img src={imagePreview?imagePreview:'https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg'} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                        <h1 className="text-warning ">
                            Hi, {name}
                        </h1>
                        <h1 className="text-warning mb-5">
                            Welcome To Home Page
                        </h1>
                        
                        
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeComponent