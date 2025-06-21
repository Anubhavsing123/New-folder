import { useRef } from 'react'
import { useEffect } from 'react'
import { useState ,useCallback} from 'react'



function App() {

const [length, setLength] = useState(8)
const [number,setnumber]=useState(false)
const [char,setchar]=useState(false)
const [password,setpassword]=useState("")
//useref hook

const passwordRef=useRef(null)

const passwordGenerator=useCallback(() => {
  let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (number) str+="0123456789"
  if (char) str+="!@#$%^&*()_+[]{}|;:,.<>?/~`"
  for (let i=1; i <=length; i++) {
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
    setpassword(pass)


  }

,[number,char,length,setpassword] )
/*const passwordGenerator=() => {
  let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (number) str+="0123456789"
  if (char) str+="!@#$%^&*()_+[]{}|;:,.<>?/~`"
  for (let i=1; i <=length; i++) {
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
    setpassword(pass)


  }*/
 const Clipboardcopy=() => {
  passwordRef.current.select()
  passwordRef.current.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(passwordRef.current.value)
 }
useEffect(()=>{
  passwordGenerator()
},[number,length,setpassword,char])


  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg  px-8 my-6 text-orange-500
    bg-gray-700'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-4 bg-white'>
        <input type='text' value={password} className='outline-none w-full py-3 px-3 '
        placeholder='password' ref={passwordRef} readOnly/>
       <button className='bg-blue-500 text-white py-3 px-4 outline-none' onClick={Clipboardcopy}>Copy</button>
       </div>
      <div className='flex  text-sm gap-2 mt-4'>
      <div className=' flex items-center gap-x-1'>
        <input type='range' 
        min={6}
        max={100}
        value={length}
        onChange={(e)=>setLength(e.target.value)}
        className='cursor-pointer'/>
        <label >Length:{length}</label>
      </div>
      <div className=' flex items-center gap-x-1'>
        <input type='checkbox' checked={number} onChange={(e)=>setnumber(e.target.checked)}/>
        <label >Numbers</label>
      </div>
      <div className=' flex items-center gap-x-1'>
        <input type='checkbox' checked={char} onChange={()=>setchar(prev=>!prev)}/>
        <label > Characters</label>
      </div>

      </div>
      </div>

  
     
    </>
  )
}

export default App
