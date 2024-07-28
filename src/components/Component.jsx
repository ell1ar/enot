import PropTypes from "prop-types";
import "./Component.css";

const Component = ({ className = "", prop, prop1, prop2 }) => {
  return (
    <div className={`div26 ${className}`}>
      <div className="child8" />
      <b className="b27">
        <span>0</span>
        <span className="span4">{prop}</span>
      </b>
      <b className="b28">{prop1}</b>
      <div className="div27">{prop2}</div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
};

export default Component;