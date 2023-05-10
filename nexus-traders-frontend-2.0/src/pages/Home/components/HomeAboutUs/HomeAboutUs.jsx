import "./homeAboutUs.scss";
import { Link } from "react-router-dom";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FaArrowRight } from 'react-icons/fa';

const sujoy_hitesh_2 = "./assets/images/sujoy_hitesh_2.jpg";

const HomeAboutUs = () => {
  return (
    <div className="homeAbout_container">
      <div className="col_1">
        <h2>
          Mst. Hitesh Gadling & <br /> Mst. Sujoy Bhattacharya
        </h2>
        <h3>Founders of Nexus Traders.</h3>
        <p>
          Professional Traders and Investors in the Stock Market for the past 2
          years. They have successfully trained more than 100 students And the
          aim is to popularize the concept of stock trading & investing to
          enable the youth to benefit from it.
        </p>
        <Link to="/about">
          <button>
            To Know More
            {/* <ArrowForwardIosIcon className="icon" /> */}
            <FaArrowRight className="icon" />
          </button>
        </Link>
      </div>
      <div className="col_2">
        <img src={sujoy_hitesh_2} alt="" />
      </div>
    </div>
  );
};

export default HomeAboutUs;
