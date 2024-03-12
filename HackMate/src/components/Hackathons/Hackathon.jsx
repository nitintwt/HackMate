import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import service from '../../appwrite/config'
import HackathonCard from '../ui/HackathonCard'

function Hackathon() {
  const {id}= useParams()
  const [hackathon , setHackathon]= useState('')

  useEffect(()=>{
    const fetchHackathon = async ()=>{
      try {
        const data = await service.getHackathon(id)
        setHackathon(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchHackathon()
  },[])


  return (
    <div>
    <div className='p-10 flex flex-row justify-between'>
     <HackathonCard Hackathon={hackathon.Name } skills={hackathon.Skills} location={hackathon.location} date={hackathon.date} mode={hackathon.mode}/>
    </div>


    </div>
  )
}

export default Hackathon