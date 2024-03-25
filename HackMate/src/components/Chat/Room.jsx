import React, { useEffect, useState , useContext } from 'react'
import service  from '../../appwrite/config'
import {Trash2} from 'react-feather'
import conf from '../../conf/conf'
import { useAuth0 } from '@auth0/auth0-react'
import UserContext from '../../context/UserContext'
import { useParams } from 'react-router-dom'

function Room() {
  const [messages , setMessages]= useState([])
  const [messageBody , setMessageBody]= useState("")
  const {authId}= useContext(UserContext)
  const {user}= useAuth0()
  const {id}= useParams()
  const [friendData , setFriendData] = useState([])

  useEffect(()=>{
    const fetchMessages = async ()=>{
      const data = await service.getMessages()
      setMessages(data.documents)
    }
    fetchMessages()

    const unsubscribe = service.client.subscribe(`databases.${conf.appwriteDatabaseId}.collections.${conf.appwriteCollectionId4}.documents`, response => {

      if(response.events.includes("databases.*.collections.*.documents.*.create")){
          console.log('A MESSAGE WAS CREATED')
          setMessages(prevState => [...prevState ,response.payload])
      }

      if(response.events.includes("databases.*.collections.*.documents.*.delete")){
          console.log('A MESSAGE WAS DELETED!!!')
          setMessages(prevState => prevState.filter(message => message.$id !== response.payload.$id))
      }
    })

    const friedData = service.getUserProfile({
      authId:id
    })
    setFriendData(friedData.documents)
    

    console.log('unsubscribe:', unsubscribe)

    return () => {
      unsubscribe();
    }
        
  },[])

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      await service.createMessage({
        body: messageBody,
        userId: user?.sub,
        username:user?.name,
        chatWith:id,
        chatWithName:friendData?.Name
      })
      setMessageBody('')
    } catch (error) {
      console.error("error creating message:" , error)
    }
  }

  const handleDelete =  async(messageId)=>{
    try {
      await service.deleteMessage({
        messageId:messageId
      })
    } 
    catch (error) {
      console.error(error)
    }
  }
  
  return (
      <main className='container mx-auto flex flex-col justify-center items-center h-screen bg-black'>
        <div className='room--container px-8 py-8 bg-secondaryBgColor rounded-lg border border-gray-300 w-full max-w-lg'>
          <div className='message--container mt-8'>
            {messages.map((message) => (
              <div key={message?.$id} className='message--wrapper flex flex-col gap-4'>
                <div className='message--header flex justify-between items-center'>
                  <p className='flex items-center'>
                    {message?.username ? (
                      <span className='font-semibold mr-2 text-white'>{message?.username}</span>
                    ) : (
                      <span className='font-semibold mr-2 text-white'>Anonymous user</span>
                    )}
                    <small className="message-timestamp text-blue-500"> {new Date(message.$createdAt).toLocaleString()}</small>
                  </p>
                  <Trash2 className="delete--btn text-blue-500 cursor-pointer transition duration-300" onClick={() => handleDelete(message?.$id)} />
                </div>
                <div className={`message--body py-4 px-8 text-white bg-themeColorMain rounded-full break-words ${message.owner ? 'border border-themeColorMain bg-secondaryBgColor' : ''}`}>
                  <span>{message.body}</span>
                </div>
              </div>
            ))}
          </div>
          <form action="" id='message-form' className='px-8 py-8 bg-secondaryBgColor border-t border-gray-300 w-full'>
            <div className='mb-4'>
              <input type="text" value={messageBody} onChange={(e) => setMessageBody(e.target.value)} className='bg-transparent border-none border-b border-gray-300 py-4 px-4 w-full text-white outline-none placeholder-gray-500' placeholder="Type your message..." />
            </div>
            <div className='flex justify-end'>
              <button onClick={handleSubmit} className='btn btn--secondary py-2 px-4 rounded cursor-pointer transition duration-300 bg-blue-500 text-white'>Send</button>
            </div>
          </form>
        </div>
      </main>
  )
}

export default Room
