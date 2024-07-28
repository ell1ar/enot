import PropTypes from "prop-types";
import "./component1.css";

const Component1 = ({ className = "", prop }) => {
  return (
    <div className={`div80 ${className}`}>
      <div className="child13" />
      <div className="wrapper9">
        <div className="div81">{prop}</div>
      </div>
      <img
        className="basilcalendar-solid-icon"
        alt=""
        src="/basilcalendarsolid.svg"
      />
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
};

export default Component1;