import React from 'react'
import graph from '../../public/graph.jpg'
const MiddleDown = () => {
  return (
    <div className='mt-[160px] ml-[400px] flex items-center '>
            <div>
                <img className='w-[600px]' src={graph} alt="" />
            </div>
            <div className='p-[30px] ml-[50px]'>
                <h1 className='text-[32px] p-[15px] text-slate-700'>Study tracker is free <br />  <span className='text-blue-600'>and open source</span></h1>
                <p className='ml-[14px] text-slate-500 text-[19px]'>A study tracker is an open-source  <br />tool that helps users efficiently manage <br /> and monitor their learning progress.</p>
            </div>
    </div>
  )
}

export default MiddleDown
