import PropTypes from "prop-types";
import "./FooterContainer.css";

const FooterContainer = ({ className = "" }) => {
  return (
    <div className={`footer-container ${className}`}>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo-links">
            <h1 className="logo3">logo</h1>
          </div>
          <div className="footer-menu-registration">
            <div className="footer-menu-items">
              <div className="footer-links">
                <div className="div36">Как получить</div>
                <div className="div37">Как вернуть</div>
                <div className="div38">О нас</div>
                <div className="div39">Пожаловаться</div>
                <div className="div40">Отписаться от услуг</div>
              </div>
            </div>
            <button className="button7">
              <b className="b40">Регистрация</b>
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