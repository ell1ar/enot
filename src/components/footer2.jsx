import PropTypes from "prop-types";
import "./footer2.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`footer2 ${className}`}>
      <div className="bg2" />
      <div className="logo-container-container">
        <div className="logo-container1">
          <h1 className="logo6">logo</h1>
          <div className="registration-button-container">
            <button className="button12">
              <b className="b55">Регистрация</b>
            </button>
          </div>
        </div>
      </div>
      <div className="footer-inner">
        <div className="frame-child13" />
      </div>
      <div className="banner-content-container">
        <div className="footer-links1">
          <div className="footer-link-titles">
            <div className="div62">Как получить</div>
          </div>
          <div className="footer-link-titles1">
            <div className="div63">Как вернуть</div>
          </div>
          <div className="footer-link-titles2">
            <div className="div64">Пожаловаться</div>
          </div>
          <div className="div65">Отписаться от услуг</div>
          <div className="footer-link-titles3">
            <div className="div66">О нас</div>
          </div>
        </div>
      </div>
      <div className="contacts-container">
        <div className="contacts">
          <img
            className="icround-email-icon3"
            loading="lazy"
            alt=""
            src="/icroundemail.svg"
          />
          <img
            className="mingcutetelegram-fill-icon3"
            loading="lazy"
            alt=""
            src="/mingcutetelegramfill.svg"
          />
        </div>
      </div>
      <div className="grid-wrapper">
        <div className="grid" />
      </div>
      <div className="cookie-notice-container">
        <div className="cookie-notice">
          <div className="enotsu-cookie-container1">
            <span className="enotsu2">
              <span>Enot.su</span>
            </span>
            <span className="cookie2">
              <span className="span8">{` `}</span>
              <span className="cookie3">использует cookie</span>
              <span className="span9">{` `}</span>
              <span>
                для персонализации сервисов и удобства пользователей. Оставаясь
                на сайте вы даёте согласие на обработку данных
              </span>
            </span>
          </div>
          <div className="enotsu-container1">
            <span>{`Актуальная информация и условия работы компании представлены только на данном официальном сайте `}</span>
            <span className="enotsu3">Enot.su.</span>
            <span> Остерегайтесь мошенников!</span>
          </div>
        </div>
      </div>
      <div className="passing-icon-wrapper">
        <div className="passing-icon" />
      </div>
      <div className="legal-documents-container">
        <div className="legal-documents1">
          <div className="document-links">
            <div className="document-names">
              <img
                className="teenyiconspdf-solid2"
                loading="lazy"
                alt=""
                src="/teenyiconspdfsolid.svg"
              />
            </div>
            <div className="div67">Политика обработки персональных данных</div>
          </div>
          <div className="document-links1">
            <div className="teenyiconspdf-solid-wrapper">
              <img
                className="teenyiconspdf-solid3"
                loading="lazy"
                alt=""
                src="/teenyiconspdfsolid.svg"
              />
            </div>
            <div className="div68">
              Оператор персональных данных номер такой от числа такого
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
