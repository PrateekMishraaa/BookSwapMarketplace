import React from 'react'
import Book from "../assets/booktwo.jpg"
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
    const navigate = useNavigate()

    const handleNavigate=()=>[
        navigate("/signup")
    ]
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 h-full">

        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-5xl font-extrabold font-sans text-[#ffd700] drop-shadow-sm">
            Welcome
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            to <span className="text-[#ffd700]">BookSwap Marketplace</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Discover, exchange, and connect over your favorite books. A platform to save money, promote sustainability, and build a reading community.
          </p>
          <button onClick={()=>handleNavigate()} className="mt-4 px-6 cursor-pointer  py-3 bg-[#ffd700] text-black font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300">
            Get Started
          </button>
        </div>

        <div className="md:w-1/2 h-full flex justify-center items-center">
          <img
            src={Book}
            alt="Books"
            className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default HomePage
