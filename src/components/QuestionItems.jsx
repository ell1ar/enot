import PropTypes from "prop-types";
import "./QuestionItems.css";

const QuestionItems = ({ className = "", prop }) => {
  return (
    <div className={`question-items ${className}`}>
      <div className="question-items-child" />
      <div className="question-titles">
        <b className="b34">{prop}</b>
      </div>
      <img className="question-items-item" alt="" src="/group-1.svg" />
    </div>
  );
};

QuestionItems.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
};

export default QuestionItems;