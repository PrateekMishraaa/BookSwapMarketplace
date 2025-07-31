import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Mobile: '',
    Password: '',
  });

  const [visiblePassword, setVisiblePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setVisiblePassword((prev) => !prev);
  };

  const handleNavigate=()=>{
    navigate("/login")
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    if(!formData.FirstName || !formData.LastName || !formData.Email || !formData.Mobile ||  !formData.Password){
        toast.error("All fields are required")
    }
    if(formData.Password.length < 8){
        toast.error("Password should be atleast 8 characters or more")
    }
    try{
            const response = await axios.post("http://localhost:4000/api/signup",formData,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            console.log(response.data)
            setFormData(response.data)
            setTimeout(()=>{
                    toast.success("User created successfully | Please wait your are redirecting to login page")
                   handleNavigate()
            },2000)
    }catch(error){
        console.log
            toast.error("something went wrong | Please re-check")
    }
   
  };

  return (
    <>
      <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
          
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                placeholder="Prateek"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                placeholder="Mishra"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
              />
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
              />
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile</label>
              <input
                type="text"
                name="Mobile"
                value={formData.Mobile}
                onChange={handleChange}
                placeholder="1234567890"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
              />
            </div>

      
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={visiblePassword ? 'text' : 'password'}
                  name="Password"
                  value={formData.Password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="mt-1 w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
                />
                <span
                  onClick={handleShowPassword}
                  className="absolute top-3 right-3 text-gray-600 cursor-pointer"
                >
                  {visiblePassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-300 transition-all duration-300"
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-yellow-400 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default SignUp;
