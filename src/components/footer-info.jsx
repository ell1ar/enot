import PropTypes from "prop-types";
import "./footer-info.css";

const FooterInfo = ({ className = "" }) => {
  return (
    <div className={`footer-info1 ${className}`}>
      <div className="enotsu-cookie-parent">
        <div className="enotsu-cookie-container2">
          <span className="enotsu4">
            <span>Enot.su</span>
          </span>
          <span className="cookie4">
            <span className="span11">{` `}</span>
            <span className="cookie5">использует cookie</span>
            <span className="span12">{` `}</span>
            <span>
              для персонализации сервисов и удобства пользователей. Оставаясь на
              сайте вы даёте согласие на обработку данных
            </span>
          </span>
        </div>
        <div className="enotsu-container2">
          <span>{`Актуальная информация и условия работы компании представлены только на данном официальном сайте `}</span>
          <span className="enotsu5">Enot.su.</span>
          <span> Остерегайтесь мошенников!</span>
        </div>
      </div>
    </div>
  );
};

FooterInfo.propTypes = {
  className: PropTypes.string,
};

export default FooterInfo;
