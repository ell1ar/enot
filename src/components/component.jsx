import PropTypes from "prop-types";
import "./component.css";

const Component = ({ className = "", prop }) => {
  return (
    <div className={`div95 ${className}`}>
      <div className="child18" />
      <div className="div96">{prop}</div>
      <img
        className="fluentios-arrow-24-filled-icon"
        alt=""
        src="/fluentiosarrow24filled@2x.png"
      />
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
};

export default Component;
