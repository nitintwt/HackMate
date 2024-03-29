import { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/UserContext'
import service from '../../appwrite/config'
import HackathonCard from '../TeamUp/HackathonCard'
import UserHackathonCard from './UserHackathonCard'
import CardSkeleton from '../ui/CardSkeleton'

export default function UserProfile({Name , College , Age , Skills , About , email}) {
  const {authId}= useContext(UserContext)
  const [userHackathon , setUserHackathon]= useState([])
  const skillsInObject = JSON?.parse(Skills).join(' , ')
  const [loading , setLoading]= useState(true)

  useEffect(()=>{
    const fetchUserHackathons= async ()=>{
      try {
        const data = await service.getUserHackathons({authId:authId})
        setUserHackathon(data)
        //console.log(data)
        setLoading(false)
      } catch (error) {
        console.error("error fetching user data:", error)
      }
    }
    fetchUserHackathons()
  },[])

  return (
    <div>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <div className="w-full max-w-3xl dark:text-white">
          <div className="space-y-6 dark:text-white">
          <div className="flex items-center space-x-6 dark:text-white">
              <div className="space-y-1 text-white">
                <h1 className="mt-2 md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Your Profile</h1>
              </div>
            </div>
            <div className="flex items-center space-x-6 dark:text-white">
              <div className="space-y-1 text-white">
                <h1 className="text-2xl font-bold text-white">{Name}</h1>
              </div>
            </div>
            <div className="space-y-2 dark:text-gray-400">
              <p>
                {About}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2 dark:text-gray-400">
              <div>
                <h2 className="text-sm font-semibold tracking-wide uppercase dark:text-white">Age</h2>
                <p>{Age}</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold tracking-wide uppercase dark:text-white">College</h2>
                <p>{College}</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold tracking-wide uppercase dark:text-white">Contact</h2>
                <p>{email}</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold tracking-wide uppercase dark:text-white">Skills</h2>
                <p>
                  {skillsInObject}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <h1 className="mt-2 md:mt-0 p-5  text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Your Hackathons :</h1>
      {loading ?
      (
        <CardSkeleton/>
      ):
      (
      <div  className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-center pl-5 pr-5'>
        {userHackathon.documents?.map((hackathon)=>(
         <UserHackathonCard key={hackathon.$id} Hackathon={hackathon.Name } skills={hackathon.Skills} location={hackathon.location} date={hackathon.date} mode={hackathon.mode} $id={hackathon.$id}/>
        ))}
      </div>
      )}
      </div>
    </div>
  )
}

