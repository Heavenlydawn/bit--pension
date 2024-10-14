import React from 'react'
import BitChatLeft from "./BitChatLeft"
import BitChatRight from "./BitChatRight"


const BitChat = () => {
  return (
    <div className='flex items-center justify-center flex-col md:flex-row p-4 md:p-0'>
        <BitChatLeft />
        <BitChatRight />
    </div>
  )
}

export default BitChat