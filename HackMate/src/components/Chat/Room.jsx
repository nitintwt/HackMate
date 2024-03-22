import React, { useEffect, useState } from 'react'
import service from '../../appwrite/config'
import {Trash2} from 'react-feather'

function Room() {
  const [messages , setMessages]= useState([])
  const [messageBody , setMessageBody]= useState("")

  useEffect(()=>{
    const fetchMessages = async ()=>{
      const data = await service.getMessages()
      setMessages(data.documents)
    }
    fetchMessages()
    service.messageSubsribe
  })

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      await service.createMessage({
        body: messageBody,
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
                <p className='message-timestamp'></p>
                <Trash2 onClick={()=> handleDelete(message?.$id)} />
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
