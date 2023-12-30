import React from 'react';
import { GoClockFill, GoCloud } from "react-icons/go";
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

const Services = () => {
    return (
        <div>
             
            <div className=' lg:flex lg:justify-between lg:px-5 mt-6 space-y-2'>
                <h1 className='text-4xl font-semibold text-center lg:basis-1/3'>All Services That  Match Your Needs</h1>
                <p className='mt-2 text-center lg:basis-1/3'>Xehatoo have many services to fill your
                        needs, here are 4 main services that often used</p>
            </div>

            
        

        <div className='flex flex-col lg:flex-row gap-5 pt-14 '>
            <div className='group flex flex-col lg:items-start  items-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer hover:bg-brightColor '>
            <div className='bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]'>
            <GoClockFill className=' lg:h-8 w-14 ' />
            </div>
            <h1 className='font-semibold text-lg  '>Online Doctor Counsultation</h1>
            <p>Mode appointment with doctors to consult your health problem</p>
           
        </div>
        <div className='group flex flex-col lg:items-start  items-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer hover:bg-brightColor '>
            <div className='bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]'>
            <GoCloud className=' lg:h-8 w-14 ' />
            </div>
            <h1 className='font-semibold text-lg '>Reserve Medical Specialist</h1>
            <p>Meet with medical specialist either do surgery or consult</p>
           
        </div>
        <div className='group flex flex-col lg:items-start  items-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer hover:bg-brightColor '>
            <div className='bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]'>
            <FaCalendarAlt className='lg:h-8 w-14 ' />
            </div>
            <h1 className='font-semibold text-lg '>Emergency Call Services</h1>
            <p>Make emergency call and nearby healthcare will take it</p>
           
        </div>
        <div className='group flex flex-col lg:items-start  items-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer hover:bg-brightColor '>
            <div className='bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]'>
            <FaPhoneAlt className=' lg:h-8 w-14 ' />
            </div>
            <h1 className='font-semibold text-lg '>Block medical checkup queue</h1>
            <p>Just one click and you don't have to queue anymore </p>
           
        </div>
    
        </div>
        </div>
    )
}

export default Services