import FooterContainer from "./FooterContainer";
import FrameComponent1 from "./frame-component1";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="bg" />
      <FooterContainer />
      <FrameComponent1 />
      <FrameComponent />
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
