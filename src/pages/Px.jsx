import ContentWrapper from "../components/ContentWrapper";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FooterContainer from "../components/FooterContainer";
import FrameComponent from "../components/FrameComponent";
import "./Px.css";

const Px = () => {
  return (
    <div className="px">
      <section className="page-wrapper">
        <ContentWrapper />
        <FrameComponent4 />
        <FrameComponent3 />
        <FrameComponent2 />
      </section>
      <FrameComponent1 />
      <footer className="footer">
        <div className="bg" />
        <FooterContainer />
        <div className="cookie-info-content-wrapper">
          <div className="cookie-info-content">
            <div className="enotsu-cookie-container">
              <span className="enotsu">
                <span>Enot.su</span>
              </span>
              <span className="cookie">
                <span className="span">{` `}</span>
                <span className="cookie1">использует cookie</span>
                <span className="span1">{` `}</span>
                <span>
                  для персонализации сервисов и удобства пользователей.
                  Оставаясь на сайте вы даёте согласие на обработку данных
                </span>
              </span>
            </div>
            <div className="enotsu-container">
              <span>{`Актуальная информация и условия работы компании представлены только на данном официальном сайте `}</span>
              <span className="enotsu1">Enot.su.</span>
              <span> Остерегайтесь мошенников!</span>
            </div>
          </div>
        </div>
        <FrameComponent />
      </footer>
    </div>
  );
};

export default Px;
