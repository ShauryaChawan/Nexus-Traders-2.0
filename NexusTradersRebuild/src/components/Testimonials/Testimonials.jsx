import "./testi.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
// import { EffectCoverflow, Pagination } from "swiper";
import { TestimonialData } from "../../data/TestimonialData";

const TestoSlider = () => {
  return (
    <div className="testiSlider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        {TestimonialData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.src} alt=" " />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section>
      <div className="homeTesti_container">
        <h2>Testimonials</h2>
        <div className="slider">
          <TestoSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
