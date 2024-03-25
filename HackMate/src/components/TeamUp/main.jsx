import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import HackathonCard from '../ui/HackathonCard'
import service from '../../appwrite/config'

function Main() {
  const [data , setData] = useState([])
  const [search , setSearch]= useState('')

  useEffect( ()=>{
    const fetchHackathons= async ()=> {
    try {
      const allHackathons = await service.getAllHackathons([])
      const reversedHackathons= allHackathons?.documents.reverse()
      setData(reversedHackathons)
    } catch (error) {
      console.error("error fetching data :" , error)
    }
  }
  fetchHackathons()
  },[])
  
  return (
    <div className='w-full h-screen bg-black'>
    <div className='bg-black w-full  flex justify-center items-center '>
      <div className=' w-full max-w-5xl'>
        <div className='p-11 mt-10'>
          <Input onChange={(e)=> setSearch(e.target.value)} placeholder='Search'/>
        </div>
        <div  className="mt-2 md:mt-0 p-5 text-center text-2xl pb-8 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          <p>
            Explore hackathons and find your dream team effortlessly with detailed cards highlighting required skills.
            Join forces and unleash your coding potential!
          </p>
        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-center pl-5 pr-5'>
          {data?.filter ((hackathon)=> {
            return search.toLocaleLowerCase() === '' ? hackathon : hackathon.Name.toLocaleLowerCase().includes(search)
          }).map((hackathon) => (
            <div key={hackathon.$id}>
              <HackathonCard
                Hackathon={hackathon.Name}
                skills={hackathon.Skills}
                location={hackathon.location}
                date={hackathon.date}
                mode={hackathon.mode}
                hackId={hackathon.$id}
                creatorAuthId= {hackathon.authId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Main

 