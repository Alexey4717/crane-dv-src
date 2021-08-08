import 'swiper/swiper.min.css'
import 'swiper/components/zoom/zoom.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import SwiperCore, { Zoom, Navigation, Pagination } from 'swiper/core'
// install Swiper modules
SwiperCore.use([Zoom, Navigation, Pagination])

export function Slider(props) {
  return (
    <div className="slider-wrapper">
      <Swiper
        style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
        zoom={true}
        navigation={true}
        pagination={{ "clickable": true }}
        className="mySwiper"
        loop={true}>

        {props.photos.map((ph, index) => {
          return <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <img src={ph} alt="img" />
            </div>
          </SwiperSlide>
        })}

      </Swiper>
    </div>
  )
}