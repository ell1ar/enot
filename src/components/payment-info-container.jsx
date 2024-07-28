import PropTypes from "prop-types";
import "./payment-info-container.css";

const PaymentInfoContainer = ({ className = "" }) => {
  return (
    <section className={`payment-info-container ${className}`}>
      <img className="bg-icon5" alt="" src="/bg-21@2x.png" />
      <img
        className="master-card-icon1"
        loading="lazy"
        alt=""
        src="/master-card1.svg"
      />
      <img className="visa-icon1" loading="lazy" alt="" src="/visa1.svg" />
      <img className="mir-icon1" loading="lazy" alt="" src="/mir1.svg" />
      <img className="mimenu-icon1" loading="lazy" alt="" src="/mimenu1.svg" />
      <div className="rectangle-parent4">
        <div className="frame-child14" />
        <img
          className="mask-group-icon1"
          loading="lazy"
          alt=""
          src="/mask-group1@2x.png"
        />
        <div className="div69">
          <span className="span10">
            <span>Нам</span>
            <span className="span11">{` `}</span>
          </span>
          <b className="b56">7</b>
          <span className="span12">
            <span className="span13">{` `}</span>
            <span>лет!</span>
          </span>
        </div>
      </div>
      <img className="bottom-shape-icon" alt="" src="/bottom-shape@2x.png" />
    </section>
  );
};

PaymentInfoContainer.propTypes = {
  className: PropTypes.string,
};

export default PaymentInfoContainer;
