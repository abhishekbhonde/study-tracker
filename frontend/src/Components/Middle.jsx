import React from 'react'
import fourth from '../../public/fourth.jpeg'

const Middle = () => {
  return (
    <div className=' mt-[230px] w-full'>
      <div className='flex justify-center items-center flex-col '>
        <h1 className='text-3xl'>The hub for your <span className='text-blue-600'>study data and management.</span></h1>
        <h1 className='text-[19px] text-center text-slate-400 mt-[20px]'>Study Tracker makes study management easier by tracking your progress of study <br /> and study management</h1>
      </div>
      <div className='flex-wrap flex'>
        <div>
          <div className='flex'>
            <img src={fourth} alt="" />
            <div >
              <h1>Standardization</h1>
              <p>Unique study IDs, managed folder hierarchies, and customizable workflows ensure data consistency.</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={fourth} alt="" />
            <div>
              <h1>Standardization</h1>
              <p>Unique study IDs, managed folder hierarchies, and customizable workflows ensure data consistency.</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={fourth} alt="" />
            <div>
              <h1>Standardization</h1>
              <p>Unique study IDs, managed folder hierarchies, and customizable workflows ensure data consistency.</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={fourth} alt="" />
            <div>
              <h1>Standardization</h1>
              <p>Unique study IDs, managed folder hierarchies, and customizable workflows ensure data consistency.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle
