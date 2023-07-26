import { Link } from "react-router-dom"

function CardHomePage({ number, name, ayat, type, total }) {

    return (
        <>
            <Link to={`/surah/` + number}>
                <div className="w-full rounded-3xl p-px bg-gradient-to-b from-blue-800 to-purple-800">
                    <div className="flex rounded-[calc(1.5rem-1px)] p-5 bg-gray-900 h-28">
                        <div className="flex-none align-top justify-center w-10">
                            <p className='text-white font-semibold'>{number}</p>
                        </div>

                        <div className='grid grid-cols-1 w-full'>
                            <div className='w-full uppercase font-semibold'>
                                <h2 className="text-white">{name}</h2>
                            </div>
                            <div className='grid grid-cols-2'>
                                <p className="text-white">{type}</p>
                                <p className="text-white">{total}</p>
                            </div>
                        </div>
                        <div className='flex w-20 content-center justify-center flex-col col-span-2'>
                            <h2 className='font-arab text-3xl text-white text-right'>{ayat}</h2>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CardHomePage