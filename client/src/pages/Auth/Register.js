import React ,{useState}from 'react'
import Layout from '../../components/Layout/Layout'
import "../../styles/AuthStyles.css";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

const Register = () => {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [phone, setPhone]=useState("")
    const [address, setAddress]=useState("")
    const navigate=useNavigate()

    const handleSubmit= async (e)=>{
        e.preventDefault()
      try{

        const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address});
        if(res && res.data.success){
            toast.success(res && res.data.message)
            navigate('/login')
        }else{
            toast.error(res.data.message)
        }
   
      }catch(error){
        console.log(error)
     toast.error('something went wrong')
      }
    }
  return (
   <Layout>
    <div className="form-container">
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your name'required aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
   <input type="email"value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder='Enter your email' id="exampleInputEmail" required aria-describedby="emailHelp" />
    
  </div>

  <div className="mb-3">
    
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' className="form-control" required id="exampleInputPassword1" />
  </div>

  <div className="mb-3">
    
    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} required placeholder='Enter phone no' className="form-control" id="exampleInputphone" aria-describedby="emailHelp" />
    
  </div>

  <div className="mb-3">
 
    <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} required className="form-control" id="exampleInputAddress" placeholder='Enter your address' aria-describedby="emailHelp" />
    
  </div>
  
  <button type="submit" className="btn btn-primary">Register</button>
</form>

    </div>
   </Layout>
  )
}

export default Register