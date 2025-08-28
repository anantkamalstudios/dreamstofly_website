import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./component/layouts/MainLayout";
import Home from "./component/pages/Home";
import "./App.css";
import Blogs from "./component/pages/blogs/Blogs";
import MainModal from "./component/Loginregister/MainModal";
import LoginRegisterPage from "./component/Loginregister/LoginRegisterPage";
import Login from "./component/Loginregister/Login";
import Register from "./component/Loginregister/Register";
import CourceFinder from "./component/pages/CourceFinder";
import BlogDetails from "./component/pages/blogs/BlogDetails";
import SopMaker from "./component/pages/sopmaker/SopMaker";
import Connect from "./component/pages/connect/Connect";
import PostAdmitServices from "./component/pages/postadmitservices/PostAdmitServices";
import ExamPrep from "./component/pages/examprep/ExamPrep";
import FreeCourses from "./component/pages/freecourses/FreeCourses";
import Travel from "./component/pages/travel/Travel";

import ContactUs from "./component/footerpages/ContactUs";
import Aboutus from "./component/footerpages/AboutUs";
import CareerPage from "./component/footerpages/CareerPage";
import TermsPage from "./component/footerpages/TermsCondition";
import Advertise from "./component/footerpages/Advertise";
import IELTSPrep from "./component/pages/examprep/IELTSPrep";
import IeltsAcademic from "./component/pages/examprep/IeltsAcademic";
import PTEAcademic from "./component/pages/examprep/PTE";
import ToeflIBT from "./component/pages/examprep/Toefl_IBT";
import DuolingoTest from "./component/pages/examprep/DuolingoTest";
import GREPrep from "./component/pages/examprep/GREPrep";

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
            <Route path="/register" element={<LoginRegisterPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Forget-Password" element={<Register />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/cource-finder" element={<CourceFinder />} />
            <Route path="/sop-maker" element={<SopMaker />} />
            <Route path="/connect" element={<Connect />} />
            <Route
              path="/post-admit-services"
              element={<PostAdmitServices />}
            />
            <Route path="/exam-prep" element={<ExamPrep />} />
            <Route path="/free-cources" element={<FreeCourses />} />
            <Route path="/travel" element={<Travel />} />

            <Route path="/about" element={<Aboutus />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/advertising" element={<Advertise />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/IELTS" element={<IELTSPrep />} />
            <Route path="/IELTS-ACEDEMIC" element={<IeltsAcademic />} />
            <Route path="/PTEAcademic" element={<PTEAcademic />} />
            <Route path="/ToeflIBT" element={<ToeflIBT />} />
            <Route path="/DuolingoTest" element={<DuolingoTest />} />
            <Route path="/GREPrep" element={<GREPrep />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}
