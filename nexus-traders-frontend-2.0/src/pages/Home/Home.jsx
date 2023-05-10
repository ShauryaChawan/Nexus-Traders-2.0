import "./home.scss";

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
  return (
    <div className="home_container">
      {/* header */}
      <HomeHeader/>
      {/* info */}
      <HomeInfo/>
      {/* courses */}
      <HomeCourses/>
      {/* demat */}
      <Demat/>
      {/* testimonials */}
      <HomeTesti/>
      {/* stats */}
      <HomeStats/>
      {/* vision */}
      <HomeVision/>
      {/* about us */}
      <HomeAboutUs/>
    </div>
  );
};

export default Home;
