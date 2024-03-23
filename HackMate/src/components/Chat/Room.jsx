import { useEffect, useState } from "react";
import service from "../../appwrite/config";
import { useAuth0 } from "@auth0/auth0-react";

const ChatRoom = () => {
  const [friends , setFriends]= useState([])
  const {user}= useAuth0()

  useEffect(()=>{
    const fetchFriends= async ()=>{
      try {
        const data = await service.getFriends({authId:user?.sub})
        setFriends(data.documents)
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
            <li key={friend.$id} className="cursor-pointer hover:bg-gray-700 p-2 rounded-md">
              {friend.chatWith}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatRoom;


