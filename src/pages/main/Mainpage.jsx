import React, { useEffect, useState } from 'react'
import Sidebar from '../../component/Sidebar'
import Books from './Books';
import Author from './Author';
import Genre from './Genre';

export default function Mainpage() {
    const [id, setId] = useState('1')
    const [main, setMain] = useState([
      { id: 1, component: <Books /> },
      { id: 2, component: <Author /> },
      { id: 3, component: <Genre /> },
    ]);
    useEffect(()=>{
        setId (localStorage.getItem("id"))
        console.log(id, "id...")
    },[])
    console.log("id", id)
  return (
    <div className='flex'>
        <div>
        <Sidebar/>
        </div>
        <div>
        {
            main.filter(item=>item.id == id).map((item, index)=>{
                return item.component
            })
        }
        </div>
    </div>
  )
}
