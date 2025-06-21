import React from 'react'
import {useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
  const data=useLoaderData();
  // const [data,setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(res=> res.json())
  //   .then(data=> {console.log(data)
  //     setData(data)
  //   })

  // }, [])
  return (
    <div className="text-center mt-5 m-4 bg-gray-700 text-white p-4 text-3xl">GitHub Followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default GitHub
export  const githubLaoderinfo=async () => {
  const respone=await fetch('https://api.github.com/users/hiteshchoudhary')
  return respone.json()
}
