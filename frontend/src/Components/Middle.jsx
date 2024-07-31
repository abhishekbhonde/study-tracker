import React from 'react'
import fourth from '../../public/fourth.jpeg'
import fifth from '../../public/fifth.jpeg'
import second from '../../public/second.jpeg'
import six from '../../public/six.jpeg'
import third from '../../public/third.webp'
const Middle = () => {
  return (
    <div className=' mt-[230px] w-full max-h-max'>
      <div className='flex justify-center items-center flex-col '>
        <h1 className='text-3xl'>The hub for your <span className='text-blue-600'>study data and management.</span></h1>
        <h1 className='text-[19px] text-center text-slate-400 mt-[20px]'>Study Tracker makes study management easier by tracking your progress of study <br /> and study management</h1>
      </div>
      <div className='flex w-[1250px] ml-[300px] justify-center items-center flex-wrap '>
        <div className='p-[50px]'>
          <div className='flex  justify-center items-center'>
            <img className='w-[230px]'  src={fourth} alt="" />
            <div>
              <h1 className='text-xl font-bold p-[20px] '>Standardization</h1>
              <p className='text-[17px] text-slate-400 ml-[10px]'>Unique study IDs, managed folder <br /> hierarchies, and customizable <br /> workflows ensure data <br /> consistency.</p>
            </div>
          </div>
        </div>
        <div>
          <div  className='flex justify-center items-center '>
            <img className='w-[230px]'  src={second} alt="" />
            <div className=''>
              <h1 className='text-xl font-bold p-[20px]'>Automation</h1>
              <p className='text-[17px] text-slate-400 ml-[10px]'>Automated notebook creation, file <br /> organization, and activity <br /> publishing reduce manual data <br /> entry and errors.</p>
            </div>
          </div>
        </div>
        <div>
          <div className='flex justify-center items-center '>
            <img className='w-[230px]'  src={fifth} alt="" />
            <div>
              <h1 className='text-xl font-bold p-[20px]'>Integrations</h1>
              <p className='text-[17px] text-slate-400 ml-[10px]'>Connect your cloud storage, <br /> electronic lab notebook, and other <br /> tools to keep your data in sync.</p>
            </div>
          </div>
        </div>
        <div>
          <div className='flex justify-center items-center '>
            <img className='w-[230px]' src={third} alt="" />
            <div>
              <h1 className='text-xl font-bold p-[20px]'>Accessibility</h1>
              <p className='text-[17px] text-slate-400 ml-[10px]'>Access your study data and files <br /> from anywhere with a modern, <br /> responsive web interface.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle
