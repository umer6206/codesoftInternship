import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
const Header = () => {
    const [nav, setNav] = useState(false)

    const handleNavChange = () => {
        setNav(!nav);
    }
    return (
        <>
            <div className='flex justify-between items-center h-16 text-white p-4'>
                <h1 className='text-[#00df9a] font-bold text-3xl mx-auto w-full'>BALTI.</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>Contact</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Company</li>
                    <li className='p-4'>Resource</li>
                </ul>
                <div onClick={handleNavChange} className='block md:hidden'>
                    {
                        !nav ? <AiOutlineClose size={20} cursor={"pointer"} /> : <AiOutlineMenu size={20} cursor={"pointer"} />
                    }

                </div>
                <div className={!nav ? 'fixed left-0 top-12 w-[50%] ease-in-out bg-black  duration-200 h-full md:hidden' : 'fixed left-[-100%] top-12 ease-in-out duration-200'}>
                    <ul className='uppercase'>
                        <li className='p-4 border-b border-gray-800 cursor-pointer'>Home</li>
                        <li className='p-4 border-b border-gray-800 cursor-pointer'>Contact</li>
                        <li className='p-4 border-b border-gray-800 cursor-pointer'>About</li>
                        <li className='p-4 border-b border-gray-800 cursor-pointer'>Company</li>
                        <li className='p-4 cursor-pointer'>Resource</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header