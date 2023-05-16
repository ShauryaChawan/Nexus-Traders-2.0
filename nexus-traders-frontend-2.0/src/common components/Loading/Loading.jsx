import "./loading.scss";
const logo = "./assets/images/logo.png";
import PulseLoader from "react-spinners/PulseLoader";
import PropTypes from "prop-types";

const Loading = ({ loading }) => {
  return (
    <div className="loading_container">
      <img src={logo} alt="" className="logo" />
      <PulseLoader
        className="icon"
        loading={loading}
        color="#daa520"
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loading;
