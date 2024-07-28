import Component from "./Component";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`advantages-content-wrapper ${className}`}>
      <div className="advantages-content">
        <div className="advantages-heading">
          <h1 className="h12">А у нас лучше</h1>
        </div>
        <div className="advantages-list">
          <div className="advantage-items">
            <img
              className="arrow-icon"
              loading="lazy"
              alt=""
              src="/arrow@2x.png"
            />
          </div>
          <div className="parent">
            <div className="div7">
              <div className="inner" />
              <b className="b8">
                <span>0</span>
                <span className="span5">1</span>
              </b>
              <b className="b9">Работаем 24/7</b>
              <div className="div8">
                <p className="p">Работаем круглые сутки и без выходных.</p>
                <p className="p1">Без праздников. В дождь и снег</p>
              </div>
            </div>
            <Component
              prop="2"
              prop1="Не беспоком близких"
              prop2="Не звоним родственникам и коллегам. Никто не узнает, что вы оформляли займ"
            />
            <Component
              prop="3"
              prop1="Можете нам доверять"
              prop2="Ваши данные надёжно защищены. Мы ничего не передаем без вашего ведома"
            />
          </div>
          <div className="advantage-items1">
            <div className="arrow">
              <div className="arrow-child" />
              <img
                className="arrow-icon1"
                loading="lazy"
                alt=""
                src="/arrow-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
