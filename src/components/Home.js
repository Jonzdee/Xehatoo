import React from 'react';
import SearchBar from '../layouts/SearchBar';



const Home = () => {
    return (
        
            <div className='min-h-screen flex flex-col flex-wrap justify-center  lg:px-32 px-5 text-white bg-[url(images/img/backg.png)] bg-no-repeat bg-cover '>
            <div className='w-full lg:w-1/3 space-y-12 mt-32 '>
                <h1 className='text-5xl font-bold leading-tight' > Connect Patient And Healthcare Seamlessly</h1>
                <p>Xehatoo connect hundred of hospital and healthcare to patient around indonesia</p>
                <SearchBar />

              <div className='flex flex-row space-x-12 font-black text-center'>
              <div className=' text-base w-full '>
                    <h1 className='text-center '>2100 <span className='text-brightColor text-lg'>+</span></h1>
                    <p className=''> Healthcare Partner</p>
                </div>
                <div className=' text-base w-full '>
                    <h1 className='text-center'>100 <span className='text-brightColor text-lg'>k</span></h1>
                    <p>Healthcare Partner</p>
                </div>
              </div>
            </div>   
           
        </div>
 
    )
}

export default Home