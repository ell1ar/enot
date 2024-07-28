import PropTypes from "prop-types";
import "./frame-component11.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`cookie-info-content-wrapper ${className}`}>
      <div className="cookie-info-content">
        <div className="enotsu-cookie-container">
          <span className="enotsu">
            <span>Enot.su</span>
          </span>
          <span className="cookie">
            <span className="span6">{` `}</span>
            <span className="cookie1">использует cookie</span>
            <span className="span7">{` `}</span>
            <span>
              для персонализации сервисов и удобства пользователей. Оставаясь на
              сайте вы даёте согласие на обработку данных
            </span>
          </span>
        </div>
        <div className="enotsu-container">
          <span>{`Актуальная информация и условия работы компании представлены только на данном официальном сайте `}</span>
          <span className="enotsu1">Enot.su.</span>
          <span> Остерегайтесь мошенников!</span>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
