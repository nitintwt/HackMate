import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import service from '../../appwrite/config'
import HackathonCard from '../ui/HackathonCard'
import AppliedUserCard from '../ui/AppliedUserCard'

function Hackathon() {
  const {id}= useParams()
  const [hackathon , setHackathon]= useState('')
  const [appliedUser , setAppliedUser]= useState([])

  useEffect(()=>{
    const fetchHackathon = async ()=>{
      try {
        const data = await service.getHackathon(id)
        setHackathon(data)

        if(data){
          const userData = await service.getAppliedUserId(id)
          setAppliedUser(userData)
          //console.log("userData:", userData)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchHackathon()
  },[])


  return (
    <div className='bg-black h-dvh w-full grid gap-4'>
      <div className='text-white bg-gray-900'>
        <div className="p-6 grid gap-4">
          <h1 className="text-3xl font-bold">{hackathon.Name }</h1>
          <p className="text-sm leading-none text-gray-500">{hackathon.date} </p>
          <p className="text-base leading-none">
            {hackathon.Skills}
          </p>
          <dl className="grid gap-1 text-sm leading-6">
            <div className="flex items-center gap-1">
              <dt className="font-medium">Date</dt>
              <dd>September 10-11, 2023</dd>
            </div>
            <div className="flex items-center gap-1">
              <dt className="font-medium">{hackathon.location}</dt>
              <dd>{hackathon.mode}</dd>
            </div>
          </dl>
        </div>
      </div>
     <div>
      <div>
      <h1>People who have applied:</h1>
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-center pl-5 pr-5'>
        {appliedUser.documents?.map((userData)=>(
          <AppliedUserCard  userId={userData.UserAppliedId}/>
        ))}
      </div>
     </div>
    </div>
  )
}

export default Hackathon