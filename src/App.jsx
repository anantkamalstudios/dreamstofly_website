import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./component/layouts/MainLayout";
import Home from "./component/pages/Home";
import "./App.css"
// import About from "./component/pages/";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
}
