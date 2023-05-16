import "./home.scss";
import { useState, useEffect } from "react";

// importing the components
import Demat from "../../common components/Demat/Demat";
// import { Header as HomeHeader } from "./components/HomeHeader/HomeHeader";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import HomeInfo from "./components/HomeInfo/HomeInfo";
import HomeCourses from "./components/HomeCourses/HomeCourses";
import HomeTesti from "./components/HomeTestimonials/HomeTesti";
import HomeStats from "./components/HomeStats/HomeStats";
import HomeVision from "./components/HomeVision/HomeVision";
import HomeAboutUs from "./components/HomeAboutUs/HomeAboutUs";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const images = [
      "./assets/images/home_sample_img_1.png",
      "./assets/images/logo_with_signature.png",
      "./assets/images/home_sample_img_2.png",
      "./assets/images/vector_art_1.png",
      "./assets/images/vector_art_2.png",
      "./assets/images/vector_art_3.png",
      "./assets/images/vector_art_4.png",
      "./assets/images/testimonials/testimonial_1.jpg",
      "./assets/images/testimonials/testimonial_2.jpg",
      "./assets/images/testimonials/testimonial_3.jpg",
      "./assets/images/testimonials/testimonial_4.jpg",
      "./assets/images/testimonials/testimonial_5.jpg",
      "./assets/images/testimonials/testimonial_6.jpg",
      "./assets/images/testimonials/testimonial_7.jpg",
      "./assets/images/testimonials/testimonial_8.jpg",
      "./assets/images/testimonials/testimonial_9.jpg",
      "./assets/images/testimonials/testimonial_10.jpg",
      "./assets/images/sample_image_5.png",
      "./assets/images/sujoy_hitesh_2.jpg",
    ];

    const videos = [
      "./assets/videos/platinum_course_vid.mp4",
      "./assets/videos/advanced_course_vid.mp4",
      "./assets/videos/forex_campaign_vid.mp4",
      './assets/videos/sample_vid_3.mp4',
    ]

    let loadedCount = 0;

    const onMediaLoaded = () => {
      loadedCount++;

      if (loadedCount === images.length) {
        setLoading(false);
      }
    };

    images.forEach((image) => {
      let img = new Image();
      img.src = image;
      img.onload = onMediaLoaded;
      img = undefined;
    });

    videos.forEach((video) => {
      let vid = document.createElement('video');
      vid.src = video;
      vid.onloadeddata = onMediaLoaded;
      vid = undefined;
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home_container">
      {/* header */}
      <HomeHeader />
      {/* info */}
      <HomeInfo />
      {/* courses */}
      <HomeCourses />
      {/* demat */}
      <Demat />
      {/* testimonials */}
      <HomeTesti />
      {/* stats */}
      <HomeStats />
      {/* vision */}
      <HomeVision />
      {/* about us */}
      <HomeAboutUs />
    </div>
  );
};

export default Home;
