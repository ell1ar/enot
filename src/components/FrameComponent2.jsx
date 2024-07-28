import RequirementIcons1 from "./RequirementIcons1";
import RequirementIcons from "./RequirementIcons";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`borrower-content-wrapper ${className}`}>
      <div className="borrower-content">
        <div className="borrower-heading">
          <h1 className="h18">Требования к заемщику</h1>
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