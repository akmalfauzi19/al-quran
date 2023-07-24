function CardSurah() {
    return (
        <div className="w-full rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800">
            <div className="rounded-[calc(1.5rem-1px)] p-5 bg-white dark:bg-gray-900">
                <div className='flex'>
                    <h4 className='text-white w-5'>1.</h4>
                    <button className="w-24 md:w-56 rounded-xl border-2 border-purple-600 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:border-purple-100 active:border-purple-100">
                        Play
                    </button>
                </div>
                <p className='font-arab text-right text-white text-5xl py-5'>صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ</p>
                <p className='text-white mt-5 md:mt-10 pb-1 text-justify'>Siraatal-lazeena an'amta 'alaihim ghayril-maghdoobi 'alaihim wa lad-daaalleen</p>
                <p className='text-white md:mt-10 text-justify'>Artinya : (yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.</p>

            </div>
        </div>
    )
}

export default CardSurah