import { useMemo } from "react";
import PropTypes from "prop-types";
import "./RequirementIcons.css";

const RequirementIcons = ({
  className = "",
  materialSymbolsLightidCar,
  prop,
  propMinWidth,
}) => {
  const requirementIconsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`requirement-icons1 ${className}`}
      style={requirementIconsStyle}
    >
      <div className="requirement-icons-item" />
      <div className="icon2">
        <div className="icon-child" />
        <img
          className="material-symbols-lightid-card-icon"
          loading="lazy"
          alt=""
          src={materialSymbolsLightidCar}
        />
      </div>
      <h3 className="h32">{prop}</h3>
    </div>
  );
};

RequirementIcons.propTypes = {
  className: PropTypes.string,
  materialSymbolsLightidCar: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default RequirementIcons;
