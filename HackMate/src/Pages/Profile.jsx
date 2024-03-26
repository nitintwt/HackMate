import React, { useEffect, useState } from 'react'
import { ProfileInputBox } from '../components/Profile/ProfileInput'
import UserProfile from '../components/Profile/UserProfile'
import { useAuth0 } from '@auth0/auth0-react'
import service from "../appwrite/config"
import { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
  const [oldUser , setOldUser]= useState(false)
  const {user}= useAuth0()
  const [userData, setUserData]= useState()
  const {authId}= useContext(UserContext)
  const [loading , setLoading]= useState(true)
 

  useEffect(()=>{ 
    const fetchUserData = async ()=>{
      try { 
        const data = await service.getUserProfile({authId:authId})
        setUserData(data)
        //console.log(data?.Name)
        //console.log(authId)
        setLoading(false)
        if (authId===data?.documents[0]?.authId) return setOldUser(true) 
      } catch (error) {
        console.error("error fetching user profile:", error)
      }
    }
    fetchUserData()
    
  },[])

  return (
    <div className='bg-black min-h-screen pt-32'>
      {loading? (
        <h1 className='text-white flex justify-center'>Loading...</h1>
      ):(
      oldUser? 
        <UserProfile College={userData.documents[0].College} Name={userData.documents[0].Name} Skills={userData.documents[0].Skills} About={userData.documents[0].About} Age={userData.documents[0].Age} /> 
        :
        <ProfileInputBox />
      )}    
    </div>
  )
}

export default Profile

