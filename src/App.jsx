import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./component/layouts/MainLayout";
import Home from "./component/pages/Home";
import "./App.css"
import Blogs from "./component/pages/blogs/Blogs";
import MainModal from "./component/Loginregister/MainModal";
import LoginRegisterPage from "./component/Loginregister/LoginRegisterPage";
import Login from "./component/Loginregister/Login"
import Register from "./component/Loginregister/Register";
import CourceFinder from "./component/pages/CourceFinder";

// import About from "./component/pages/";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <>

      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Loginregister" element={<MainModal />} />
            <Route path="/Loginregisterpage" element={<LoginRegisterPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/cource-finder" element={<CourceFinder />} />

          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}
