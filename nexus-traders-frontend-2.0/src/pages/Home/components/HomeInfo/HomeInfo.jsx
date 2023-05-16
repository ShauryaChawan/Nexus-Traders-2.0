import "./homeInfo.scss";
import PropTypes from "prop-types";

// importing images
// import VectorArt1 from "../../../../assets/images/vector_art_1-transformed.png";
// import VectorArt2 from "../../../../assets/images/vector_art_2-transformed.png";
// import VectorArt3 from "../../../../assets/images/vector_art_3-transformed.png";
// import VectorArt4 from "../../../../assets/images/vector_art_4-transformed.png";
const LogoWithSignature = "./assets/images/logo_with_signature.png";
const HomeSampleImg_2 = "./assets/images/home_sample_img_2.png";

const card_data = [
  {
    id: 1,
    img: "./assets/images/vector_art_1.png",
    title: "Live And Interactive Sessions",
    content:
      "We conduct classes in a fun way, with real life examples so that students can understand all the concepts in the simplest way possible.",
  },
  {
    id: 2,
    img: "./assets/images/vector_art_2.png",
    title: "Doubt Sessions",
    content: "A friendly atmosphere so you can easily ask your doubts.",
  },
  {
    id: 3,
    img: "./assets/images/vector_art_3.png",
    title: "Team Support",
    content:
      "Young and hardworking mentors who are always available to help you, dedicated team to help you throughout the process.",
  },
  {
    id: 4,
    img: "./assets/images/vector_art_4.png",
    title: "Analysis",
    content:
      "Regular market updates and analysis for the best stock picks, support for 6 months even after the course ends.",
  },
];

const Cards = (props) => {
  return (
    <div className="card_container">
      <div className="content">
        <img src={props.img} alt="img" className="card_img" />
        <p className="card_title">{props.title}</p>
        <p className="card_content">{props.content}</p>
      </div>
    </div>
  );
};

Cards.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
};

const HomeInfo = () => {
  return (
    <div className="homeInfo_container">
      <div
        className="col_1"
        style={{ backgroundImage: `url(${HomeSampleImg_2})` }}
      >
        <img src={LogoWithSignature} alt="logo 2" />
      </div>
      <div className="col_2">
        {card_data.map((item, index) => (
          <Cards
            key={index}
            img={item.img}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeInfo;
