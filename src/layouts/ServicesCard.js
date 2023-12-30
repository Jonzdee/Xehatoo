import React from 'react';


const ServicesCard = ({item }) => {
    return <div>
        <div className='group flex  items-center text-center gap-2 w-80  p-5 bg-white cursor-pointer hover:bg-brightColor flex-col'>
            <div className='bg-[#F3EEEA] p-3 rounded-full '>
                
                <item.logo />
            </div>
            <h1 className='font-semibold text-lg'>{item.title} </h1>
           
            {item.text}
            <h3 className='text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out  '>Learn more</h3>
        </div>

    </div>


}

export default ServicesCard; 