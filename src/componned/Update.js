import axios from 'axios'
import {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Update() {
  const[id,setId]=useState(0)
  const[name,setName]=useState('')
  const[age,setAge]=useState('')
  const navi=useNavigate()

useEffect(()=>{
  setId(localStorage.getItem("_id"))
  setName(localStorage.getItem("name"))
  setAge(localStorage.getItem("age"))
},[])

const clk=(e)=>{
e.preventDefault()
axios.put(`http://localhost:9000/${id}`,{
  name:name,
  age:age
}).then(()=>navi("/"))
}

  return (
    <div>
       <form onSubmit={clk}>
          <input placeholder="Name" value={name} onChange={((e)=>setName(e.target.value))} ></input>
          <input placeholder="Age" value={age} onChange={((e)=>setAge(e.target.value))} ></input>
           <button type='submit'>Submit</button>      
    </form>   
      
    </div>
  )
}

export default Update
