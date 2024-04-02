import { useEffect, useState } from 'react';
import Navbar from '../../component/Navbar'
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import Footer from '../../component/Footer';

const Doa = () => {
    const [doa, setDoa] = useState({});
    const { data: judul } = useFetch('https://open-api.my.id/api/doa');
    const { data: defaultDoa } = useFetch('https://open-api.my.id/api/doa/1');

    const handleGetDoa = async (id) => {
        const res = await axios.get(`https://open-api.my.id/api/doa/${id}`);
        setDoa(res.data);
    }

    const ComponentDoa = ({ data }) => {
        return (
            <>
                <div className='p-4 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-lg background-animate'>
                    <p className='text-white font-bold text-center text-3xl uppercase'>{data.judul}</p>
                </div>
                <div className='p-4 rounded-lg bg-neutral-800 text-neutral-200'>
                    <p className='font-arab text-right text-white text-4xl py-6'>بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</p>
                    <p className='font-arab text-right text-white text-4xl py-5'>{data.arab}</p>
                    <p className='text-white md:mt-10 text-justify'>{data.latin}</p>
                    <p className='text-white md:mt-10 text-justify'>Artinya : {data.terjemah}</p>
                    <p></p>
                </div>
            </>

        )
    }

    return (
        <>
            <Navbar />
            <div className='flex p-4 gap-4'>
                <div className='flex-none w-[20rem] bg-gray-900 border border-sky-500 rounded-lg max-h-[calc(100vh-11rem)] overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-600 scrollbar-thumb-rounded-full'>
                    <div className='grid grid-cols-1 p-3 gap-2'>
                        {judul.map(data => (
                            <button key={data.id} onClick={() => handleGetDoa(data.id)} className='bg-neutral-800 p-2 rounded-lg hover:bg-neutral-700 cursor-pointer border-2 border-sky-700 text-left'>
                                <p className='text-white text-md'>{data.id}. {data.judul}</p>
                            </button>
                        ))}
                    </div>
                </div>
                <div className='flex-1 grid grid-cols-1 gap-3 p-4 bg-gray-900 border border-sky-500 rounded-lg max-h-[calc(100vh-11rem)] overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-600 scrollbar-thumb-rounded-full'>

                    {Object.keys(doa).length > 0 ? <ComponentDoa data={doa} /> : <ComponentDoa data={defaultDoa} />}

                    <div className='flex items-center justify-between p-4 rounded-lg bg-neutral-800 text-neutral-200'>
                        <p className='font-bold'>Bagikan : </p>
                        <p className='flex items-center gap-2 mx-2 text-gray-400 text-sm overflow-x-auto p-2 rounded leading-normal whitespace-pre-line'>
                            <button className='background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer; outline: none;' aria-label='facebook'>
                                <svg viewBox="0 0 64 64" width="32" height="32"><circle cx="32" cy="32" r="31" fill="#3b5998"></circle><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" fill="white"></path></svg>
                            </button>
                            <button className='background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer; outline: none;' aria-label='facebook'>
                                <svg viewBox="0 0 64 64" width="32" height="32"><circle cx="32" cy="32" r="31" fill="#3b5998"></circle><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" fill="white"></path></svg>
                            </button>
                            <button className='background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer; outline: none;' aria-label='facebook'>
                                <svg viewBox="0 0 64 64" width="32" height="32"><circle cx="32" cy="32" r="31" fill="#3b5998"></circle><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" fill="white"></path></svg>
                            </button>
                        </p>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Doa