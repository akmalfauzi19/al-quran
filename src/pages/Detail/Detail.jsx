import React from 'react'
import Navbar from '../../component/Navbar'
import { Link } from 'react-router-dom'

function Detail() {
    return (
        <>
            <Navbar />
            <div className="container grid gap-4 w-[90%] mt-[50px] mx-auto lg:grid-rows-[50px_minmax(auto,_1fr)auto_auto]">
                <div className='w-full lg:h-11 text-white flex flex-col md:flex-row md:items-center md:justify-center gap-5 px-5'>
                    <span className='p-2 rounded-xl border-2 border-purple-600 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200'>Al-Baqarah</span>
                    <span className='p-2 rounded-xl border-2 border-purple-600 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200'>Al-Baqarah</span>
                    <span className='p-2 rounded-xl border-2 border-purple-600 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200'>Al-Baqarah</span>
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
                    <div class="w-full rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800">
                        <div class="rounded-[calc(1.5rem-1px)] p-5 bg-white dark:bg-gray-900">
                            <div className='flex'>
                                <h4 className='text-white w-5'>1.</h4>
                                <button class="w-56 rounded-xl border-2 border-purple-600 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:border-purple-100 active:border-purple-100">
                                    Play
                                </button>
                            </div>
                            <p className='font-arab text-right text-white text-5xl py-5'>صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ</p>
                            <p className='text-white mt-5 md:mt-10 pb-1'>Siraatal-lazeena an'amta 'alaihim ghayril-maghdoobi 'alaihim wa lad-daaalleen</p>
                            <p className='text-white md:mt-10'>Artinya : (yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.</p>

                        </div>
                    </div>

                    <div class="w-full rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800">
                        <div class=" rounded-[calc(1.5rem-1px)] p-5 bg-white dark:bg-gray-900">
                            <div className='flex'>
                                <h4 className='text-white w-5'>1.</h4>
                                <button class="w-56 rounded-xl border-2 border-purple-600 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:border-purple-100 active:border-purple-100">
                                    Play
                                </button>
                            </div>
                            <p className='font-arab text-right text-white text-5xl py-5'>صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ</p>
                            <p className='text-white mt-5 md:mt-10 pb-1'>Siraatal-lazeena an'amta 'alaihim ghayril-maghdoobi 'alaihim wa lad-daaalleen</p>
                            <p className='text-white md:mt-10'>Artinya : (yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.</p>

                        </div>
                    </div>
                </div>

                <div className='flex justify-between px-5'>
                    <button class="w-56 rounded-xl border-2 border-purple-600 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:border-purple-100 active:bg-red-700/5">
                        Sebelumnya
                    </button>
                    <Link to='/' class="w-56 rounded-xl border-2 border-purple-600 px-5 py-3 text-center mb-3 font-medium text-white transition duration-200 hover:border-purple-100 active:bg-red-700/5">
                        Home
                    </Link>
                    <button class="w-56 rounded-xl border-2 border-purple-600 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:border-purple-100 active:bg-red-700/5">
                        Selanjutnya
                    </button>
                </div>

            </div>
        </>
    )
}

export default Detail