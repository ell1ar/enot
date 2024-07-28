import Footer1 from "../components/footer1";
import "./email1920-px.css";

const Email1920Px = () => {
  return (
    <div className="email-1920-px">
      <section className="left-rect-parent">
        <div className="left-rect" />
        <div className="right-rect" />
        <img
          className="empty-rect-icon"
          loading="lazy"
          alt=""
          src="/12-1-11@2x.png"
        />
        <div className="frame-parent">
          <div className="frame-wrapper">
            <div className="frame-group">
              <header className="logo-background-parent">
                <div className="logo-background" />
                <div className="logo-container-wrapper">
                  <div className="logo-container">
                    <a className="logo">logo</a>
                    <div className="menu-items-wrapper">
                      <div className="menu-items">
                        <a className="a">Как получить</a>
                        <a className="a1">Как вернуть</a>
                        <a className="a2">О нас</a>
                        <a className="a3">Пожаловаться</a>
                        <a className="a4">Отписаться от услуг</a>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="div">
                <div className="child" />
                <div className="personal-info">
                  <div className="input-fields">
                    <div className="frame-container">
                      <div className="ellipse-parent">
                        <div className="frame-child" />
                        <div className="input-icons-parent">
                          <div className="input-icons" />
                          <b className="empty-icon">1</b>
                        </div>
                      </div>
                      <div className="ellipse-group">
                        <div className="frame-item" />
                        <b className="b">2</b>
                      </div>
                      <div className="ellipse-container">
                        <div className="frame-inner" />
                        <b className="b1">3</b>
                      </div>
                      <div className="frame-div">
                        <div className="ellipse-div" />
                        <div className="rectangle-parent">
                          <div className="rectangle-div" />
                          <b className="b2">4</b>
                        </div>
                      </div>
                      <div className="ellipse-parent1">
                        <div className="frame-child1" />
                        <b className="b3">5</b>
                      </div>
                      <div className="ellipse-parent2">
                        <div className="frame-child2" />
                        <b className="b4">6</b>
                      </div>
                    </div>
                  </div>
                  <div className="separator" />
                </div>
                <div className="personal-data-label-wrapper">
                  <form className="personal-data-label">
                    <b className="b5">Личные данные</b>
                    <div className="frame-parent1">
                      <div className="wrapper">
                        <div className="div1">
                          <div className="item" />
                          <div className="email-name-fields">
                            <div className="div2">Электронная почта</div>
                            <div className="frepimellemi-2434gmailcom">
                              frepimellemi-2434@gmail.com
                            </div>
                          </div>
                          <div className="family-name-fields">
                            <div className="rectangle-group">
                              <div className="frame-child3" />
                              <img
                                className="charmcross-icon"
                                loading="lazy"
                                alt=""
                                src="/charmcross.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <div className="div3">
                          <div className="inner" />
                          <div className="div4">Имя</div>
                          <div className="inner1">
                            <div className="parent">
                              <input
                                className="input"
                                placeholder="Ва"
                                type="text"
                              />
                              <div className="vector-wrapper">
                                <img
                                  className="line-icon"
                                  alt=""
                                  src="/line-72.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame">
                        <div className="div5">
                          <div className="child1" />
                          <div className="group">
                            <div className="div6">Фамилия</div>
                            <input
                              className="input1"
                              placeholder="Ефимов"
                              type="text"
                            />
                          </div>
                          <div className="inner2">
                            <div className="rectangle-container">
                              <div className="frame-child4" />
                              <img
                                className="vector-78-stroke"
                                alt=""
                                src="/vector-78-stroke.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="div7">
                        <div className="child2" />
                        <div className="div8">Отчество</div>
                      </div>
                      <div className="middle-name-input">
                        <input className="group-input" type="checkbox" />
                        <div className="placeholder">
                          <div className="div9">Нет отчества</div>
                        </div>
                      </div>
                    </div>
                    <button className="button">
                      <b className="b6">Далее</b>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="social-login">
            <div className="login-options">
              <div className="social-icons">
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
            <button className="button1">
              <a className="a5">Регистрация</a>
            </button>
          </div>
        </div>
      </section>
      <div className="bottom-separator" />
      <Footer1 />
    </div>
  );
};

export default Email1920Px;
