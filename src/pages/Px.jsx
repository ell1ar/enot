import ContentWrapper from "../components/ContentWrapper";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Footer from "../components/footer";
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
      <Footer />
    </div>
  );
};

export default Px;