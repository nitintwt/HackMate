import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import HackathonCard from '../ui/HackathonCard'
import service from '../../appwrite/config'

function Main() {
  const [data , setData] = useState([])

  useEffect( ()=>{
    const fetchHackathons= async ()=> {
    try {
      const allHackathons = await service.getAllHackathons([])
      const reversedHackathons= allHackathons?.documents.reverse()
      setData(reversedHackathons)
      console.log(reversedHackathons)
    } catch (error) {
      console.error("error fetching data :" , error)
    }
  }
  fetchHackathons()
  },[])
  
  return (
    <div className='bg-black w-full flex justify-center items-center '>
      <div className='w-full max-w-5xl'>
        <div className='p-11 mt-10'>
          <Input/>
        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-center pl-5 pr-5'>
          {data?.map((hackathon) => (
            <div key={hackathon.$id}>
              <HackathonCard
                Hackathon={hackathon.Name}
                skills={hackathon.Skills}
                location={hackathon.location}
                date={hackathon.date}
                mode={hackathon.mode}
                hackId={hackathon.$id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Main

 