import React from 'react'
import { brands } from '../constants/brands'
import BrandCard from '../util/BrandCard'

const Services = () => {
  
  return (
    <section className='my-2' id='brands' >
      <h1 className='text-center font-bold text-5xl my-3'>Brands we work on</h1>
      <div  className='grid grid-cols-2 w-5/6 gap-[50px]  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:gap-[50px] mx-auto'>
        { brands.map((brand)=>{
          return <BrandCard key={brand.id} brand={brand} />
        })
      }
      </div>
    </section>
  )
}

export default Services