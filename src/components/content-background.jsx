import Component2 from "./component2";
import PropTypes from "prop-types";
import "./content-background.css";

const ContentBackground = ({ className = "" }) => {
  return (
    <div className={`content-background ${className}`}>
      <div className="content-background-child" />
      <div className="div50">
        <div className="child11" />
        <div className="inner3">
          <nav className="frame-nav">
            <div className="description-parent">
              <div className="description" />
              <div className="input-boxes">
                <b className="source">1</b>
              </div>
            </div>
            <div className="telegramfill-parent">
              <div className="telegramfill" />
              <div className="inputcase-parent">
                <div className="inputcase" />
                <b className="view-details">2</b>
              </div>
            </div>
            <div className="ellipse-parent3">
              <div className="frame-child9" />
              <b className="httpsyourproducturlgoesherecom">3</b>
            </div>
            <div className="ellipse-parent4">
              <div className="frame-child10" />
              <div className="view-details-parent">
                <div className="view-details1" />
                <b className="b42">4</b>
              </div>
            </div>
            <div className="removed-parent">
              <div className="removed" />
              <b className="b43">5</b>
            </div>
            <div className="source-parent">
              <div className="source1" />
              <b className="b44">6</b>
            </div>
          </nav>
        </div>
        <div className="divider">
          <div className="divider-child" />
        </div>
        <div className="data-label">
          <b className="b45">Личные данные</b>
        </div>
        <div className="input-row">
          <div className="email-input">
            <Component2
              prop="Электронная почта"
              frepimellemi2434gmPlaceho="frepimellemi-2434@gmail.com"
              charmcross="/charmcross1.svg"
            />
            <div className="div51">
              <div className="child12" />
              <div className="div52">Имя</div>
              <div className="parent8">
                <input className="input2" placeholder="Ва" type="text" />
                <div className="vector-container">
                  <img className="frame-child11" alt="" src="/line-721.svg" />
                </div>
              </div>
            </div>
            <Component2
              prop="Фамилия"
              frepimellemi2434gmPlaceho="Ефимов"
              charmcross="/vector-78-stroke1.svg"
              propBorder="1px solid #009e65"
            />
            <div className="div53">
              <div className="child13" />
              <div className="div54">Отчество</div>
            </div>
            <div className="no-patronimic">
              <input className="group-input1" type="checkbox" />
              <div className="wrapper5">
                <div className="div55">Нет отчества</div>
              </div>
            </div>
          </div>
        </div>
        <div className="next-button-container">
          <button className="button9">
            <b className="b46">Далее</b>
          </button>
        </div>
      </div>
      <div className="menu-divider">
        <div className="john-smith" />
        <img className="icon4" loading="lazy" alt="" src="/12-1-12@2x.png" />
        <img className="mimenu-icon" loading="lazy" alt="" src="/mimenu.svg" />
      </div>
    </div>
  );
};

ContentBackground.propTypes = {
  className: PropTypes.string,
};

export default ContentBackground;
