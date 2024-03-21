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
    <div className='h-screen w-full bg-black'>
    <main className="px-4 py-8 sm:px-6 lg:px-8 text-white bg-gray-900 pt-20 rounded-lg">
    <div className="rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{hackathon?.Name }</h3>
        <p className="text-neutral-300 mb-2">
          <span className="font-semibold">Date:</span> {hackathon?.date}
        </p>
        <p className="text-neutral-300 mb-2">
          <span className="font-semibold">Location:</span> {hackathon?.location}
        </p>
        <p className="text-neutral-300 mb-2">
          <span className="font-semibold">Mode:</span> {hackathon?.mode}
        </p>
        <p className="text-neutral-300">
          <span className="font-semibold">Skills:</span> {hackathon?.Skills}
        </p>
      </div>
    </div>
    </main>
    <h1 className="mt-2 md:mt-0 p-5  text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Appplied Users:</h1>
    <div className='grid grid-cols-1 gap-6  text-white justify-center  pl-5 pr-5 mt-10'>
      {appliedUser.documents?.map((userData)=>(
        <AppliedUserCard  userId={userData.UserAppliedId} />
      ))}
    </div>
    </div>
  )
}

export default Hackathon