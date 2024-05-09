// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "@/styles/SwiperSlide.module.scss";

// Import Swiper styles

import "swiper/swiper.min.css";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

const SwiperSlider = ({ images, customDelay }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      loop={true}
      navigation={true}
      autoplay={{ delay: customDelay, disableOnInteraction: false }}
      className={styles.mySwiper}
      modules={[Autoplay, Navigation]}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={`${img}`}
            alt={`Bérelhető lakóautó ${index}`}
            className={styles.swiperImage}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SwiperSlider;
