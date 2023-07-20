import React from 'react'
import Navbar from '../../component/Navbar'
import CardHomePage from '../../component/CardHomePage'

function Home() {
    return (
        <div className="App">
            <Navbar />
            <div className="container grid grid-cols-3 gap-4 w-[90%] mt-[50px] mx-auto">
                {Array(12).fill(1).map((el, i) =>
                    <CardHomePage key={i} />
                )}
            </div>
        </div>
    )
}

export default Home