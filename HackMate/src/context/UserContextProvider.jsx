import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider =({children}) =>{
  const [authId,setAuthId] =useState(null)
  return(
    <UserContext.Provider value={{authId, setAuthId}}>
    {children}
    </UserContext.Provider> 
  )

}
export default UserContextProvider