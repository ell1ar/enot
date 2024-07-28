import PropTypes from "prop-types";
import "./content-wrapper.css";

const ContentWrapper = ({ className = "" }) => {
  return (
    <div className={`content-wrapper ${className}`}>
      <div className="baner">
        <img className="bg-icon" alt="" src="/bg@2x.png" />
        <header className="banner-content">
          <div className="banner-nav-wrapper">
            <div className="banner-nav-list">
              <a className="logo">logo</a>
              <div className="banner-nav-right">
                <div className="banner-contact-list">
                  <a className="a">Как получить</a>
                  <a className="a1">Как вернуть</a>
                  <a className="a2">О нас</a>
                  <a className="a3">Пожаловаться</a>
                  <a className="a4">Отписаться от услуг</a>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-social">
            <div className="banner-social-icons">
              <div className="mingcutetelegram-fill-parent">
                <img
                  className="mingcutetelegram-fill-icon"
                  loading="lazy"
                  alt=""
                  src="/mingcutetelegramfill.svg"
                />
                <img
                  className="icround-email-icon"
                  loading="lazy"
                  alt=""
                  src="/icroundemail.svg"
                />
              </div>
            </div>
            <button className="button">
              <a className="a5">Регистрация</a>
            </button>
          </div>
        </header>
        <div className="hero-content-parent">
          <div className="hero-content">
            <div className="hero-main">
              <div className="hero-info">
                <div className="hero-title-wrapper">
                  <div className="hero-title-wrapper-child" />
                  <img
                    className="mask-group-icon"
                    loading="lazy"
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className="div">
                    <span className="span2">{`Нам `}</span>
                    <b className="b">7</b>
                    <span className="span3"> лет!</span>
                  </div>
                </div>
                <img
                  className="hero-image-icon"
                  alt=""
                  src="/hero-image@2x.png"
                />
              </div>
              <div className="hero-description">
                <div className="hero-paragraph">
                  <h1 className="h1">Онлайн займы на вашу карту</h1>
                  <h3 className="h3">Первый займ может быть без процентов!*</h3>
                </div>
              </div>
            </div>
            <div className="loan-benefits">
              <div className="benefits-content">
                <b className="b1">Способы получения</b>
                <div className="benefits-options">
                  <img
                    className="master-card-icon"
                    loading="lazy"
                    alt=""
                    src="/master-card.svg"
                  />
                  <div className="benefits-cards">
                    <img
                      className="visa-icon"
                      loading="lazy"
                      alt=""
                      src="/visa.svg"
                    />
                  </div>
                  <div className="benefits-cards1">
                    <img
                      className="mir-icon"
                      loading="lazy"
                      alt=""
                      src="/mir.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loan-calculator">
            <div className="div1">
              <div className="child" />
              <div className="calculator-content">
                <h1 className="h11">Калькулятор займа</h1>
                <div className="calculator-inputs">
                  <div className="loan-amount-input">
                    <div className="loan-amount-label">
                      <div className="div2">{`Требуемая сумма `}</div>
                    </div>
                    <b className="b2">35 000 ₽</b>
                  </div>
                  <div className="wrapper-group-26">
                    <img
                      className="wrapper-group-26-child"
                      loading="lazy"
                      alt=""
                      src="/group-26.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="loan-results">
                <div className="result-values">
                  <div className="div3">Вы вернёте</div>
                  <b className="b3">35 000 ₽</b>
                </div>
                <div className="result-values1">
                  <div className="div4">Ставка</div>
                  <b className="b4">Без процентов*</b>
                </div>
              </div>
              <button className="button1">
                <b className="b5">Получить</b>
              </button>
              <img className="icon" alt="" src="/12-1-1@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentWrapper.propTypes = {
  className: PropTypes.string,
};

export default ContentWrapper;
