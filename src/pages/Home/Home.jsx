import { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar'
import CardHomePage from '../../component/CardHomePage'
import useFetch from '../../hooks/useFetch'
import Footer from '../../component/Footer';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const { data } = useFetch('https://equran.id/api/v2/surat');

    useEffect(() => {
        const results = data.filter(item => item.namaLatin.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    }, [searchTerm, data])

    return (
        <>
            <Navbar />
            <div className='grid grid-cols-1'>
                <div className='w-[90%] mt-[50px] mx-auto relative'>
                    <input type="text" id="search" onChange={e => setSearchTerm(e.target.value)} className="block w-full p-2 pl-8 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-white text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                    <svg className="w-4 h-4 text-white absolute left-3 top-1/2 transform -translate-y-1/2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <div className="container grid lg:grid-cols-3 md:grid-cols-1 gap-4 w-[90%] mt-[50px] mx-auto pb-6">
                    {searchResults.length > 0 ? searchResults?.map((item) => (
                        <CardHomePage
                            key={item.nomor}
                            number={item.nomor}
                            name={item.namaLatin}
                            ayat={item.nama}
                            type={item.tempatTurun}
                            total={item.jumlahAyat}
                        />
                    )) : <p className="text-white text-center">No results found.</p>}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home