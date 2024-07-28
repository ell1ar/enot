import ContentBackground from "../components/content-background";
import Footer from "../components/footer";
import "./email320-px.css";

const Email320Px = () => {
  return (
    <div className="email-320-px">
      <section className="email-320-px-inner">
        <div className="logo-placeholder-parent">
          <div className="logo-placeholder">
            <div className="logo-image">
              <a className="logo1">logo</a>
            </div>
            <button className="button2">
              <a className="a6">Регистрация</a>
            </button>
          </div>
          <ContentBackground />
        </div>
      </section>
      <div className="admin" />
      <Footer />
    </div>
  );
};

export default Email320Px;
