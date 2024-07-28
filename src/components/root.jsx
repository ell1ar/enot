import PropTypes from "prop-types";
import "./root.css";

const Root = ({ className = "" }) => {
  return (
    <div className={`root ${className}`}>
      <div className="root-inner">
        <div className="logo-parent">
          <a className="logo6">logo</a>
          <div className="frame-wrapper1">
            <div className="parent3">
              <a className="a18">Как получить</a>
              <a className="a19">Как вернуть</a>
              <a className="a20">О нас</a>
              <a className="a21">Пожаловаться</a>
              <a className="a22">Отписаться от услуг</a>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent3">
        <div className="contact-icons-wrapper">
          <div className="contact-icons">
            <img
              className="mingcutetelegram-fill-icon4"
              loading="lazy"
              alt=""
              src="/mingcutetelegramfill.svg"
            />
            <img
              className="icround-email-icon4"
              loading="lazy"
              alt=""
              src="/icroundemail.svg"
            />
          </div>
        </div>
        <button className="button9">
          <a className="a23">Регистрация</a>
        </button>
      </div>
    </div>
  );
};

Root.propTypes = {
  className: PropTypes.string,
};

export default Root;
