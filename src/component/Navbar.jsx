import { useState } from "react"
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    const handleModal = () => {
        setIsOpenNav(!isOpenNav);
    }

    // const handleModalSearch = () => {
    //     setIsOpenSearch(!isOpenSearch)
    // }

    // const handleBlurSearch = () => {
    //     setIsOpenSearch(!isOpenSearch)
    // }
    // https://equran.id/api/v3/search?q=as
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" className="h-8" alt="al-qur'an-plus" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Qur'an</span>
                </a>
                <div className="flex md:order-2">
                    <button type="button" onClick={handleModal} data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    {/* <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" onFocus={handleModalSearch} onBlur={handleBlurSearch} className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div> */}
                    <button onClick={handleModal} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${isOpenNav ? 'hidden' : ''} w-full md:flex md:w-auto md:order-1`} id="navbar-search">

                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to={'/'}
                                className={({ isActive }) =>
                                    isActive ? 'block py-2 px-3 text-white md:bg-transparent bg-blue-700 rounded md:text-blue-700 md:p-0 md:dark:text-blue-500'
                                        : 'block py-2 px-3 text-gray-900 rounded md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                }
                                aria-current="page">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/doa"}
                                className={({ isActive }) =>
                                    isActive ? 'block py-2 px-3 text-white md:bg-transparent bg-blue-700 rounded md:text-blue-700 md:p-0 md:dark:text-blue-500'
                                        : 'block py-2 px-3 text-gray-900 rounded md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                }>
                                Doa
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="https://hafdev-portofolio.vercel.app/" target="_blank"
                                className={({ isActive }) =>
                                    isActive ? 'block py-2 px-3 text-white md:bg-transparent bg-blue-700 rounded md:text-blue-700 md:p-0 md:dark:text-blue-500'
                                        : 'block py-2 px-3 text-gray-900 rounded md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                }>
                                About
                            </NavLink>
                        </li>
                    </ul>
                    {/* <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="search-navbar" onFocus={handleModalSearch} onBlur={handleBlurSearch} className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div> */}
                </div>
            </div>

            {/* modal search */}
            <div id="default-modal" tabIndex="-1" aria-hidden="true"
                className={`${!isOpenSearch ? 'hidden' : ''} overflow-y-auto overflow-x-hidden absolute md:left-[63%] top-[18rem] md:top-16 items-center md:w-[28rem] h-auto`}>
                <div className="relative p-4 w-full max-w-screen-2xl max-h-52">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-900 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 h-44 overflow-y-scroll">
                        <a href="#" className="flex p-2 hover:bg-slate-500" type="button">
                            <p className="text-white uppercase bg-red-600 p-1 rounded-lg w-16 text-center justify-center">surat</p>
                            <p className="text-white p-1">Doa bila takut dan kesepian ketika tidur</p>
                        </a>
                        <a href="#" className="flex p-2 hover:bg-slate-500" type="button">
                            <p className="text-white uppercase bg-purple-600 p-1 rounded-lg w-16 text-center">doa</p>
                            <p className="text-white p-1">Doa bila takut dan kesepian ketika tidur</p>
                        </a>
                        <a href="#" className="flex p-2 hover:bg-slate-500" type="button">
                            <p className="text-white uppercase bg-red-600 p-1 rounded-lg w-16 text-center">surat</p>
                            <p className="text-white p-1">Doa bila takut dan kesepian ketika tidur</p>
                        </a>
                        <a href="#" className="flex p-2 hover:bg-slate-500" type="button">
                            <p className="text-white uppercase bg-purple-600 p-1 rounded-lg w-16 text-center">doa</p>
                            <p className="text-white p-1">Doa bila takut dan kesepian ketika tidur</p>
                        </a>
                    </div>
                </div>
            </div>
        </nav>


    )
}
