import React from 'react'
import ServicesCard from './ServicesCard';
import { Fa1, Fa2, Fa3, Fa4 } from "react-icons/fa6";


const BlogCard = () => {
  const items = [
    {
      id:"1",
      text: "Download our mobile app or open xahetoo website and browser",
      title: "open",
      logo: Fa1
     
    },
    {
      id:"2",
      text: "Choose one of our services before use xehatoo",
      title: "Choose",
      logo: Fa2
    },
    {
      id:"3",
      text: "Process the services by clicking it or top of you use app",
      title: "Process",
      logo: Fa3
    },
    {
      id:"4",
      text: "Your request is on the way and you just need to wait it",
      title: "Done",
      logo: Fa4
    },

  ];
  
  return (
    <div className=''>
      <div className='flex flex-col lg:flex-row justify-around mt-20 px-5  '>
        <div className='space-y-4'>
          <h1 className='text-3xl font-semibold'>Healthcare Services Never Been Easy</h1>
          <p>How to use Xehatoo is very easy, here is it</p>
        </div>
        <div>
          <button className='bg-brightColor text-white mt-3 px-4 py-2 rounded-full hover:bg-hoverColor transition duration-300 ease-in-out'>
            Learn More
          </button>
        </div>
      </div>
     <div key={items.id}>
     <div className='flex justify-center mt-20 flex-wrap md:mt-10 '>
    {items.map(item=>(
       <ServicesCard  key={item.id} title="Open" item={item} />
    ))}
      </div>
     </div>
    </div>
  )
}

export default BlogCard;