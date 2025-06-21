import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid}= useParams();
  console.log(userid);
  return (
    <div className='bg-gray-600 text-white text-center text-3xl font-bold px-4'>User{userid}</div>
  )
}

export default User