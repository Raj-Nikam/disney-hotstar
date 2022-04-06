import React from 'react'
import Image from 'next/image'
import { HomeIcon, PlusIcon, SearchIcon, StarIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <header className="sticky bg-[#040714] top-0 px-10 h-[72px] z-[1000] flex items-center md:px-42">
            <Image src="/images/logo.svg" width={80} height={80} className="cursor-pointer"/>

            <div className="hidden ml-10 md:flex items-center space-x-6">
                <a href="" className="header-link group">
                    <HomeIcon className="h-4"/>
                    <span className="span">Home</span>
                </a>
                <a href="" className="header-link group">
                    <SearchIcon className="h-4"/>
                    <span className="span">Search</span>
                </a>
                <a href="" className="header-link group">
                    <PlusIcon className="h-4"/>
                    <span className="span">Watchlist</span>
                </a>
                <a href="" className="header-link group">
                    <StarIcon className="h-4"/>
                    <span className="span">Originals</span>
                </a>
                <a href="" className="header-link group">
                    <img src="/images/movie-icon.svg" alt="" className="h-5" />
                    <span className="span">Movies</span>
                </a>
                <a href="" className="header-link group">
                    <img src="/images/series-icon.svg" alt="" className="h-5" />
                    <span className="span">Series</span>
                </a>
            </div>

            <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white
            hover:text-black transition duration-200">Login</button>
        </header>
    )
}
//＠
export default Header;
