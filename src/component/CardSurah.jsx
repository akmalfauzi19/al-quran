import { useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";
import useSound from "use-sound";

function CardSurah({ item }) {

    const PlayButton = ({ sound }) => {
        const [play, { pause }] = useSound(sound, {
            onplay: () => setIsPlaying(true),
            onend: () => setIsPlaying(false),
        });

        const [isPlaying, setIsPlaying] = useState(false);

        const togglePlay = () => {
            if (isPlaying) {
                pause();
            } else {
                play();
            }
            setIsPlaying(!isPlaying);
        }

        return (
            <button onClick={togglePlay} className="flex justify-center w-24 md:w-56 rounded-xl border-2 border-purple-600 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:border-purple-100 active:border-purple-100" >
                {isPlaying ? <FiPause /> : <FiPlay />}
            </button>
        );
    };

    return (
        <div className="w-full rounded-3xl p-px bg-gradient-to-b from-blue-800 to-purple-800">
            <div className="rounded-[calc(1.5rem-1px)] p-5 bg-gray-900">
                <div className='flex'>
                    <h4 className='text-white w-auto'>{item.nomorAyat}.</h4>
                    <PlayButton sound={item.audio["03"]} />
                </div>
                <p className='font-arab text-right text-white text-5xl py-5'>{item.teksArab}</p>
                <p className='text-white mt-5 md:mt-10 pb-1 text-justify'>{item.teksLatin}</p>
                <p className='text-white md:mt-10 text-justify'>Artinya : {item.teksIndonesia}</p>

            </div>
        </div>
    )
}

export default CardSurah