import PropTypes from "prop-types";
import "./input-fields.css";

const InputFields = ({ className = "" }) => {
  return (
    <div className={`input-fields1 ${className}`}>
      <div className="input-list">
        <div className="input-structure">
          <div className="input-components">
            <div className="input-components-child" />
            <b className="b35">1</b>
          </div>
          <div className="input-components1">
            <div className="input-components-item" />
            <b className="b36">2</b>
          </div>
          <div className="input-components2">
            <div className="input-components-inner" />
            <b className="b37">3</b>
          </div>
          <div className="input-components3">
            <div className="input-components-child1" />
            <div className="frame-parent7">
              <div className="rectangle-parent8">
                <div className="frame-child16" />
                <div className="frame-child17" />
              </div>
              <b className="b38">4</b>
            </div>
          </div>
          <div className="input-components4">
            <div className="input-components-child2" />
            <b className="b39">5</b>
          </div>
          <div className="input-components5">
            <div className="input-components-child3" />
            <b className="b40">6</b>
          </div>
        </div>
      </div>
      <div className="input-fields-child" />
    </div>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
};

export default InputFields;
