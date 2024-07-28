import { useMemo } from "react";
import PropTypes from "prop-types";
import "./card-home-desk.css";

const CardHomeDesk = ({ className = "", icon, prop, propFlex }) => {
  const cardHomeDeskStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={`card-home-desk ${className}`} style={cardHomeDeskStyle}>
      <div className="card-home-desk-child" />
      <div className="wrapper-icon-wrapper">
        <div className="wrapper-icon1">
          <img className="icon5" loading="lazy" alt="" src={icon} />
        </div>
      </div>
      <b className="b53">{prop}</b>
    </div>
  );
};

CardHomeDesk.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
};

export default CardHomeDesk;
