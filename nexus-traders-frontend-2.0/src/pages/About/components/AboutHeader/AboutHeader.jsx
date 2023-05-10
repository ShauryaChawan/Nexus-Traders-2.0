import React from "react";
import "./aboutHeader.scss";
const sample_img_1 = "./assets/images/sample_image_1.png";

const AboutHeader = () => {
  return (
    <div
      className="aboutHeader_container"
      style={{ backgroundImage: `url(${sample_img_1})` }}
    >
      <div className="trasparent_box"></div>
			<div className="content">
        <h1>About Us</h1>

        <p className="subTitle">Turning Wealth Into Empire</p>

        <p className="text">
          We at Nexustraders provide you with the best stock market course with
          all the elements required to become an elite trader and investor in
          the stock market in the most simplified way, personally back-tested by
          us.
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
