import React from 'react'
import forward from '../../public/right-arrow.png'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();
  const HandleGetStarted = ()=>{
      navigate('/tasks')
  }
  const ProgressTracker = ()=>{
    navigate('/progresstracker')
}
  return (
    <div>
       <div className='flex justify-center items-center mt-[50px]'>
          <div >
                <h1 className='text-5xl  '>All your study data </h1>
                <h1 className='text-5xl  text-blue-600 mt-[10px]'>in one place</h1>
                <p className='text-xl text-slate-400 mt-[20px]'>Study Tracker helps you manage all of your <br /> electronic research records, so you can focus less <br /> on juggling spreadsheets, and more on doing  <br /> science.</p>
                <div className='mt-[40px] flex gap-6 '>
                <button onClick={HandleGetStarted} className=' flex border rounded-lg p-[15px] border-black'>Get Started
                 <img className='w-[20px] ml-[2px] ' src={forward} alt="" />
                </button>
                <button  onClick={ProgressTracker}>Progress Tracker</button>
                </div>

          </div>
          <div>
              <img className='' src="https://imgs.search.brave.com/rpu1sKosUfIlJmCUBRcGBKvrBKlgc1np9REBTzNdvDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGltZWNhbXAuY29t/L2Jsb2cvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDQvVGlt/ZUNhbXBfdGltZXNo/ZWV0cy0xMDI0eDcz/Ni5qcGc" alt="" />
          </div>
    </div>
    </div>
  )
}

export default Hero
