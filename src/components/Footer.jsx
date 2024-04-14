import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,

} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className=' bg-[#003060] flex p-2 text-white'>
        <img src='./test.svg' className='fill-inherit h-[260px] ml-16  w-[350px] sm:w-1/3 sm:mx-auto'/>



        <div className='hidden sm:block w-full'>
        <p className='text-left font-bold text-5xl mb-2 p-2 '> Bengaluru!! contact RO service point to get the best service in industry</p> 

        <div className='flex h-3 text-3xl my-4 '>
          Phone:-<FaPhoneAlt />  +91 77-606-83428
        </div>
    
     <h2 className='font-semibold mt-16 mb-1'>Also you can reach us out on</h2>
       <div className='flex gap-5'>
          <a href="https://www.youtube.com/c/jamesqquick">
            <FontAwesomeIcon icon={faYoutube} style={{"color": "#eb3223"}} size="2x"  />
          </a>
          <a href="https://www.youtube.com/c/jamesqquick">
            <FontAwesomeIcon icon={faFacebook} style={{"color": "#4968ad"}} size="2x"  />
          </a>
          <a href="https://www.youtube.com/c/jamesqquick">
            <FontAwesomeIcon icon={faTwitter} style={{"color": "#49a1eb"}} size="2x"  />
          </a>
          <a href="https://www.youtube.com/c/jamesqquick">
            <FontAwesomeIcon icon={faInstagram} style={{"color": "black"}} size="2x"  />
          </a>
          <a href="https://www.youtube.com/c/jamesqquick">
            <FontAwesomeIcon icon={faLinkedin} style={{"color": "#0077B5","border-radius":"2%"}} size="2x"  />
          </a>
      </div> 
        </div>
    </footer>
  )
}

export default Footer