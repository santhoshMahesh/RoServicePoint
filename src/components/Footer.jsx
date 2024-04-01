import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className='bg-blue-700/50 w-full bg-[#003060] flex'>
        <img src='./test.svg' className='fill-inherit h-[260px] w-[500px]'/>
        <div>
        <p className='text-center font-bold text-5xl mb-2'> Why wait contact you neighbourhood RO service and repairer</p> 
        <div>
          <h1>Phone</h1>
        </div>
        <div class="social-container">
      <h3>Social Follow</h3>
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
</div>

    </footer>
  )
}

export default Footer