import InputFields from "input-fields";
import Component1 from "component1";
import PropTypes from "prop-types";
import "./content.css";

const Content = ({ className = "" }) => {
  return (
    <div className={`content ${className}`}>
      <div className="div82">
        <div className="child14" />
        <InputFields />
        <div className="data-fields">
          <div className="data-fields-container">
            <div className="data-fields-wrapper">
              <div className="data-fields-content">
                <h1 className="h19">{`Паспортные данные `}</h1>
              </div>
              <div className="field-labels">
                <div className="field-label-names">
                  <input className="input3" placeholder="Серия" type="text" />
                  <input className="input4" placeholder="Номер" type="text" />
                </div>
                <div className="div83">
                  <div className="child15" />
                  <div className="parent8">
                    <div className="div84">Паспорт выдан</div>
                    <input
                      className="input5"
                      placeholder={`Отделом внутренних дел
 "Гольяново"
 гор. Москвы`}
                      type="text"
                    />
                  </div>
                  <div className="inner4">
                    <div className="rectangle-parent6">
                      <div className="frame-child14" />
                      <img
                        className="vector-78-stroke1"
                        alt=""
                        src="/vector-78-stroke.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="div85">
                  <div className="child16" />
                  <div className="div86">Код подразделения</div>
                </div>
                <Component1 prop="Дата выдачи" />
                <Component1 prop="Дата рождения" />
                <div className="div87">
                  <div className="child17" />
                  <div className="div88">Место рождения</div>
                </div>
              </div>
              <div className="gender-field">
                <div className="div89">Пол</div>
                <div className="gender-select">
                  <div className="gender-options">
                    <input className="group-input7" type="checkbox" />
                    <div className="wrapper10">
                      <div className="div90">Мужской</div>
                    </div>
                  </div>
                  <div className="gender-options1">
                    <input className="group-input8" type="checkbox" />
                    <div className="wrapper11">
                      <div className="div91">Женский</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-security">
              <div className="rectangle-parent7">
                <div className="frame-child15" />
                <img
                  className="alert-triangle-icon1"
                  loading="lazy"
                  alt=""
                  src="/alerttriangle.svg"
                />
                <div className="div92">
                  Все ваши данные надежно защищены и зашифрованы. Мы никому не
                  передадим данные без вашего согласия.
                </div>
              </div>
            </div>
            <button className="button16">
              <b className="b34">Далее</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
