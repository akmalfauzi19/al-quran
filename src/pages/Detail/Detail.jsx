import React from 'react'
import Navbar from '../../component/Navbar'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiHome } from "react-icons/fi";
import CardSurah from '../../component/CardSurah';
import TypeSurah from '../../component/TypeSurah';

function Detail() {
    return (
        <>
            <Navbar />
            <div className="w-full md:grid gap-4 mt-[50px] md:px-9 md:grid-rows-[50px_minmax(auto,_1fr)auto_auto]">
                <div className='grid grid-cols-1 px-4 md:flex justify-center md:gap-5 gap-2'>
                    <TypeSurah />
                    <TypeSurah />
                    <TypeSurah />
                </div>

                <p className='text-white mt-5 text-justify px-4 pb-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
                </p>

                <div className='flex flex-col justify-center align-middle w-full px-5 py-8 gap-8'>
                    <CardSurah />
                </div>

                <div className='flex justify-between px-5'>
                    <Link className="w-28 md:w-56 h-11 flex justify-center items-center text-lg rounded-xl border-2 border-purple-600 text-center mb-3 text-white transition duration-200 hover:border-purple-100 active:bg-red-700/5">
                        <FiArrowLeft />
                    </Link>
                    <Link to='/' className="w-28 md:w-56 flex justify-center items-center text-lg rounded-xl border-2 border-purple-600 text-center mb-3 text-white transition duration-200 hover:border-purple-100 active:bg-red-700/5">
                        <FiHome />
                    </Link>
                    <Link className="w-28 md:w-56 flex justify-center items-center text-lg rounded-xl border-2 border-purple-600 text-center mb-3 text-white transition duration-200 hover:border-purple-100 active:bg-red-700/5">
                        <FiArrowRight />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Detail