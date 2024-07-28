import PropTypes from "prop-types";
import "./frame-component3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`wrapper ${className}`}>
      <div className="div9">
        <div className="wrapper-bg">
          <img className="bg-icon1" alt="" src="/bg-1@2x.png" />
        </div>
        <div className="technology-info">
          <div className="technology-description">
            <b className="b10">Уникальная технология</b>
            <div className="div10">
              Наша система работает без звонков, полностью автоматизировано. Вам
              нужно только заполнить анкету. Дальше система сделает все сама и
              не будет вас беспокоить.
            </div>
          </div>
          <button className="button2">
            <b className="b11">Подать заявку</b>
          </button>
        </div>
        <div className="loan-illustration">
          <img
            className="loan-illustration-child"
            loading="lazy"
            alt=""
            src="/group.svg"
          />
          <div className="loan-caption">
            <b className="b12">+486 Микрозаймов быстро и удобно</b>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
