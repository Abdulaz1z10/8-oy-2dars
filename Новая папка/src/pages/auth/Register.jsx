import React, { useState } from 'react'
import useAuthStore from '../../store/auth'
import { useNavigate } from "react-router-dom";
import axiosClient from '../../plugins/axiosClient';


export default function Register() {
  const {register} = useAuthStore()
    const navigate = useNavigate();
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  const save =(e)=>{
    e.preventDefault();
    axiosClient.post("/auth/signup", {
      full_name: fullname,
      username: username,
      password: password
    }).then(res=>{
      console.log(res)
      if (res?.data?.tokens?.access_token) {
        localStorage.setItem("token", res?.data?.tokens?.access_token)
        navigate('/login')
      }
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="pl-[500px]">
      <div className="flex flex-col gap-10 justify-center">
        <h1 className="flex justify-center">Register</h1>
        <form onSubmit={save} className="flex flex-col gap-[5px]">
          <input
            type="text"
            onChange={(e) => setFullname(e.target.value)}
            placeholder="full_name"
            className="p-[10px] rounded-xl w-[380px]"
          />
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            className="p-[10px] rounded-xl w-[380px]"
          />
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="p-[10px] rounded-xl w-[380px]"
          />
          <button type="submit" className='bg-green-600 text-xl'>save</button>
        </form>
      </div>
    </div>
  );
}
