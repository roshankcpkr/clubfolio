import Link from "next/link";

const Footer = () =>
{
    return (
        <footer className="w-full ">
            <div className="flex flex-col border-t-2 border-gray-500 md:flex-row justify-center md:justify-between p-6 md:px-16">
                <div className="flex flex-col md:items-start items-center mb-4 w-full md:w-1/3">
                    <p className="font-semibold text-2xl text-gray-600 ">About us</p>
                    <img src="images/macithub.png" className="h-16"/>
                    <p className="text-sm text-gray-500 mt-2 mb-2">MacItHub is an official school club of students of Mount Annapurna campus. 
                       Established to help students learn and grow in the field of technology.
                    </p>
                </div>
                <div className="flex flex-row justify-between md:w-1/2">
                <div className="flex flex-col md:w-1/2 md:gap-2">
                    <p className="font-semibold text-2xl text-gray-600 ">Quick Links</p>
                    <Link href="/about">
                    <a class="block py-2 font-semibold  pr-4 pl-3 text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </Link>
                <Link href="/events">
                    <a class="block py-2 font-semibold  pr-4 pl-3 text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent">Events</a>
                </Link>
                <Link href="/albums">
                    <a class="block py-2 font-semibold  pr-4 pl-3 text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Albums</a>
                </Link>
                <Link href="/blogs">
                    <a class="block py-2 font-semibold  pr-4 pl-3 text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blogs</a>
                </Link>
                <Link href="/sponsor">
                    <a class="block py-2  font-semibold pr-4 pl-3 text-gray-800 rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sponsor</a>
                </Link>
                </div>
                <div className="flex flex-col gap-4 md:w-1/2">
                    <p className="font-semibold text-2xl text-gray-600 ">Contact us</p>
                    <p className="font-semibold  flex justify-start items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <a href="mailto:info@macithub.macpokhara.edu.np">
                        Mail
                        </a>
                        </p>
                    <p className="font-semibold flex justify-start items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>

                        Contact:  <a href="tel:61-522650">61-522650</a></p>
                    <p className="font-semibold  flex justify-start items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                         Pokhara-5, Parshyang
                    </p>
                </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row p-4 md:px-16 border-t-2 border-gray-500 justify-center md:justify-between">
            <div className="flex justify-center mb-2 md:mb-0 items-center  w-full md:flex md:w-auto">
                    <a href="https://www.facebook.com/mac.it.club" target="_blank" className="text-white transform transition duration-500 hover:scale-125 text-sm sm:text-xs font-semibold mr-2 hover:brightness-75"><svg
                            class="w-5 h-5 text-black fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                            />
                            </svg>
                    </a>
                    <a href="https://www.instagram.com/macithub/" target="_blank" className="text-black transform transition duration-500 hover:scale-125  text-sm sm:text-xs font-semibold mr-2 hover:brightness-75">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-7 h-7 text-black fill-current"><circle cx="22.4056" cy="9.5944" r="1.44"/>
                        <path d="m16 9.8378a6.1622 6.1622 0 1 0 6.1622 6.1622 6.1622 6.1622 0 0 0 -6.1622-6.1622zm0 10.1622a4 4 0 1 1 4-4 4 4 0 0 1 -4 4z"/>
                        <path d="m16 6.1622c3.2041 0 3.5837.0122 4.849.07a6.6418 6.6418 0 0 1 2.2283.4132 3.9748 3.9748 0 0 1 2.2774 2.2774 6.6418 6.6418 0 0 1 .4132 2.2283c.0577 1.2653.07 1.6449.07 4.849s-.0122 3.5837-.07 4.849a6.6418 6.6418 0 0 1 -.4132 2.2283 3.9748 3.9748 0 0 1 -2.2774 2.2774 6.6418 6.6418 0 0 1 -2.2283.4132c-1.2652.0577-1.6446.07-4.849.07s-3.5838-.0122-4.849-.07a6.6418 6.6418 0 0 1 -2.2283-.4132 3.9748 3.9748 0 0 1 -2.2774-2.2774 6.6418 6.6418 0 0 1 -.4132-2.2283c-.0577-1.2653-.07-1.6449-.07-4.849s.0122-3.5837.07-4.849a6.6418 6.6418 0 0 1 .4132-2.2283 3.9748 3.9748 0 0 1 2.2774-2.2775 6.6418 6.6418 0 0 1 2.2283-.4132c1.2653-.0577 1.6449-.07 4.849-.07m0-2.1621c-3.259 0-3.6677.0138-4.9476.0722a8.8068 8.8068 0 0 0 -2.9124.5578 6.1363 6.1363 0 0 0 -3.51 3.51 8.8068 8.8068 0 0 0 -.5578 2.9129c-.0584 1.2794-.0722 1.6881-.0722 4.9471s.0138 3.6677.0722 4.9476a8.8074 8.8074 0 0 0 .5578 2.9129 6.1363 6.1363 0 0 0 3.51 3.51 8.8068 8.8068 0 0 0 2.9129.5578c1.2794.0579 1.6881.0717 4.9471.0717s3.6677-.0138 4.9476-.0722a8.8074 8.8074 0 0 0 2.9129-.5578 6.1363 6.1363 0 0 0 3.51-3.51 8.8074 8.8074 0 0 0 .5578-2.9129c.0579-1.2794.0717-1.6881.0717-4.9471s-.0138-3.6677-.0722-4.9476a8.8068 8.8068 0 0 0 -.5578-2.9124 6.1363 6.1363 0 0 0 -3.51-3.5095 8.8074 8.8074 0 0 0 -2.9129-.5578c-1.2794-.0589-1.6881-.0727-4.9471-.0727z"/>
                        <path d="m0 0h32v32h-32z" fill="none"/>
                        </svg>
                    </a>
                    <a href="https://macpokhara.edu.np" target="_blank" className="text-black text-sm transform transition duration-500 hover:scale-125  sm:text-xs font-semibold mr-2 hover:brightness-75">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </a>
                </div>
                <p className="text-black font-semibold mt-3 mb-3">© Copyright 2022  MacItHub | All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;