import { useMemo } from "react";
import PropTypes from "prop-types";
import "./component2.css";

const Component2 = ({
  className = "",
  prop,
  frepimellemi2434gmPlaceho,
  charmcross,
  propBorder,
}) => {
  const divStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div className={`div48 ${className}`} style={divStyle}>
      <div className="child10" />
      <div className="name-fields">
        <div className="div49">{prop}</div>
        <input
          className="frepimellemi-2434gmailcom1"
          placeholder={frepimellemi2434gmPlaceho}
          type="text"
        />
      </div>
      <div className="clear-buttons">
        <div className="rectangle-parent3">
          <div className="frame-child8" />
          <img className="charmcross-icon1" alt="" src={charmcross} />
        </div>
      </div>
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  frepimellemi2434gmPlaceho: PropTypes.string,
  charmcross: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
};

export default Component2;
