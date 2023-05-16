import "./courseHeader.scss";
const sample_img_1 = "./assets/images/sample_image_1.png";

const CourseHeader = () => {
  return (
    <div
      className="courseHeader_container"
      style={{ backgroundImage: `url(${sample_img_1})` }}
    >
      <div className="trasparent_box"></div>
      <div className="content">
        <h1>Premium Courses</h1>

        <p className="text">
          A complete course designed specifically for you to learn to trade and
          investing in the Stock Market. At the end of the course, you will be
          able to trade daily and make profits in real-time.
        </p>
      </div>
    </div>
  );
};

export default CourseHeader;
