import React from 'react'

function SearchBar() {
    return (
      <div >
        <form className="bg-white rounded-full  flex relative ">
        <input type="text" className="rounded-full text-black px-4 py-3 outline-none" placeholder="Search service..." />
        <button type="submit" className='bg-brightColor px-4 py-2 rounded-full absolute right-0 top-1 mt-0 mr-2 '>Search</button>
      </form>
   
      </div>
    );
  }
export default SearchBar