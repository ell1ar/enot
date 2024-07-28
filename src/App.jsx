import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Px1 from "./pages/px11";
import Px2 from "./pages/px2";
import Email1920Px from "./pages/email1920-px";
import Px from "./pages/Px";
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
      case "/-1920-px":
        title = "";
        metaDescription = "";
        break;
      case "/-email-1920-px":
        title = "";
        metaDescription = "";
        break;
      case "/1920-px":
        title = "";
        metaDescription = "";
        break;
      case "/-1920-px1":
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
      <Route path="/" element={<Px1 />} />
      <Route path="/-1920-px" element={<Px2 />} />
      <Route path="/-email-1920-px" element={<Email1920Px />} />
      <Route path="/1920-px" element={<Px />} />
      <Route path="/-1920-px1" element={<Px1 />} />
    </Routes>
  );
}
export default App;