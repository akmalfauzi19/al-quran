import React from 'react'
import Navbar from '../../component/Navbar'
import CardHomePage from '../../component/CardHomePage'
import useFetch from '../../hooks/useFetch'

function Home() {

    const { data, loading, error } = useFetch('https://api.quran.gading.dev/surah');
    const surah = data.data;

    return (
        <div className="App">
            <Navbar />
            <div className="container grid lg:grid-cols-3 md:grid-cols-1 gap-4 w-[90%] mt-[50px] mx-auto pb-6">

                {surah?.map((item) => (
                    <CardHomePage
                        key={item.number}
                        number={item.number}
                        name={item.name.transliteration.id}
                        ayat={item.name.short}
                        type={item.revelation.id}
                        total={item.numberOfVerses}

                    />
                ))}

                {/* {Array(12).fill(1).map((el, i) =>
                    <CardHomePage key={i} />
                )} */}
            </div>
        </div>
    )
}

export default Home