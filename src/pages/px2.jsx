import Content from "../Form";
import FooterInfo from "../components/footer-info";
import "./px2.css";

const Px2 = () => {
  return (
    <div className="px">
      <main className="rectangle-parent">
        <div className="frame-child" />
        <div className="rect-top-second" />
        <img
          className="rect-empty-icon"
          loading="lazy"
          alt=""
          src="/12-1-11@2x.png"
        />
        <section className="links-block">
          <header className="link-get-return">
            <div className="link-list-wrapper">
              <div className="link-list">
                <div className="watermelon-peperomia" />
                <div className="get-return-links">
                  <div className="links">
                    <a className="logo">logo</a>
                    <div className="social-links">
                      <div className="social-link-icons">
                        <a className="a">Как получить</a>
                        <a className="a1">Как вернуть</a>
                        <a className="a2">О нас</a>
                        <a className="a3">Пожаловаться</a>
                        <a className="a4">Отписаться от услуг</a>
                      </div>
                    </div>
                  </div>
                  <div className="email-block">
                    <div className="email-icon">
                      <img
                        className="mingcutetelegram-fill-icon"
                        loading="lazy"
                        alt=""
                        src="/mingcutetelegramfill1.svg"
                      />
                      <img
                        className="icround-email-icon"
                        loading="lazy"
                        alt=""
                        src="/icroundemail1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="button">
              <a className="a5">Регистрация</a>
            </button>
          </header>
          <Content />
        </section>
      </main>
      <div className="background" />
      <footer className="footer">
        <div className="bg" />
        <div className="footer-content">
          <div className="footer-top">
            <div className="logo-footer-block">
              <h1 className="logo1">logo</h1>
            </div>
            <div className="footer-links-block">
              <div className="footer-links-wrapper">
                <div className="footer-links-list">
                  <div className="div">Как получить</div>
                  <div className="div1">Как вернуть</div>
                  <div className="div2">О нас</div>
                  <div className="div3">Пожаловаться</div>
                  <div className="div4">Отписаться от услуг</div>
                </div>
              </div>
              <button className="button1">
                <b className="b">Регистрация</b>
              </button>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="divider" />
        </div>
        <FooterInfo />
        <div className="document-links">
          <div className="document-links-wrapper">
            <div className="document-links-content">
              <div className="document-links-list">
                <div className="document-link-icon">
                  <img
                    className="teenyiconspdf-solid"
                    loading="lazy"
                    alt=""
                    src="/teenyiconspdfsolid.svg"
                  />
                  <img
                    className="teenyiconspdf-solid1"
                    alt=""
                    src="/teenyiconspdfsolid.svg"
                  />
                </div>
              </div>
              <div className="parent">
                <div className="div5">
                  Политика обработки персональных данных
                </div>
                <div className="div6">
                  Оператор персональных данных номер такой от числа такого
                </div>
              </div>
            </div>
            <div className="contact-info">
              <img
                className="icround-email-icon1"
                alt=""
                src="/icroundemail.svg"
              />
              <img
                className="mingcutetelegram-fill-icon1"
                alt=""
                src="/mingcutetelegramfill.svg"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Px2;
