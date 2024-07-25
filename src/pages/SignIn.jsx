import React from 'react'
import { useState } from "react";
import { FaEyeSlash , FaEye } from "react-icons/fa6";
import {Link} from "react-router-dom"
import OAuth from '../components/OAuth';


export default function SignIn() {
const [showPassword , setShowPassword] = useState(false)
const [formData , setFormData] =useState({
  email: "",
  password: "", 
});
const {email ,password} = formData; 

function onChange (e){
  setFormData((prevState)=>({
    ...prevState,
    [e.target.id]: e.target.value,
  }));
}




  return (
    <section>
     <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
     <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img src="https://images.unsplash.com/photo-1522050212171-61b01dd24579?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG9tZSUyMGV4dGVyaW9yfGVufDB8fDB8fHww" alt="Modern Home Exterior" className="w-full rounded-2xl"/>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20" >
          {/* Form */}
          <form> 
          <input type="email" id="email" value={email} className="w-full px-4 py-2 text-xl text-gray-700 bg-white  border-gray-300 rounded transition ease-in-out" placeholder="Email address" onChange={onChange}/>
          <div className="relative mb-6">
          <input type={showPassword ? "text" : "password"} id="password" value={password} className="w-full mt-3 px-4 py-2 rounded text-xl border-gray-300 text-gray-700 bg-white transition ease-in-out" placeholder="Password" onChange={onChange}/>
          { showPassword ?  (
            <FaEyeSlash className="absolute right-3 top-6 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=>!prevState)} />
          ) : (
            <FaEye className="absolute right-3 top-6 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=>!prevState)} />
          )
        }
          </div>
          {/* Links */}
          <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
            <p className="mb-6" >Don't have account?   <Link to="/sign-up" className="text-red-500 hover:text-red-600 transition duration:200 ease-in-out ml-1">Register</Link></p>
            <p>
              <Link to="/forgot-password" className="text-blue-500 hover:text-blue-600 transition duration:200 ease-in-out">Forgot password?</Link>
            </p>
          </div>
          {/* Buttons */}
          <button type="submit" className="w-full bg-blue-600 text-white px-7 py-3 text-sm  font-medium uppercase rounded shadow-nd hover:bg-blue-700 transition duration:200 ease-in-out hover:shadow-lg active:bg-blue-800">Sign IN</button>
          <div className="my-4 items-center flex before:border-t  before:flex-1  before:border-gray-300 after:border-t  after:flex-1  after:border-gray-300 ">
            <p className="text-center font-semibold mx-4"> OR</p>
          </div >
          <OAuth/>
          </form>
        </div>
     </div>
    </section>
  )
}
