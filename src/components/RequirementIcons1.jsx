import PropTypes from "prop-types";
import "./RequirementIcons1.css";

const RequirementIcons1 = ({ className = "", icon, prop }) => {
  return (
    <div className={`requirement-icons ${className}`}>
      <div className="requirement-icons-child" />
      <div className="wrapper-icon">
        <img className="icon1" loading="lazy" alt="" src={icon} />
      </div>
      <h3 className="h31">{prop}</h3>
    </div>
  );
};

RequirementIcons1.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  prop: PropTypes.string,
};

export default RequirementIcons1;
