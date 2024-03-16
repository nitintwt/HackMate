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
    <div className="p-4 grid gap-2">
    <div className="flex items-center gap-4">
      <div className="grid gap-1.5">
        <h3 className="text-lg font-bold">{user?.documents[0]?.Name}</h3>
        <p className="text-sm leading-none text-white">{user?.documents[0]?.JSON?.parse(Skills)}</p>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <Link className="inline-block w-full sm:w-auto" to={`userProfile/${user?.documents[0]?.$id}`}>
          View Profile
      </Link>
      <button size="sm">Accept</button>
      <button size="sm" variant="outline">
        Reject
      </button>
    </div>
  </div>
  )
}

