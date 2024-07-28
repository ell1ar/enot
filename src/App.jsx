import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Px from "./pages/Px";
import Email1920Px from "./pages/email1920-px";
import Email320Px from "./pages/email320-px";
import Px1 from "./pages/px1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/-email-1920-px":
        title = "";
        metaDescription = "";
        break;
      case "/-email-320-px":
        title = "";
        metaDescription = "";
        break;
      case "/320-px":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Px />} />
      <Route path="/-email-1920-px" element={<Email1920Px />} />
      <Route path="/-email-320-px" element={<Email320Px />} />
      <Route path="/320-px" element={<Px1 />} />
    </Routes>
  );
}
export default App;