import React from 'react';
import icon1 from "../images/icons/icon1.png"
import icon2 from "../images/icons/icon2.png"
import icon3 from "../images/icons/icon3.png"
import icon4 from "../images/icons/icon4.png"

const Parther = () => {
  return (
    <div className=' '>
      <div className='flex flex-wrap  justify-around'>
      <img src={icon4} alt='icon1' className='w-80 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'/>
      <img src={icon4} alt='icon1' className='w-80 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6' />
      <img src={icon4} alt='icon1' className='w-80 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'/>
      <img src={icon4} alt='icon1' className='w-80 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6' />
    </div>
    </div>
  )
}

export default Parther