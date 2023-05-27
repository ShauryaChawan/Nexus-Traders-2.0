import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./common components/Navbar/Navbar";
import Footer from "./common components/Footer/Footer";
import Loading from "./common components/Loading/Loading";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = [
      // Navbar images
      "../public/assets/images/logo.png",
      // Footer images
      "../public/assets/images/instagram.png",
      "../public/assets/images/youtube.png",
      // Home Page images
      "../public/assets/images/home_sample_img_1.png",
      "../public/assets/images/logo_with_signature.png",
      "../public/assets/images/home_sample_img_2.png",
      "../public/assets/images/vector_art_1.png",
      "../public/assets/images/vector_art_2.png",
      "../public/assets/images/vector_art_3.png",
      "../public/assets/images/vector_art_4.png",
      "../public/assets/images/testimonials/testimonial_1.jpg",
      "../public/assets/images/testimonials/testimonial_2.jpg",
      "../public/assets/images/testimonials/testimonial_3.jpg",
      "../public/assets/images/testimonials/testimonial_4.jpg",
      "../public/assets/images/testimonials/testimonial_5.jpg",
      "../public/assets/images/testimonials/testimonial_6.jpg",
      "../public/assets/images/testimonials/testimonial_7.jpg",
      "../public/assets/images/testimonials/testimonial_8.jpg",
      "../public/assets/images/testimonials/testimonial_9.jpg",
      "../public/assets/images/testimonials/testimonial_10.jpg",
      "../public/assets/images/sample_image_5.png",
      "../public/assets/images/sujoy_hitesh_2.jpg",
      // About Page images
      "../public/assets/images/sample_image_1.png",
      "../public/assets/images/linkedin.png",
      "../public/assets/images/sujoy_hitesh_2.jpg",
    ];

    const videos = [
      // Home and Course Page videos
      "../public/assets/videos/platinum_course_vid.mp4",
      "../public/assets/videos/platinum_course_vid_croped.mp4",
      "../public/assets/videos/advanced_course_vid.mp4",
      "../public/assets/videos/advanced_course_vid_croped.mp4",
      "../public/assets/videos/forex_campaign_vid.mp4", 
      "../public/assets/videos/forex_campaign_vid_croped.mp4", 
      "../public/assets/videos/sample_vid_3.mp4",
    ];

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
      let vid = document.createElement("video");
      vid.src = video;
      vid.onloadeddata = onMediaLoaded;
      vid = undefined;
    });
  }, []);

  // if (loading) {
  //   return <div><Loading loading={loading}/></div>;
  // }

  return (
    // <div>
    //   <Navbar />
    //   <Outlet />
    //   <Footer />
    // </div>
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
