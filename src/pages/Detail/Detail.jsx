import React, { useEffect } from 'react'
import Navbar from '../../component/Navbar'
import { FiArrowLeft, FiArrowRight, FiHome } from "react-icons/fi";
import CardSurah from '../../component/CardSurah';
import TypeSurah from '../../component/TypeSurah';
import { Link, useLocation, useNavigate } from "react-router-dom"
import useFetch from '../../hooks/useFetch'
import Footer from '../../component/Footer';


function Detail() {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const navigate = useNavigate();

    const { data } = useFetch(`https://equran.id/api/v2/surat/${id}`);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Navbar />
            <div className="w-full md:grid gap-4 mt-[50px] md:px-9 md:grid-rows-[50px_minmax(auto,_1fr)auto_auto]">
                <div className='grid grid-cols-1 px-4 md:flex justify-center md:gap-5 gap-2'>
                    <TypeSurah title={data?.namaLatin + ' - ' + data?.arti} />
                    <TypeSurah title={data?.jumlahAyat + ' Ayat'} />
                    <TypeSurah title={data?.tempatTurun} />
                </div>

                <p className='text-white mt-5 text-justify px-4 pb-5'>
                    {data.deskripsi ? data.deskripsi.replace(/<\/?[^>]+(>|$)/g, "") : ''}
                </p>

                <div className='flex flex-col justify-center align-middle w-full px-5 py-8 gap-8'>
                    {data.ayat && data.ayat.map((item, i) =>
                        <CardSurah
                            key={i}
                            item={item}
                        />
                    )}
                </div>

                <div className='flex justify-between px-5'>
                    {data.suratSebelumnya &&
                        <button
                            onClick={() => navigate(`/surah/${data.suratSebelumnya.nomor}`)}
                            className="w-28 md:w-56 h-11 flex justify-center items-center text-lg rounded-xl border-2 border-purple-600 text-center mb-3 text-white transition duration-200 hover:border-purple-100 active:bg-red-700/5">
                            <FiArrowLeft />
                        </button>
                    }

                    <Link to='/' className="w-28 md:w-56 flex justify-center items-center text-lg rounded-xl border-2 border-purple-600 text-center mb-3 text-white transition duration-200 hover:border-purple-100 active:bg-red-700/5">
                        <FiHome />
                    </Link>

                    {data.suratSelanjutnya &&
                        <button
                            onClick={() => navigate(`/surah/${data.suratSelanjutnya.nomor}`)}
                            className="w-28 md:w-56 h-11 flex justify-center items-center text-lg rounded-xl border-2 border-purple-600 text-center mb-3 text-white transition duration-200 hover:border-purple-100 active:bg-red-700/5">
                            <FiArrowRight />
                        </button>
                    }

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Detail