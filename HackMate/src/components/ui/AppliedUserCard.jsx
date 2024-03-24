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
    <div className="p-4  grid gap-4 sm:flex sm:flex-col sm:gap-6 bg-gray-900 rounded-lg shadow-lg">
      <div className="flex items-center gap-4">
        <div className="grid gap-1.5">
          <h3 className="text-lg font-bold text-white">{user?.documents[0]?.Name}</h3>
          <p className="text-sm leading-tight text-gray-300">{user?.documents[0]?.JSON?.parse(Skills)}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mr-8">
        <Link className="inline-block w-full sm:w-auto px-4 py-2 mb-5 sm:mb-0 text-center bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition duration-300 ease-in-out" to={`userProfile/${user?.documents[0]?.$id}`}>
            View Profile
        </Link>
        <Link className="w-full sm:w-auto px-4 py-2 mb-5 bg-green-500 hover:bg-green-600 rounded-lg text-white transition duration-300 ease-in-out">Accept</Link>
        <button className="w-full sm:w-auto px-4 py-2 mb-5 bg-red-500 hover:bg-red-600 rounded-lg text-white transition duration-300 ease-in-out" variant="outline">
          Reject
        </button>
      </div>
    </div>




  )
}

