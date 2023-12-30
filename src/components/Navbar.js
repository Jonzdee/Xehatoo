import React, { useState } from 'react';
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from '../models/Contact';

const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const [showForm, setshowForm] = useState(false);


    const handleChange = () => {
        setMenu(!menu);
    }
    const closeMenu = () => {
        setMenu(false);
    }
    const openForm = () => {
        setshowForm(true);
        setMenu(false);
    }
    const closeForm = () => {
        setshowForm(false);

    }
    return (
        <div className='fixed w-full z-10 text-white'>
            <div>
                <div className='flex flex-row justify-between p-5  md:px-32 px-5 bg-[url(images/img/bg2.png)] bg-no-repeat bg-cover bg-no-repeat '>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <Link to='home' spy={true} smooth={true} duration={500}  >
                            <h1 className='text-xl font-semibold'>Xehatoo</h1>
                        </Link>
                    </div>
                    <nav className='hidden lg:flex flex-row items-center text-sm font-medium gap-8'>
                    <Link to='home' spy={true} smooth={true} duration={500} onClick={closeMenu} className='hover:text-hoverColor transition-all cursor-pointer'>Health & Medicine</Link>
                    <Link to='services' spy={true} smooth={true} duration={500} onClick={closeMenu} className='hover:text-hoverColor transition-all cursor-pointer'>Services</Link>
                    <Link to='consultation' spy={true} smooth={true} duration={500} onClick={closeMenu} className='hover:text-hoverColor transition-all cursor-pointer'>Consultation</Link>
                    </nav>
                    <div className='hidden lg:flex'>
                        <button className='bg-white text-black px-8 py-2 rounded-full  hover:bg-hoverColor transition duration-300 ease-in-out'
                            onClick={openForm}>
                             Login
                        </button>
                    </div>
                    {showForm && <Contact closeForm={closeForm} />}
                    <div className='lg:hidden flex items-center'>
                        {menu ? (
                            <AiOutlineClose size={28} onClick={handleChange} />
                        ) : (
                            <AiOutlineMenu size={28} onClick={handleChange} />
                        )}
                    </div>
                </div>

                <div
                    className={`${menu ? "translate-x-0" : "-translate-x-full"
                        } lg:hidden flex flex-col absolute bg-[url(images/img/navb.png)] bg-no-repeat bg-cover  text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}>
                    <Link to='home' spy={true} smooth={true} duration={500} onClick={closeMenu} className='hover:text-hoverColor transition-all cursor-pointer'>Health & Medicine</Link>
                    <Link to='services' spy={true} smooth={true} duration={500} onClick={closeMenu} className='hover:text-hoverColor transition-all cursor-pointer'>Services</Link>
                    <Link to='consult' spy={true} smooth={true} duration={500} onClick={closeMenu} className='hover:text-hoverColor transition-all cursor-pointer'>Consultation</Link>
                   
                    <div className='lg:hidden '>
                        <button className='bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out'
                            onClick={openForm}>
                            Contact Us
                        </button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Navbar;