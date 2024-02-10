import React from 'react'
import useAuthStore from './../../store/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const {login} = useAuthStore()
  const navigate = useNavigate()
  const save =(e)=>{
    e.preventDefault();
    login({
      username: e.target[0].value,
      password: e.target[1].value
    })
    let token = localStorage.getItem("token")
    if (token) {
      navigate("/main")
    }
  }
  return (
    <div className='pl-[500px]'>
      <div className="flex flex-col  gap-10">
        <h1 className="flex justify-center text-black">Login</h1>
        <form onSubmit={save} className="flex flex-col gap-[5px]">
          <input
            type="text"
            placeholder="username"
            className="p-[10px] rounded-xl w-[380px]"
          />
          <input
            type="text"
            placeholder="password"
            className="p-[10px] rounded-xl w-[380px] "
          />
          <button type="submit" className='w-[380px] bg-green-800 text-xl'>save</button>
        </form>
      </div>
    </div>
  );
}
