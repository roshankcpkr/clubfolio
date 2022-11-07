const TopBar = () => {
    return (
        <div className="bg-green-700 px-2 sm:px-4 py-2 w-full dark:border-gray-600">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="text-white text-sm sm:text-xs font-semibold hover:brightness-90"><a href="mailto:info@macithub.macpokhara.edu.np">info@macithub.macpokhara.edu.np</a></div>
                <div className="flex justify-end items-center w-full md:flex md:w-auto">
                    <a href="https://www.facebook.com/mac.it.club" target="_blank" className="text-white text-sm sm:text-xs font-semibold mr-2 hover:brightness-75"><svg
                            class="w-5 h-5 text-gray fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                            />
                            </svg>
                    </a>
                    <a href="https://www.instagram.com/macithub/" target="_blank" className="text-white text-sm sm:text-xs font-semibold mr-2 hover:brightness-75">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-7 h-7 text-gray fill-current"><circle cx="22.4056" cy="9.5944" r="1.44"/>
                        <path d="m16 9.8378a6.1622 6.1622 0 1 0 6.1622 6.1622 6.1622 6.1622 0 0 0 -6.1622-6.1622zm0 10.1622a4 4 0 1 1 4-4 4 4 0 0 1 -4 4z"/>
                        <path d="m16 6.1622c3.2041 0 3.5837.0122 4.849.07a6.6418 6.6418 0 0 1 2.2283.4132 3.9748 3.9748 0 0 1 2.2774 2.2774 6.6418 6.6418 0 0 1 .4132 2.2283c.0577 1.2653.07 1.6449.07 4.849s-.0122 3.5837-.07 4.849a6.6418 6.6418 0 0 1 -.4132 2.2283 3.9748 3.9748 0 0 1 -2.2774 2.2774 6.6418 6.6418 0 0 1 -2.2283.4132c-1.2652.0577-1.6446.07-4.849.07s-3.5838-.0122-4.849-.07a6.6418 6.6418 0 0 1 -2.2283-.4132 3.9748 3.9748 0 0 1 -2.2774-2.2774 6.6418 6.6418 0 0 1 -.4132-2.2283c-.0577-1.2653-.07-1.6449-.07-4.849s.0122-3.5837.07-4.849a6.6418 6.6418 0 0 1 .4132-2.2283 3.9748 3.9748 0 0 1 2.2774-2.2775 6.6418 6.6418 0 0 1 2.2283-.4132c1.2653-.0577 1.6449-.07 4.849-.07m0-2.1621c-3.259 0-3.6677.0138-4.9476.0722a8.8068 8.8068 0 0 0 -2.9124.5578 6.1363 6.1363 0 0 0 -3.51 3.51 8.8068 8.8068 0 0 0 -.5578 2.9129c-.0584 1.2794-.0722 1.6881-.0722 4.9471s.0138 3.6677.0722 4.9476a8.8074 8.8074 0 0 0 .5578 2.9129 6.1363 6.1363 0 0 0 3.51 3.51 8.8068 8.8068 0 0 0 2.9129.5578c1.2794.0579 1.6881.0717 4.9471.0717s3.6677-.0138 4.9476-.0722a8.8074 8.8074 0 0 0 2.9129-.5578 6.1363 6.1363 0 0 0 3.51-3.51 8.8074 8.8074 0 0 0 .5578-2.9129c.0579-1.2794.0717-1.6881.0717-4.9471s-.0138-3.6677-.0722-4.9476a8.8068 8.8068 0 0 0 -.5578-2.9124 6.1363 6.1363 0 0 0 -3.51-3.5095 8.8074 8.8074 0 0 0 -2.9129-.5578c-1.2794-.0589-1.6881-.0727-4.9471-.0727z"/>
                        <path d="m0 0h32v32h-32z" fill="none"/>
                        </svg>
                    </a>
                    <a href="https://macpokhara.edu.np" target="_blank" className="text-white text-sm sm:text-xs font-semibold mr-2 hover:brightness-75">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>

                    </a>
                </div>
            </div>
        </div>
    )
}

export default TopBar