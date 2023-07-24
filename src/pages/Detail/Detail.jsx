import React from 'react'
import Navbar from '../../component/Navbar'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiHome } from "react-icons/fi";

function Detail() {
    return (
        <>
            <Navbar />
            <div className="w-full md:grid gap-4 mt-[50px] md:px-9 md:grid-rows-[50px_minmax(auto,_1fr)auto_auto]">
                <div className='grid grid-cols-1 px-4 md:flex justify-center md:gap-5 gap-2'>
                    <span className='p-2 rounded-xl border-2 border-purple-600 px-5 font-medium text-white text-center'>
                        Al-Baqarah
                    </span>
                    <span className='p-2 rounded-xl border-2 border-purple-600 px-5 font-medium text-white text-center'>
                        Al-Baqarah
                    </span>
                    <span className='p-2 rounded-xl border-2 border-purple-600 px-5 font-medium text-white text-center'>
                        Al-Baqarah
                    </span>
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
                    <div className="w-full rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800">
                        <div className="rounded-[calc(1.5rem-1px)] p-5 bg-white dark:bg-gray-900">
                            <div className='flex'>
                                <h4 className='text-white w-5'>1.</h4>
                                <button className="w-24 md:w-56 rounded-xl border-2 border-purple-600 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:border-purple-100 active:border-purple-100">
                                    Play
                                </button>
                            </div>
                            <p className='font-arab text-right text-white text-5xl py-5'>صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ</p>
                            <p className='text-white mt-5 md:mt-10 pb-1 text-justify'>Siraatal-lazeena an'amta 'alaihim ghayril-maghdoobi 'alaihim wa lad-daaalleen</p>
                            <p className='text-white md:mt-10 text-justify'>Artinya : (yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.</p>

                        </div>
                    </div>

                    <div className="w-full rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800">
                        <div className="rounded-[calc(1.5rem-1px)] p-5 bg-white dark:bg-gray-900">
                            <div className='flex'>
                                <h4 className='text-white w-5'>1.</h4>
                                <button className="w-24 md:w-56 rounded-xl border-2 border-purple-600 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:border-purple-100 active:border-purple-100">
                                    Play
                                </button>
                            </div>
                            <p className='font-arab text-right text-white text-5xl py-5'>صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ</p>
                            <p className='text-white mt-5 md:mt-10 pb-1 text-justify'>Siraatal-lazeena an'amta 'alaihim ghayril-maghdoobi 'alaihim wa lad-daaalleen</p>
                            <p className='text-white md:mt-10 text-justify'>Artinya : (yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.</p>

                        </div>
                    </div>
                </div>

                <div className='flex justify-between px-5'>
                    <button className="w-28 md:w-56 h-11 flex justify-center items-center text-lg rounded-xl border-2 border-purple-600 text-center mb-3 text-white transition duration-200 hover:border-purple-100 active:bg-red-700/5">
                        <FiArrowLeft />
                    </button>
                    <Link to='/' className="w-28 md:w-56 flex justify-center items-center text-lg rounded-xl border-2 border-purple-600 text-center mb-3 text-white transition duration-200 hover:border-purple-100 active:bg-red-700/5">
                        <FiHome />
                    </Link>
                    <button className="w-28 md:w-56 flex justify-center items-center text-lg rounded-xl border-2 border-purple-600 text-center mb-3 text-white transition duration-200 hover:border-purple-100 active:bg-red-700/5">
                        <FiArrowRight />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Detail