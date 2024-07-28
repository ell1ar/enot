import { useMemo } from "react";
import PropTypes from "prop-types";
import "./component1.css";

const Component1 = ({
  className = "",
  materialSymbolsLightidCar,
  prop,
  propFlex,
}) => {
  const div1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={`div61 ${className}`} style={div1Style}>
      <div className="child15" />
      <div className="icon-container">
        <div className="icon6">
          <div className="icon-inner" />
          <img
            className="material-symbols-lightid-card-icon1"
            loading="lazy"
            alt=""
            src={materialSymbolsLightidCar}
          />
        </div>
      </div>
      <b className="b54">{prop}</b>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
  materialSymbolsLightidCar: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
};

export default Component1;
