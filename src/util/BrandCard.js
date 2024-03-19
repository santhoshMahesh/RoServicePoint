import React from 'react'

const BrandCard = ({brand}) => {
  return (
    <div className='border border-[#e4e4e4]  h-[280px] mb-4 relative  group transition'>
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-[200px] mx-auto flex justify-center items-center'>
                <img 
                    src={brand.pic} 
                    className='max-h-[160px] group-hover:scale-110'
                    alt="Ro purifier"
                />
            </div>
        </div>
            <h3 className=' text-lg text-center'> {brand.company}</h3>
    </div>
  )
}

export default BrandCard