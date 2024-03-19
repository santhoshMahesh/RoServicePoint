import React from 'react'
import { services } from '../constants/services'
import Maintainances from './Maintainances'


const ServicesOffered = () => {
  return (
    <div className='mt-10 container mx-auto'>
        <h1 className='text-center font-bold '>Services we offer</h1>
        <ul>
            {services.map(service=>{
                return <Maintainances service={service} key={service.id} />
            })}
        </ul>
    </div>
  )
}

export default ServicesOffered