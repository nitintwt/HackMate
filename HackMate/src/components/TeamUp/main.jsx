import React, { useEffect, useState } from 'react'

import { Input } from '../ui/input'
import { Button, MovingBorder } from '../ui/moving-border'
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
    <div className='bg-black w-full h-dvh rounded-md flex flex-col items-center relative overflow-hidden mx-auto py-10  md:py-0  '>
      <div className='p-11 mt-10 w-full mx-auto max-w-5xl'>
        <Input/>
      </div>
      <div className='mt-4'>
        <Button>Add Your Hackathon</Button>
      </div>
      <div className='p-10 flex flex-wrap justify-between'>
       {data?.map((hackathon)=>(
        <div key={hackathon.$id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-2">
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
  )
}

export default Main

 