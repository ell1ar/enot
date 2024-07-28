import PropTypes from "prop-types";
import "./frame-component6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`px-inner1 ${className}`}>
      <div className="frame-parent7">
        <div className="frame-parent8">
          <div className="logo-frame">
            <a className="logo5">logo</a>
          </div>
          <div className="button10">
            <a className="a13">Регистрация</a>
          </div>
        </div>
        <div className="parent9">
          <h1 className="h111">Онлайн займы на вашу карту</h1>
          <div className="div56">Первый займ может быть без процентов!*</div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
