import PropTypes from "prop-types";
import "./footer-container.css";

const FooterContainer = ({ className = "" }) => {
  return (
    <div className={`footer-container ${className}`}>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo-links">
            <h1 className="logo1">logo</h1>
          </div>
          <div className="footer-menu-registration">
            <div className="footer-menu-items">
              <div className="footer-links">
                <div className="div15">Как получить</div>
                <div className="div16">Как вернуть</div>
                <div className="div17">О нас</div>
                <div className="div18">Пожаловаться</div>
                <div className="div19">Отписаться от услуг</div>
              </div>
            </div>
            <button className="button3">
              <b className="b19">Регистрация</b>
            </button>
          </div>
        </div>
      </div>
      <div className="footer-divider" />
    </div>
  );
};

FooterContainer.propTypes = {
  className: PropTypes.string,
};

export default FooterContainer;
