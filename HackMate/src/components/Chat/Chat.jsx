import { useEffect, useState } from "react";
import service from "../../appwrite/config";
import { useAuth0 } from "@auth0/auth0-react";
import Room from "./Room";
import { Link, useParams } from "react-router-dom";

const ChatRoom = () => {
  const [friends , setFriends]= useState([])
  const {user}= useAuth0()
  const {id}= useParams()

  useEffect(()=>{
    const fetchFriends= async ()=>{
      try {
        const data = await service.getFriends({authId:user?.sub})
        const modifiedData=  [...new Set(data.documents)]
        setFriends(modifiedData)
        console.log(data)
      } catch (error) {
       console.error("error fetching your friends :", error) 
      }
    }
    fetchFriends()
  },[])

  return (
    <div className="flex h-screen bg-black text-white">
      {/* User List */}
      <div className="w-1/4 bg-gray-800 p-4">
        <h2 className="text-lg font-semibold mb-4">Users</h2>
        <ul className="overflow-y-auto">
          {/* Render list of users here */}
          {friends.map((friend) => (
            <Link key={friend.$id} className="cursor-pointer hover:bg-gray-700 p-2 rounded-md" to={`${friend?.chatWith}`}>
              {friend?.chatWithName}
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-3/4 bg-gray-700 p-4">
        <div className="flex flex-col h-full">
          <div className="bg-gray-600 p-2 rounded-md mb-4">
            <h2 className="text-lg font-semibold">Chat with</h2>
          </div>
          {id ? (
            <Room/>
          ):('')}
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;


