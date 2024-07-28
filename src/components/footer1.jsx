import FrameComponent1 from "./frame-component1";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./footer1.css";

const Footer1 = ({ className = "" }) => {
  return (
    <footer className={`footer1 ${className}`}>
      <div className="bg1" />
      <div className="footer-content1">
        <div className="frame-parent6">
          <div className="logo-wrapper">
            <b className="logo4">logo</b>
          </div>
          <div className="footer-menu">
            <div className="menu-items-container">
              <div className="footer-menu-items1">
                <div className="div43">Как получить</div>
                <div className="div44">Как вернуть</div>
                <div className="div45">О нас</div>
                <div className="div46">Пожаловаться</div>
                <div className="div47">Отписаться от услуг</div>
              </div>
            </div>
            <div className="button8">
              <b className="b41">Регистрация</b>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer">
        <div className="footer-separator" />
      </div>
      <FrameComponent1 />
      <FrameComponent frameDivPadding="unset" />
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
