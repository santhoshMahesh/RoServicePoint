import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='bg-gradient-to-r from-red-500 to-orange-500  text-lg font-bold text-yellow-400/95'>
      <i>

      <div className='flex flex-row justify-center '>
        <div>
         Contact Putte Gowda
        </div>
       <div className='mx-3 my-auto '>
        <FaPhoneAlt/>
        </div>
        <div>
          +91 77-606-83428
        </div>
    </div>
      </i>
      </div>
  )
}

export default Contact