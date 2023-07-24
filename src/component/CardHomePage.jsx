import { Link } from "react-router-dom"

function CardHomePage() {
    return (
        <>
            <Link to={"/surah/1"}>
                <div className="w-full rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800">
                    <div className="flex rounded-[calc(1.5rem-1px)] p-5 bg-white dark:bg-gray-900">
                        <div className="flex-none align-top justify-center w-10">
                            <p className='text-white font-semibold'>1.</p>
                        </div>

                        <div className='grid grid-cols-1 w-full'>
                            <div className='w-full uppercase font-semibold'>
                                <h2 className="text-white">nama surah</h2>
                            </div>
                            <div className='grid grid-cols-2'>
                                <p className="text-white">Tipe surat</p>
                                <p className="text-white">Total ayat</p>
                            </div>
                        </div>
                        <div className='flex w-20 content-center justify-center flex-col col-span-2'>
                            <h2 className='font-arab text-5xl text-white'>اللَّهُ</h2>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CardHomePage