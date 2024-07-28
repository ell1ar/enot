import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`wrapper4 ${className}`}>
      <div className="div30">
        <div className="wrapper-bg1">
          <img className="bg-icon3" alt="" src="/bg-1@2x.png" />
        </div>
        <div className="technology-info">
          <div className="technology-description">
            <b className="b31">Уникальная технология</b>
            <div className="div31">
              Наша система работает без звонков, полностью автоматизировано. Вам
              нужно только заполнить анкету. Дальше система сделает все сама и
              не будет вас беспокоить.
            </div>
          </div>
          <button className="button6">
            <b className="b32">Подать заявку</b>
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
            <b className="b33">+486 Микрозаймов быстро и удобно</b>
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