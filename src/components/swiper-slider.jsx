import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  HashNavigation,
  Pagination,
  Scrollbar,
  Controller,
} from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/swiper.module.scss";

export const SwiperSlider = ({ photos }) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  let slideNumber = 0;

  return (
    <>
      <Swiper
        modules={[
          Autoplay,
          Controller,
          Keyboard,
          Mousewheel,
          Navigation,
          HashNavigation,
          Pagination,
          Scrollbar,
        ]}
        className={styles.slides}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        effect="slide"
        grabCursor={true}
        spaceBetween={0}
        slidesPerView="auto"
        speed={3000}
        watchOverflow={true}
        autoplay={{
          delay: 6000,
          stopOnLastSlide: true,
          disableOnInteraction: true,
        }}
        keyboard={{ enabled: true, onlyInViewport: true, pageUpDown: true }}
        mousewheel={{ sensitivity: 1 }}
        navigation={true}
        hashNavigation={{ watchState: true, replaceState: true }}
        pagination={{ clickable: true, type: "progressbar" }}
        scrollbar={{ draggable: true }}
      >
        {photos.map((photo, index) => (
          <SwiperSlide
            key={photo.id}
            className={styles.slide}
            data-hash={++slideNumber}
          >
            <Image
              src={photo.path}
              className={styles.image}
              alt="Фото из портфолио"
              width={800}
              height={450}
              quality={30}
              priority={index == 0 ? true : false}
            />
            {index !== 0 && <SwiperLazyPreloader />}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Controller]}
        className={styles.thumbnails}
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
        slidesPerView="4"
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
        spaceBetween={16}
        centeredSlides={true}
        slideToClickedSlide={true}
        grabCursor={true}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={photo.id} className={styles.thumbnail}>
            <Image
              src={photo.path}
              className={styles.image}
              alt="Фото из портфолио"
              width={280}
              height={280}
              quality={30}
              priority={index == 0 ? true : false}
            />
            {index !== 0 && <SwiperLazyPreloader />}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

SwiperSlider.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const SwiperLazyPreloader = () => <div className="swiper-lazy-preloader" />;
