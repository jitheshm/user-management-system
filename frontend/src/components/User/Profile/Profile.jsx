import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { BASEURL } from '../../../constants/constant.json'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../../../features/user/userSlice'
function Profile() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(false)
    const [id, setId] = useState("")
    const navigate = useNavigate() 
    const dispatch = useDispatch()
    const { verified } = useSelector((state) => state.user)
    const [imagePreview, setImagePreview] = useState(null);
    useEffect(() => {
     axios.get(`${BASEURL}/api/profile`, {
            headers: {
                Authorization: Cookies.get('token')
            }
        }).then((res)=>{
            console.log(res)
            setName(res.data.data.name)
            setEmail(res.data.data.email)
            setId(res.data.data.id)
            setImagePreview(res.data.data.img)   
        })
     
    }, [])

    const handleUpdate=()=>{
        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
          }
        
          if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
          }
          
        const formData = new FormData();
        if(selectedFile!=null){
            formData.append('image', selectedFile);
        }
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('id', id);

        axios.post(`${BASEURL}/api/profile/update`,formData,{
            headers:{
                Authorization: Cookies.get('token'),
                'content-type': 'multipart/form-data'
            }
        }).then((res)=>{
            console.log(res.data.success);
            if(res.data.success){
                Cookies.set('token', res.data.token, { expires: 365 })
                dispatch(update({name:name})) 
                navigate('/')
            }else{
                setError(true)
            }
        })
    }
    const handleFileChange=(e)=>{
        setSelectedFile(e.target.files[0]);
        let file=e.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
          } else {
            setImagePreview(null);
          }
    }
    
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

                                                <div className='m-auto' style={{ display: 'flex', width: '100px', height: '100px', borderRadius: "50px", backgroundImage: imagePreview!=null ? `url(${imagePreview})` :`url("https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg")`, backgroundSize: "cover" }}>
                                                    <input name="image" type="file" title=' ' onChange={handleFileChange}/>
                                                </div>
                                            </div>

                                            {/* <div className="text-danger">
                                                <span>error</span>
                                            </div> */}
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1cg">Name</label>
                                                <input type="text" name="name" id="name" className="form-control form-control-lg" pattern="[a-zA-Z][a-zA-Z ]{2,}" required
                                                    value={name} onChange={(e) => {
                                                        setName(e.target.value)
                                                    }} />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">Email</label>
                                                <input type="email" name="email" id="email" className="form-control form-control-lg" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required
                                                    value={email} onChange={(e) => {
                                                        setEmail(e.target.value)
                                                    }} />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                                <input type="password" name="password" id="password" className="form-control form-control-lg" required
                                                    value={password} onChange={(e) => {
                                                        setPassword(e.target.value)
                                                    }} />
                                            </div>
                                            <div>
                                                <span id="message" className="text-danger" /> 
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                    onClick={()=>{
                                                        handleUpdate()
                                                    }}>update</button>
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

export default Profile