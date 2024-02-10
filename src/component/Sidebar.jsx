import React, { useState } from 'react'

export default function Sidebar() {
    const [links, setLinks] = useState([
      { id: 1, title: "Books" },
      { id: 2, title: "Authors" },
      { id: 3, title: "Genre" }
    ]);
    const setActive =(id)=>{
      localStorage.setItem("id", id)
    window.location.reload()
    }
  return (
    <div className='bg-black w-[250px] h-[100vh]'>
        <ul>
            {
                links.map((item, index)=>{
                    return <li key={index} >
                        <button onClick={()=>setActive(item.id)} className='py-[10px] my-[10px] ml-[10px] w-[200px] px-[20px] bg-lime-900'>{item.title}</button>
                    </li>
                })
            }
        </ul>
    </div>
  )
}
