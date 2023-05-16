import PropTypes from "prop-types";
import "./meetOurTeam.scss";
import { TeamData } from "../../../../data/TeamData";
const instagram = "./assets/images/instagram.png";
const linkedin = "./assets/images/linkedin.png";

const MTTCard = (props) => {
  return (
    <div className="MTT_card_container">
      <div className="MTT_card_img" style={{ order: props.imgOrder }}>
        <img src={props.img} alt="" />
      </div>

      <div className="MTT_card_info" style={{ order: props.infoOrder }}>
        <h3>
          {props.cap1}
          <span className="MTT_card_small_text">{props.smtxt1} </span>
          {props.cap2}
          <span className="MTT_card_small_text">{props.smtxt2} </span>
        </h3>
        <p className="MTT_card_subTitle">{props.subtitle}</p>
        <p className="MTT_card_text">{props.text}</p>
        <div className="MTT_card_icon_grp">
          <a href={props.instagram} target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram" />
          </a>
          <a href={props.linkedin} target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

// eslint rules
MTTCard.propTypes = {
  img: PropTypes.string.isRequired,
  imgOrder: PropTypes.number.isRequired,
  infoOrder: PropTypes.number.isRequired,
  cap1: PropTypes.string.isRequired,
  smtxt1: PropTypes.string.isRequired,
  cap2: PropTypes.string.isRequired,
  smtxt2: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

const MeetOurTeam = () => {
  return (
    <div className="meet_the_team">
      <h2>Meet The Team</h2>

      {TeamData.map((item, index) => (
        <MTTCard
          key={index}
          img={item.img}
          imgOrder={item.imgOrder}
          infoOrder={item.infoOrder}
          cap1={item.cap1}
          cap2={item.cap2}
          smtxt1={item.smtxt1}
          smtxt2={item.smtxt2}
          subtitle={item.subtitle}
          text={item.text}
          instagram={item.instagram}
          linkedin={item.linkedin}
        />
      ))}
    </div>
  );
};

export default MeetOurTeam;
