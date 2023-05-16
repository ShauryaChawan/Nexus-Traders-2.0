import { Link } from "react-router-dom";
import "./homeHeader.scss";

const HomeSampleImg = "./assets/images/home_sample_img_1.png";

const HomeHeader = () => {
  return (
    <div
      className="homeHeader_container"
      style={{ backgroundImage: `url(${HomeSampleImg})` }}
    >
      <h1>NEXUS TRADERS</h1>
      <h2>TURNING WEALTH INTO EMPIRE</h2>

      <p>
        We at Nexustraders provide you with all the elements required to become
        an elite trader and investor in the stock market in the most simple
        methods, personally backtested by us.
      </p>

      <Link to="/courses">
        <button className="btn">Enroll Now</button>
      </Link>
    </div>
  );
};

export default HomeHeader;
