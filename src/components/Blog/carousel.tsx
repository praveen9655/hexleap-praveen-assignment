import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { useState } from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="container py-8 md:py-8 lg:py-8 bg-white dark:bg-gradient-to-b from-gray-800 to-gray-900">
      <SectionTitle
        title="Collection Spotlight"
        paragraph="Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!"
        center
      />
      <div className="relative px-9">
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={10}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          slidesPerView={3} // Default slides per view
          loop={true} // Enable loop
          autoplay={{ delay: 3000 }}
          breakpoints={{ // Breakpoints for responsive design
            // When window width is >= 640px (sm)
            640: {
              slidesPerView: 1,
            },
            // When window width is >= 768px (md)
            768: {
              slidesPerView: 3,
            },
            // When window width is >= 1024px (lg)
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {blogData.map(blog => (
            <SwiperSlide key={blog.id}>
              <SingleBlog blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div className="swiper-button-next border border-primary text-xs p-3" onClick={goNext}></div>
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <div className="swiper-button-prev border border-primary text-xs p-3" onClick={goPrev}></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
