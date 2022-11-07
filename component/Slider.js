import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Link from "next/link";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const slide_img = [
  "https://scontent.fpkr1-1.fna.fbcdn.net/v/t39.30808-6/307092073_115257527988310_2101714852691504772_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=zEzWfbY4SzwAX9vgYiP&tn=lBiASaRC_5A3p-Px&_nc_ht=scontent.fpkr1-1.fna&oh=00_AfBy6qp2k6PGNfXF69IIHEIZytut5ir6E9DjV45gzQ_o_A&oe=636E50F4",
  "https://scontent.fpkr1-1.fna.fbcdn.net/v/t39.30808-6/307361708_115257394654990_6015530243003297354_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=c0nv4CfYd5EAX9K2Cxj&_nc_ht=scontent.fpkr1-1.fna&oh=00_AfDZAmTNpkPz7JM_SOlaLKNmUU0Y32e654PNiq9yvhxhxQ&oe=636CC364",
  "https://scontent.fpkr1-1.fna.fbcdn.net/v/t39.30808-6/311275726_123044620546216_1075667729282441773_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=_lqCN6F6CpMAX8NihDy&_nc_ht=scontent.fpkr1-1.fna&oh=00_AfC8nhvf8jhS6gMRAtyosOYvKP-uDJD3u4GbQ06Yh23UEA&oe=636D1159",
  "https://scontent.fpkr1-1.fna.fbcdn.net/v/t39.30808-6/311201990_123044653879546_2936023325503845778_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=nRvP55WTAc0AX9MGBxP&_nc_ht=scontent.fpkr1-1.fna&oh=00_AfASCdRNI_rjT6sqs44iN-Nh_rig4SXxOCVrb5Y7rtD5ew&oe=636D6ED2"
];

const Sliders = () => {

    return (
      <div className="flex w-full h-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
            delay: 3000,
        }}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="relative">
              <img src={img} alt="" />
              <div className='mt-4 absolute z-20 top-50 left-5 md:top-60 md:left-20 text-white '>
                <h2 className='text-gray-100 font-bold text-4xl md:text-5xl mb-4 '>MacItHub</h2>
                <p className='text-gray-100 font-semibold text-lg mb-6 md:text-2xl'> An official student club of Mount Annapurna Campus. Run by students and supported by school family.</p>
                <Link href='/about'>
                  <a className="border-2 inline-block px-4 py-3 hover:bg-green-500 hover:text-gray-100 hover:border-green-500">
                    Learn More
                  </a>
                </Link>
            </div>
            </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    )
}

export default Sliders