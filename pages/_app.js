import Navbar from '../component/Navbar';
import '../styles/globals.css'
import TopBar from '../component/TopBar';

function MyApp({ Component, pageProps }) {
  return(
  <div>
    <TopBar />
    <Navbar/>
    <Component {...pageProps} />
  </div>
  )
  
}

export default MyApp;