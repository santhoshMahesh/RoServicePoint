import React from 'react'
import { services } from '../constants/services'
import Service from '../util/Service'



const ServicesOffered = () => {
  return (
    <div className=' my-16 sm:mb-10 mx-4 sm:mx-5'>
        <h1 className='text-center font-bold text-5xl mb-2'>Services we offer</h1>
        <div className='flex flex-col md:flex-row gap-2 '>
            {services.map((service)=>{
                return  <Service service={service} key={service.id}/>
            })}
        </div>
    </div>

  )
}

export default ServicesOffered