import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Form() {
  const[name,setName]=useState('')
  const[age,setAge]=useState('')
  const[arr,setarr]=useState([])
const navi=useNavigate();
  

     const clk=(e)=>{
      e.preventDefault();
      axios.post('http://localhost:9000',{
        name:name,
        age:age
      })
     }

     useEffect(()=>{
      axios.get('http://localhost:9000').then((res)=>{
        setarr(res.data)
      })
    },[])

    const del=(id)=>{
      if(del){
        
      }
      axios.delete(`http://localhost:9000/${id}`)
    }



    const Up=(id,name,age)=>{
localStorage.setItem("_id",id)
localStorage.setItem("name",name)
localStorage.setItem("age",age)
navi("/update")
    }

  return (
    <div>
        <form onSubmit={clk}>
          <input placeholder="Name" value={name} onChange={((e)=>setName(e.target.value))} ></input>
          <input placeholder="Age" value={age} onChange={((e)=>setAge(e.target.value))} ></input>
           <button type='submit'>Submit</button>      
    </form>    

    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        {arr.map((op,index)=>
        <tbody key={index}>
          <tr>
            <td>{op.name}</td>
            <td>{op.age}</td>
            <td><button onClick={()=>del(op._id)} >Delete</button></td>
            <td><button onClick={()=>Up(op._id,op.name,op.age)} >Update</button></td>
          </tr>
        </tbody>
        )}
      </table>
      
      </div>  
    </div>
  )
}

export default Form
