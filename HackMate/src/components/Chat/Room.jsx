import React, { useEffect, useState , useContext } from 'react'
import service  from '../../appwrite/config'
import {Trash2} from 'react-feather'
import conf from '../../conf/conf'
import { useAuth0 } from '@auth0/auth0-react'
import UserContext from '../../context/UserContext'

function Room() {
  const [messages , setMessages]= useState([])
  const [messageBody , setMessageBody]= useState("")
  const {authId}= useContext(UserContext)
  const {user}= useAuth0()

  useEffect(()=>{
    const fetchMessages = async ()=>{
      const data = await service.getMessages()
      setMessages(data.documents)
    }
    fetchMessages()

    const unsubscribe = service.client.subscribe(`databases.${conf.appwriteDatabaseId}.collections.${conf.appwriteCollectionId4}.documents`, response => {

      if(response.events.includes("databases.*.collections.*.documents.*.create")){
          console.log('A MESSAGE WAS CREATED')
          setMessages(prevState => [response.payload, ...prevState])
      }

      if(response.events.includes("databases.*.collections.*.documents.*.delete")){
          console.log('A MESSAGE WAS DELETED!!!')
          setMessages(prevState => prevState.filter(message => message.$id !== response.payload.$id))
      }
    })

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
        username:user?.name 
      })
      setMessages((prev)=> [prev , ...messages])
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
      setMessages((prev) => messages.filter(message => message?.$id !== messageId))
    } 
    catch (error) {
      console.error(error)
    }
  }
  
  return (
    <main className='container'>
      <div className='room--container'>
        <form action="" id='message-form'>
          <div>
            <input type="text" value={messageBody} onChange={(e)=> setMessageBody(e.target.value)} />
          </div>
          <div className='send-btn--wrapper'>
            <button onClick={handleSubmit} className='btn btn--secondary'>Submit</button>
          </div>
        </form>
        <div>
          {messages.map((message)=>(
            <div key={message?.$id} className='message--wrapper'>
              <div className='message--header'>
               <p> 
                {message?.username ? (
                    <span> {message?.username}</span>
                ): (
                    'Anonymous user'
                )}
                <small className="message-timestamp"> {new Date(message.$createdAt).toLocaleString()}</small>
               </p>
               
                            <Trash2 className="delete--btn" onClick={()=> handleDelete(message?.$id)}/>
                            
                        
              </div>
              <div className='message--body'>
               <span>{message.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Room
