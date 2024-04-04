import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="py-2 shadow w-auto bg-gray-900 sticky bottom-0">
            <div className="w-full mx-auto max-w-screen-xl p-5 md:flex md:items-center md:justify-between">
                <p className="text-sm text-center text-gray-400">
                    © 2024 <Link to="/" className="hover:underline">HAFDEV</Link>. Made by moslem from Indonesia with ❤️.
                </p>
            </div>
        </footer>
    )
}

export default Footer