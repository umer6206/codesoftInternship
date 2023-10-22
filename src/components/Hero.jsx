import React from 'react'

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] flex flex-col justify-center mx-auto w-full h-screen text-center mt-[-96px]'>
                <p className='uppercase text-[#00df9a] font-bold p-2'>Growing with data analytics</p>
                <h1 className='font-bold text-4xl sm:text-6xl md:text-7xl md:py-4'>Grow with Data</h1>
                <div className='flex justify-center items-center flex-col'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold'>Fast, Flexible financing for </p>
                    <p className='text-gray-600 md:text-2xl text-xl md:pl-4 pl-2 font-bold'>Monitor your data analytics ti increase revenue for BTB, BTC and SASS plateform</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] mx-auto rounded-md py-2 my-6 text-black font-bold'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero