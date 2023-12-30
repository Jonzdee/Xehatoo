import React from 'react';
import Doc from '../images/img/new.png'
import { FaBahai, FaBitbucket, FaStarHalfAlt } from "react-icons/fa";

const Consult = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-around mt-20 container mx-auto px-5 md:mx-auto'>
            <div className='basis-1/3 space-y-10 px-5 mt-20'>
                <div>

                    <h1 className='text-4xl font-semibold'>The Advantages Of Using Xehatoo </h1>
                </div>
                <div className='flex'>
                    <div>
                        <FaBitbucket className=' lg:h-8 w-14 ' />
                    </div>
                    <div className='ml-3'>

                        <h3 className='font-bold'>Always Ready</h3>
                        <p>Our healthcare partner are always ready with your needs about health</p>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                        <FaBahai className=' lg:h-8 w-14 ' />
                    </div>
                    <div className='ml-3'>

                        <h3 className='font-bold'>Always Ready</h3>
                        <p>Our healthcare partner are always ready with your needs about health</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                    <FaStarHalfAlt className=' lg:h-8 w-14 ' />
                    </div>
                    <div className='ml-3'>

                        <h3 className='font-bold'>Always Ready</h3>
                        <p>Our healthcare partner are always ready with your needs about health</p>
                    </div>
                </div>
            </div>
            <div  className='mt-10 lg:basis-1/4'>
                <img src={Doc} alt='doc' className='h-full w-full'  />
            </div>
        </div>
    )
}

export default Consult