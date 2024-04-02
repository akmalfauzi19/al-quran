import React from 'react'
import Navbar from '../../component/Navbar'
import CardHomePage from '../../component/CardHomePage'
import useFetch from '../../hooks/useFetch'
import Footer from '../../component/Footer';

function Home() {
    const { data } = useFetch('https://equran.id/api/v2/surat');
    const surah = data;

    return (
        <div className="App">
            <Navbar />
            <div className="container grid lg:grid-cols-3 md:grid-cols-1 gap-4 w-[90%] mt-[50px] mx-auto pb-6">
                {surah?.map((item) => (
                    <CardHomePage
                        key={item.nomor}
                        number={item.nomor}
                        name={item.namaLatin}
                        ayat={item.nama}
                        type={item.tempatTurun}
                        total={item.jumlahAyat}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Home