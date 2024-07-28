import InputFields from "../components/input-fields";
import Component from "../components/component";
import FooterInfo from "../components/footer-info";
import "./px1.css";

const Px1 = () => {
  return (
    <div className="px2">
      <section className="rectangle-parent2">
        <div className="frame-child7" />
        <div className="frame-child8" />
        <img className="icon7" loading="lazy" alt="" src="/12-1-11@2x.png" />
        <div className="links-container-parent">
          <header className="links-container">
            <div className="links-container-inner">
              <div className="rectangle-parent3">
                <div className="frame-child9" />
                <div className="frame-parent4">
                  <div className="logo-group">
                    <a className="logo7">logo</a>
                    <div className="frame-wrapper2">
                      <div className="parent4">
                        <a className="a24">Как получить</a>
                        <a className="a25">Как вернуть</a>
                        <a className="a26">О нас</a>
                        <a className="a27">Пожаловаться</a>
                        <a className="a28">Отписаться от услуг</a>
                      </div>
                    </div>
                  </div>
                  <div className="contact-icons-container">
                    <div className="contact-icons1">
                      <img
                        className="mingcutetelegram-fill-icon5"
                        loading="lazy"
                        alt=""
                        src="/mingcutetelegramfill1.svg"
                      />
                      <img
                        className="icround-email-icon5"
                        loading="lazy"
                        alt=""
                        src="/icroundemail1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="button10">
              <a className="a29">Регистрация</a>
            </button>
          </header>
          <div className="wrapper4">
            <div className="div45">
              <div className="child7" />
              <InputFields />
              <div className="address-title">
                <div className="parent5">
                  <h1 className="h17">Адрес регистрации и снилс</h1>
                  <div className="address-details">
                    <Component prop="Область" />
                    <Component prop="Населенный пункт" />
                    <input className="input1" placeholder="Улица" type="text" />
                    <div className="div46">
                      <div className="child8" />
                      <div className="div47">Дом</div>
                    </div>
                    <div className="apartment-input">
                      <div className="div48">
                        <div className="child9" />
                        <div className="div49">Квартира</div>
                      </div>
                      <div className="no-apartment">
                        <input className="group-input1" type="checkbox" />
                        <div className="wrapper5">
                          <div className="div50">Нет квартиры</div>
                        </div>
                      </div>
                    </div>
                    <input
                      className="input2"
                      placeholder="Снилс (необязательно)"
                      type="text"
                    />
                  </div>
                  <button className="button11">
                    <b className="b30">Далее</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="content-background" />
      <footer className="footer3">
        <div className="bg3" />
        <div className="footer-content3">
          <div className="frame-parent5">
            <div className="logo-frame">
              <h1 className="logo8">logo</h1>
            </div>
            <div className="footer-links-parent">
              <div className="footer-links1">
                <div className="footer-links-list1">
                  <div className="div51">Как получить</div>
                  <div className="div52">Как вернуть</div>
                  <div className="div53">О нас</div>
                  <div className="div54">Пожаловаться</div>
                  <div className="div55">Отписаться от услуг</div>
                </div>
              </div>
              <button className="button12">
                <b className="b31">Регистрация</b>
              </button>
            </div>
          </div>
        </div>
        <div className="footer-decoration">
          <div className="footer-decoration-child" />
        </div>
        <FooterInfo />
        <div className="footer-contacts">
          <div className="footer-contact-details">
            <div className="footer-document">
              <div className="footer-document-link">
                <div className="footer-document-icons">
                  <img
                    className="teenyiconspdf-solid2"
                    loading="lazy"
                    alt=""
                    src="/teenyiconspdfsolid.svg"
                  />
                  <img
                    className="teenyiconspdf-solid3"
                    alt=""
                    src="/teenyiconspdfsolid.svg"
                  />
                </div>
              </div>
              <div className="footer-legal">
                <div className="div56">
                  Политика обработки персональных данных
                </div>
                <div className="div57">
                  Оператор персональных данных номер такой от числа такого
                </div>
              </div>
            </div>
            <div className="footer-social">
              <img
                className="icround-email-icon6"
                alt=""
                src="/icroundemail.svg"
              />
              <img
                className="mingcutetelegram-fill-icon6"
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

export default Px1;