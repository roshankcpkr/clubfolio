import Slider from '../component/Slider'
import Link from "next/link"

function Home()
{
    return (
    <div className="flex-1 relative w-full h-full">
        <div>
        <Slider />
        </div>
        <div className='flex justify-center flex-col items-center h-full px-4 py-2'>
            <h2 className='font-semibold text-3xl mb-4 mt-16 text-gray-700 font-serif'>What We Do</h2>
            <p className='font-serif text-gray-600 mb-4'>We are official club of Mount Annapurna campus.
            Helping students to learn and grow in the field of technology.
            </p>
        </div>
        <div className='flex flex-wrap gap-4 justify-center p-4'>
            <div className='flex flex-col p-4 bg-green-600 rounded-2xl md:w-1/4 md:min-w-min w-full'>
                <h2 className='font-serif text-white mb-2 font-semibold text-2xl'>Teach technology</h2>
                <p className='font-sans text-gray-100'>Make students familiar with various technologies and spark their interest. 
                Help students find their field of interest and build career</p>
                <img src="images/bootcamp.jpg" className='mt-2 h-full rounded-xl' alt=""/>
            </div>
            <div className='flex flex-col p-4 bg-green-600 rounded-2xl md:w-1/4 md:min-w-min w-full'>
                <h2 className='font-serif text-white mb-2 font-semibold text-2xl'>Conduct Workshops</h2>
                <p className='font-sans text-gray-100'>Conduct various workshops and events to teach technical skills related to various fields.</p>
                <img src="images/workshops.jpg" className='mt-2 h-full rounded-xl' alt=""/>
            </div>
            <div className='flex flex-col p-4 bg-green-600 rounded-2xl md:w-1/4 md:min-w-min w-full'>
                <h2 className='font-serif text-white mb-2 font-semibold text-2xl'>Challenging Competitions</h2>
                <p className='font-sans text-gray-100'>Conduct challenging inter and intra school compeitions to help students compete with each other and polish their skills</p>
                <img src="images/hackathons.jpg" className='mt-2 h-full rounded-xl' alt=""/>
            </div>
        </div>
        <div className='flex justify-center w-full flex-col items-center h-full px-4 py-2'>
            <div className='w-full flex flex-col items-center'>
            <h2 className='font-semibold text-3xl mb-4 mt-16 text-gray-700 font-serif'>Our Events</h2>
            <p className='text-gray-500 font-serif text-sm mb-8'>We organize various events on our school.</p>
            </div>
            <div className='flex gap-4 w-full items-center justify-center md:w-2/3 flex-wrap'>
                <div className='flex flex-col w-full md:w-1/4 bg-green-300 rounded-xl p-4 md:w-50'>
                    <p className='font-serif text-2xl font-semibold'>1+</p>
                    <p  className='text-gray-700'>Tech Talks</p>
                </div>
                <div className='flex flex-col w-full md:w-1/4 bg-green-300 rounded-xl p-4 md:w-50'>
                    <p className='font-serif text-2xl font-semibold'>1+</p>
                    <p className='text-gray-700'>Workshops</p>
                </div> 
                <div className='flex flex-col w-full md:w-1/4 bg-green-300 rounded-xl p-4 md:w-50'>
                    <p className='font-serif text-2xl font-semibold'>1+</p>
                    <p className='text-gray-700'>Hackathons</p>
                </div>
            </div>
            <div className='flex flex-col items-start w-1/2 gap-4 mt-8'>
                <p className='text-gray-500 font-serif text-sm'>Get details about latest events and upcoming ones.</p>
                <Link href="/events">
                    <a>
                        <button className='bg-green-600 text-white font-serif font-semibold px-4 py-3  rounded-lg hover:brightness-75'>View All</button>
                    </a>
                </Link>
            </div>
        </div>
        <div className='flex justify-center flex-row items-center h-full px-4 py-2 mb-16 mt-16'>
            <div className='flex flex-col items-center w-full'>
            <h2 className='font-semibold text-3xl mb-4 mt-16 text-gray-700 font-serif text-center'>Gallary</h2>
            <div class="container grid md:grid-cols-3 grid-cols-1 gap-2 mx-auto">
                <div class="w-full rounded">
                    <img src="images/image1.jpg"
                        alt="image" />
                </div>
                <div class="w-full rounded">
                    <img src="images/image2.jpg"
                        alt="image" />
                </div>
                <div class="w-full rounded">
                    <img src="images/image3].jpg"
                        alt="image" />
                </div>
                <div class="w-full rounded">
                    <img src="images/image4.jpg"
                        alt="image" />
                </div>
                <div class="w-full rounded">
                    <img src="images/image5.jpg"
                        alt="image" />
                </div>
                <div class="w-full rounded">
                    <img src="images/image6.jpg"
                        alt="image" />
                </div>
            </div>
            <Link href="/gallary">
                <a className='border-2 inline-block px-4 py-3 bg-green-500 text-gray-100 border-green-500 mt-4 hover:brightness-75 rounded-lg'>
                    View Gallary
                </a>
            </Link>
            </div>
        </div>
        <div className='flex justify-center flex-row justify-center items-center h-full w-full'>
            <div className='flex flex-col md:flex-row justify-center items-center justify-between rounded-3xl bg-green-500 px-8 py-8 mb-16 w-2/3'>
            <h2 className='font-semibold font-quicksand text-xl mb-4 md:mb-0 text-center md:text-3xl text-white font-serif'>Student of Mount Annapurna Campus?</h2>
            <Link href="/signup">
                <a className='bg-white inline-block text-green-500 font-semibold rounded-lg px-4 py-3 hover:brightness-75'>
                Join our club
                </a>
            </Link>
            </div>
        </div>
    </div>

        )
    
}

export default Home