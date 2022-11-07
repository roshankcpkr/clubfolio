import Navbar from '../component/Navbar';
import '../styles/globals.css'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Footer from "../component/Footer";

function MyApp({ Component, pageProps }) {
  return(
  <div className='flex flex-col h-full'>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </div>
  )
  
}

export default MyApp;