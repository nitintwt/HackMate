import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import service from "../../appwrite/config"


export default function AppliedUserCard({ userId}) {
  const [user , setUser]= useState(null)

  useEffect(()=>{
    const fetchUserProfile = async ()=>{
      try {
        const data = await service.getUserProfile({authId:userId})
        setUser(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUserProfile()
  },[])
  return (
    <div className="w-full max-w-sm text-black">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="text-lg font-semibold">{user?.documents[0]?.Name}</div>
          </div>
        </div>
        <div className="mt-4 text-sm leading-loose">{user?.documents[0]?.About} </div>
      </div>
      <div className="p-4 flex justify-end">
        <Link className="inline-block w-full sm:w-auto" to={`userProfile/${user?.documents[0]?.$id}`}>
          View Profile
        </Link>
      </div>
    </div>
  )
}

