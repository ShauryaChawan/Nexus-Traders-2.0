import "./homeCourses.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const videos = [
  "./assets/videos/platinum_course_vid.mp4",
  "./assets/videos/platinum_course_vid.mp4",
  "./assets/videos/forex_campaign_vid.mp4",
];

const CourseSwiperCard = () => {
  return (
    <div className="courseSlider">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {videos.map((item, key) => {
          <SwiperSlide key={key}>
            <Link to="/courses">
              <video
                src={item}
                controls={false}
                autoPlay
                loop
                muted
              ></video>
            </Link>
          </SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

const HomeCourses = () => {
  return (
    <div className="homeCourses_container">
      <div className="col_1">
        <h2>Courses</h2>
        <p>
          A complete course designed specifically for you to attain the
          Financial Goals and Status you ever dreamed of! Invest this time in
          yourself, learn trading and investing in the Stock Market, and become
          financially free. At the end of the course, you will be able to trade
          daily and make profits in real-time.
        </p>
        <Link to="/courses">
          <button className="button">Enroll Now</button>
        </Link>
      </div>

      <div className="col_2">
        <div className="slider">
          <CourseSwiperCard />
        </div>
      </div>
    </div>
  );
};

export default HomeCourses;
