import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import service from "../../appwrite/config"
import UserProfileModal from "./UserProfileModal"
import UserAcceptanceModal from "./UserAcceptanceModal"

export default function AppliedUserCard({ userId}) {
  const [user , setUser]= useState(null)
  const [showModal , setShowModal]= useState(false)
  const [acceptModal , setAcceptModal]= useState(false)

  useEffect(()=>{
    const fetchUserProfile = async ()=>{
      try {
        const data = await service.getUserProfile({authId:userId})
        setUser(data.documents[0])
        //console.log(u)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUserProfile()
  },[])

  const handleDelete =  async ()=>{
    try {
      await service.deleteAppliedUser(user?.$id)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Fragment>
      <div className="p-4  grid gap-4 sm:flex sm:flex-col sm:gap-6 bg-gray-900 rounded-lg shadow-lg">
        <div className="flex items-center gap-4">
          <div className="grid gap-1.5">
            <h3 className="text-lg font-bold text-white">{user?.Name}</h3>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mr-8">
          <button className="inline-block w-full sm:w-auto px-4 py-2 mb-5 sm:mb-0 text-center bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition duration-300 ease-in-out" onClick={()=> setShowModal(true)}>
            View Profile
          </button>
          <button className="w-full text-center sm:w-auto px-4 py-2 mb-5 bg-green-500 hover:bg-green-600 rounded-lg text-white transition duration-300 ease-in-out" onClick={()=> setAcceptModal(true)}>
            Accept
          </button>
          <button className="w-full sm:w-auto px-4 py-2 mb-5 bg-red-500 hover:bg-red-600 rounded-lg text-white transition duration-300 ease-in-out" variant="outline" onClick={handleDelete}>
            Reject
          </button>
        </div>
      </div>

      <UserProfileModal
      isVisible={showModal} 
      onClose={()=> setShowModal(false)}
      name={user?.Name}
      skills={user?.Skills}
      college={user?.College}
      about={user?.About}
      age={user?.Age}
      email={user?.email} />

      <UserAcceptanceModal
      userName={user?.Name}
      userEmail={user?.email}
      isVisible={acceptModal}
      onClose={()=> setAcceptModal(false)}
      />
    </Fragment>  
  )
}

