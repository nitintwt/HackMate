import React, { useEffect, useState } from 'react'
import { ProfileInputBox } from './ProfileInput'
import UserProfile from './UserProfile'
import { useAuth0 } from '@auth0/auth0-react'
import service from "../../appwrite/config"


function Profile() {
  const [submit , setSubmit]=useState(false)
  const [oldUser , setOldUser]= useState(false)
  const {user}= useAuth0()
  const [userData, setUserData]= useState()

  useEffect(()=>{
    const fetchUserData = async ()=>{
      try { 
        const data = await service.getUserProfile({authId:user.sub})
        setUserData(data)
        console.log(data)
        if (user?.sub===data.authId) {
          return setOldUser(true)}
          
      } catch (error) {
        console.error("error fetching user profile:", error)
      }
    }
    fetchUserData()
    
  },[user])

  return (
    <div className='bg-black min-h-screen pt-40'>
      {oldUser? 
      <UserProfile College={userData.College} Name={userData.Name} Skills={userData.Skills} About={userData.About} Age={userData.Age} /> 
      :
      <ProfileInputBox />
      }
      
    </div>
  )
}

export default Profile

