import "./about.scss";
import AboutHeader from "./components/AboutHeader/AboutHeader";
import MeetOurTeam from "./components/MeetOurTeam/MeetOurTeam";
import OurStory from "./components/OurStory/OurStory";

const About = () => {
  return (
    <div className="about_container">
      {/* About Header */}
      <AboutHeader />
      {/* Meet Our Team */}
      <MeetOurTeam />
      {/* Our Story */}
      <OurStory />
    </div>
  );
};

export default About;
