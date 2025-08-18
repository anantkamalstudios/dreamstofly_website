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
import BlogDetails from "./component/pages/blogs/BlogDetails";
import SopMaker from "./component/pages/sopmaker/SopMaker";
import Connect from "./component/pages/connect/Connect";
import PostAdmitServices from "./component/pages/postadmitservices/PostAdmitServices";
import ExamPrep from "./component/pages/examprep/ExamPrep";
import FreeCourses from "./component/pages/freecourses/FreeCourses";
import Travel from "./component/pages/travel/Travel";


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
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/cource-finder" element={<CourceFinder />} />
            <Route path="/sop-maker" element={<SopMaker />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/post-admit-services" element={<PostAdmitServices />} />
            <Route path="/exam-prep" element={<ExamPrep />} />
            <Route path="/free-cources" element={<FreeCourses />} />
            <Route path="/travel" element={<Travel />} />


          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}
