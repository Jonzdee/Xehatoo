import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className=' text-black rounded-t-3xl mt-8 md:mt-0'>
        <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
            <div className='w-full md:w-1/4'>
               <h1 className='font-semibold text-xl pb-4'>Xehatoo</h1> 
               <p className='text-sm'> Bring Healthcare Service Anywhere Anytime</p>
               <p className='text-start py-4'>Copyright @ 2023
                </p>
            </div>
            <div>
                <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0'>Services</h1>
                <nav className='flex flex-col gap-2'>
                <Link to='about' 
                spy={true} 
                smooth={true} 
                duration={500} 
                className='hover:text-hoverColor transition-all cursor-pointer'>
                Book Queue
                </Link>
                <Link to='services' 
                spy={true} 
                smooth={true} 
                duration={500} 
                className='hover:text-hoverColor transition-all cursor-pointer'>
                Appoinment Specialist
                </Link>
                <Link to='doctor' 
                spy={true} 
                smooth={true} 
                duration={500} 
                className='hover:text-hoverColor transition-all cursor-pointer'>
                Emergency
                </Link>
                <Link to='doctor' 
                spy={true} 
                smooth={true} 
                duration={500} 
                className='hover:text-hoverColor transition-all cursor-pointer'>
                Online Consultantion
                </Link>

                </nav>
            </div>
            <div>
                <h1  className='font-semibold text-xl pb-4 pt-5 md:pt-0'>Public Relation</h1>
                <nav  className='flex flex-col gap-2'>
                <Link
                 to='services' 
                spy={true} 
                smooth={true} 
                duration={500} 
                className='hover:text-hoverColor transition-all cursor-pointer'>
                Apply as Pather
                </Link>
                <Link 
                to='services' 
                spy={true} 
                smooth={true} 
                duration={500} 
                className='hover:text-hoverColor transition-all cursor-pointer'>
                Career
                </Link> 
             
                </nav>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default Footer