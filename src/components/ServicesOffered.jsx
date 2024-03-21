import React from 'react'
import { services } from '../constants/services'
import Service from '../util/Service'



const ServicesOffered = () => {
  return (
    <div className='my-10 mx-auto w-full'>
        <h1 className='text-center font-bold '>Services we offer</h1>
        <ul className=' relative flex border-s border-gray-200 dark:border-gray-700'>
          
            {services.map((service)=>{
                return  <Service service={service} key={service.id}/>
            })}
        </ul>
    </div>
  )
}

export default ServicesOffered