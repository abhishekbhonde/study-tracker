import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GridComponent from './GridComponent';
const Signin = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const HandleSignin= async() =>{
        const response = await axios.post('http://localhost:3002/user/signin', {
          username,
        });
        console.log('signin successfull', response.data);
        navigate('/');
    }
  return (
    <div>
         <div className='grid grid-cols-2'>
      <div className='h-[450px] w-[450px] ml-[200px] border flex flex-col justify-center items-center mt-[150px]'>
        <h1 className='text-3xl font-bold text-center mt-[20px]'>Signin Here</h1>
        <p className='text-center mt-[5px] text-xl '>Don't have an account?  <button onClick={() => navigate('/signup')} className='underline '>SignUp</button></p>
        <div>
          <div className='p-[20px]'>
            <label htmlFor="email" className='block text-lg'>
              Email
            </label>
            <input
              id="email"
              className='border bg-slate-100 hover:border-black rounded-lg h-[40px] w-[350px] mt-[10px] placeholder:italic placeholder:text-slate-400 text-lg p-[10px]'
              placeholder='abc@gmail.com'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password" className='block text-lg mt-[30px]'>
              Password
            </label>
            <input
              id="password"
              type="password"
              className='border bg-slate-100 hover:border-black rounded-lg h-[40px] w-[350px] mt-[10px] placeholder:italic placeholder:text-slate-400 text-lg p-[10px]'
              placeholder='Your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className='border text-center flex items-center justify-center text-white bg-black hover:border-black rounded-lg h-[40px] w-[350px] mt-[60px] placeholder:italic placeholder:text-slate-400 text-lg p-[10px]'
              onClick={HandleSignin}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <GridComponent />
    </div>
    </div>
  )
}

export default Signin
