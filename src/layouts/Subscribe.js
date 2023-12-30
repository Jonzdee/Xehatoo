import React from 'react'
import SearchBar from './SearchBar'
const Subscribe = () => {
  return (
    <div className='flex  justify-center items-center h-96    '>
        <div className='py-12 text-center  text-white bg-fullbackground lg:w-2/5 px-8 rounded-lg ' >
            <h1 className='text-2xl mb-3'> Subscribe For Any </h1>
            <h1 className='text-2xl mb-3'>Update About Xehatoo</h1>
            <div>
            <SearchBar />
            </div>
        </div>
    </div>
  )
}

export default Subscribe