import "./courseCard.scss";
import PropTypes from "prop-types";

const CourseCard = (props) => {
  const insertingComma = (amount) => {
    const str_num = amount.toLocaleString();
    return str_num;
  };

  return (
    <div className="coursesCard_container">
      <div className="col_1">
        <video src={props.video} controls={false} autoPlay loop muted></video>
      </div>

      <div className="col_2">
        <div className="content">
          <div className="detail">
            <b>Duration : </b> {props.duration} <br />
            {props.new_online !== "0" ? (
              <>
                <b>Online : </b>
                <span className="old">
                  &#8377;.&nbsp;{insertingComma(props.old_online)}
                </span>
                &nbsp; &#8377;.&nbsp;{insertingComma(props.new_online)} <br />
              </>
            ) : null}
            {props.new_offline !== 0 ? (
              <>
                <b>Offline : </b>
                <span className="old">
                  &#8377;.&nbsp;{insertingComma(props.old_offline)}
                </span>
                &nbsp; &#8377;.&nbsp;{insertingComma(props.new_offline)} <br />
              </>
            ) : null}
          </div>

          <div className="syllabus">
            <ul>
              {props.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="sub_btn">
            <a href={props.path} target="_blank" rel="noreferrer">
              <button>Enroll Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  old_online: PropTypes.number.isRequired,
  new_online: PropTypes.number.isRequired,
  old_offline: PropTypes.number.isRequired,
  new_offline: PropTypes.number.isRequired,
  content: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
};

export default CourseCard;
