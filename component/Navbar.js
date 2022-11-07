import Link from "next/link"
import TopBar from "./TopBar"
import { useState } from "react";

const Navbar = ()=>{
    const [open, setOpen] = useState(false);
    return (
        <div className="fixed top-0 left-0 z-20 w-full ">
            <TopBar />
        <nav className="bg-white px-2 sm:px-4 py-2.5 w-full">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
        <a className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                <img src="images/macithub.png" className="mr-3 h-12 sm:h-16  hover:animate-bounce"  alt="MacItHub logo" />
            </span>
        </a>
        </Link>
        <div className="flex md:order-2">
            <Link href="/signup"><button type="button" class="transition-all duration-300 text-white font-semibold hover:brightness-75 bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 sm:text-lg rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 border-2 dark:hover:bg-green-600 dark:focus:ring-green-600">Join MacItHub</button></Link>
            <button onClick={()=>{setOpen(prev => !prev)}} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        {open && <div className={` md:hidden justify-between items-center w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul class={`flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 dark:bg-gray-100 md:dark:bg-gray-100 dark:border-gray-100`}>
            <li>
                <Link href="/">
                    <a class="block py-2 pr-4 pl-3 menu-underline text-black rounded hover:text-green-500 md:bg-transparent md:text-gray-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a class="block py-2 pr-4 pl-3 menu-underline text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">About</a>
                </Link>
            </li>
            <li>
                <Link href="/events">
                    <a class="block py-2 pr-4 pl-3 menu-underline text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Events</a>
                </Link>
            </li>
            <li>
                <Link href="/albums">
                    <a class="block py-2 pr-4 pl-3 menu-underline menu-underline text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Albums</a>
                </Link>
            </li>
            <li>
                <Link href="/blogs">
                    <a class="block py-2 pr-4 pl-3 menu-underline menu-underline text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Blogs</a>
                </Link>
            </li>
            <li>
                <Link href="/sponsor">
                    <a class="block py-2 pr-4 pl-3 menu-underline text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Sponsor</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a class="block py-2 pr-4 pl-3 menu-underline text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Contact</a>
                </Link>
            </li>
            </ul>
        </div>}
        <div className={`hidden  justify-between items-center w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul class={`flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 dark:bg-gray-100 md:dark:bg-gray-100 dark:border-gray-100`}>
            <li>
                <Link href="/">
                    <a class="block py-2 pr-4 pl-3 menu-underline text-black rounded hover:text-green-500 md:bg-transparent md:text-gray-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a class="block py-2 pr-4 pl-3 menu-underline text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">About</a>
                </Link>
            </li>
            <li>
                <Link href="/events">
                    <a class="block py-2 pr-4 pl-3 menu-underline text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Events</a>
                </Link>
            </li>
            <li>
                <Link href="/albums">
                    <a class="block py-2 pr-4 pl-3 menu-underline menu-underline text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Albums</a>
                </Link>
            </li>
            <li>
                <Link href="/blogs">
                    <a class="block py-2 pr-4 pl-3 menu-underline menu-underline text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Blogs</a>
                </Link>
            </li>
            <li>
                <Link href="/sponsor">
                    <a class="block py-2 pr-4 pl-3 menu-underline text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Sponsor</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a class="block py-2 pr-4 pl-3 menu-underline text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Contact</a>
                </Link>
            </li>
            </ul>
        </div>
        </div>
        </nav>
    </div>
)
}

export default Navbar