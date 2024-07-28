import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", frameDivPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <div
      className={`legal-info-container-wrapper ${className}`}
      style={frameDivStyle}
    >
      <div className="legal-info-container">
        <div className="legal-info-content">
          <div className="legal-info-items">
            <div className="policy-download-icon">
              <img
                className="teenyiconspdf-solid"
                loading="lazy"
                alt=""
                src="/teenyiconspdfsolid.svg"
              />
              <img
                className="teenyiconspdf-solid1"
                loading="lazy"
                alt=""
                src="/teenyiconspdfsolid.svg"
              />
            </div>
          </div>
          <div className="legal-documents">
            <div className="div41">Политика обработки персональных данных</div>
            <div className="div42">
              Оператор персональных данных номер такой от числа такого
            </div>
          </div>
        </div>
        <div className="contact-info">
          <img
            className="icround-email-icon2"
            loading="lazy"
            alt=""
            src="/icroundemail.svg"
          />
          <img
            className="mingcutetelegram-fill-icon2"
            loading="lazy"
            alt=""
            src="/mingcutetelegramfill.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivPadding: PropTypes.any,
};

export default FrameComponent;