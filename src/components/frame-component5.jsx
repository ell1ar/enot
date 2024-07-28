import PropTypes from "prop-types";
import "./frame-component5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`px-inner2 ${className}`}>
      <div className="parent10">
        <div className="div57">
          <div className="child14" />
          <b className="b47">Калькулятор займа</b>
          <div className="frame-parent9">
            <div className="frame-parent10">
              <div className="wrapper6">
                <div className="div58">{`Требуемая сумма `}</div>
              </div>
              <b className="b48">35 000 ₽</b>
            </div>
            <img
              className="frame-child12"
              loading="lazy"
              alt=""
              src="/group-261.svg"
            />
          </div>
          <div className="frame-parent11">
            <div className="frame-parent12">
              <div className="parent11">
                <div className="div59">Вы вернёте</div>
                <div className="div60">Ставка</div>
              </div>
              <div className="frame-wrapper1">
                <div className="parent12">
                  <b className="b49">35 000 ₽</b>
                  <b className="b50">Без процентов*</b>
                </div>
              </div>
            </div>
            <button className="button11">
              <b className="b51">Получить</b>
            </button>
          </div>
        </div>
        <b className="b52">Способы получения</b>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
