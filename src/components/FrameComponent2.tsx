import RequirementIcons1 from "./requirement-icons1";
import RequirementIcons from "./requirement-icons";
import PropTypes from "prop-types";
import "./frame-component2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`borrower-content-wrapper ${className}`}>
      <div className="borrower-content">
        <div className="borrower-heading">
          <h1 className="h13">Требования к заемщику</h1>
        </div>
        <div className="borrower-requirements">
          <div className="requirement-icons-parent">
            <RequirementIcons1 icon="/icon.svg" prop="Паспорт РФ" />
            <RequirementIcons
              materialSymbolsLightidCar="/materialsymbolslightidcard.svg"
              prop="СНИЛС (опционально)"
            />
            <RequirementIcons
              materialSymbolsLightidCar="/gravityuiantennasignal.svg"
              prop="Доступ в интернет"
              propMinWidth="298px"
            />
            <RequirementIcons1 icon="/icon-1.svg" prop="Банковская карта" />
          </div>
          <div className="age-requirement">
            <div className="age-icons-parent">
              <RequirementIcons
                materialSymbolsLightidCar="/materialsymbols18upratingrounded.svg"
                prop="Возраст от 18 лет"
                propMinWidth="258px"
              />
              <RequirementIcons
                materialSymbolsLightidCar="/fa6solidmobile.svg"
                prop="Мобильный телефон"
                propMinWidth="258px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
