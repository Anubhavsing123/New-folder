import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const {setUser} = useContext(UserContext)
  const handlesubmit=(e)=>{
    e.preventDefault()
    setUser({username, password})
  }

  return (
    <div>Login
      <input type="text" placeholder="Username" className="border p-2 m-2" value={username} onChange={(e)=>setUsername(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 m-2" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white p-2 m-2" onClick={handlesubmit}>Login</button>
    </div>
  )
}

export default Login