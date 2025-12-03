import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./component/layouts/MainLayout";
import Home from "./component/pages/Home";
import "./App.css";
import Blogs from "./component/pages/blogs/Blogs";
import MainModal from "./component/Loginregister/MainModal";
import LoginRegisterPage from "./component/Loginregister/LoginRegisterPage";
import Login from "./component/Loginregister/Login";
import Register from "./component/Loginregister/Register";
import CourseFinder from "./component/pages/courseFinder/CourseFinder";
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
import Services from "./component/pages/services/Services";
import ServiceRouter from "./component/pages/services/ServiceRouter";
import ScrollToTop from "./component/ScrollToTop";
import SOPHomePage from "./component/pages/sopmaker/SOPHomePage";
import LorMaker from "./component/pages/sopmaker/LorMaker";
import CourseFinderDetailPage from "./component/pages/courseFinder/CourseFinderDetailPage";
import UniversityDetailPage from "./component/pages/courseFinder/UniversityDetailPage";
import AccommodationListing from "./component/pages/accomodation/AccommodationListing";
import AccomodationDetail from "./component/pages/accomodation/components/AccomodationDetail";
import ListYourPropertyPage from "./component/pages/accomodation/ListYourPropertyPage";
import AccommodationForm from "./component/pages/accomodation/AccomodationFormPage";
import TravelInsuranceBook from "./component/pages/services/pages/TravelInsuranceBook";
import CalculatorMainPage from "./component/pages/calculator/CalculatorMainPage";
import SGPAToCGPAConversion from "./component/pages/calculator/SGPAToCGPAConversion";
import SGPAToPercentagePage from "./component/pages/calculator/SGPAToPercentagePage";

// import About from "./component/pages/";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Loginregister" element={<MainModal />} />
              <Route path="/register" element={<LoginRegisterPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Forget-Password" element={<Register />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/course-finder" element={<CourseFinder />} />
              <Route
                path="/course-detail"
                element={<CourseFinderDetailPage />}
              />
              <Route
                path="/university-detail"
                element={<UniversityDetailPage />}
              />
              <Route path="/sop-lor-maker" element={<SOPHomePage />} />
              <Route path="/sop-form" element={<SopMaker />} />
              <Route path="/lor-form" element={<LorMaker />} />
              <Route path="/connect" element={<Connect />} />
              <Route
                path="/post-admit-services"
                element={<PostAdmitServices />}
              />
              <Route path="/exam-prep" element={<ExamPrep />} />
              <Route path="/free-cources" element={<FreeCourses />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceRouter />} />
              <Route
                path="/services/travel-insurance/insurenceform"
                element={<TravelInsuranceBook />}
              />

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
              <Route
                path="/accomodation/:slug/residency"
                element={<AccommodationListing />}
              />
              <Route
                path="/accomodation/:id/details"
                element={<AccomodationDetail />}
              />
              <Route
                path="/accomodation/list-your-property"
                element={<ListYourPropertyPage />}
              />
              <Route
                path="/accommodation/start-listing"
                element={<AccommodationForm />}
              />
              <Route
                path="/university/:slug"
                element={<UniversityDetailPage />}
              />
              <Route
                path="/course/:slug"
                element={<CourseFinderDetailPage />}
              />
              <Route
                path="/cgpa-to-gpa-conversion"
                element={<CalculatorMainPage />}
              />
              <Route
                path="/pte-to-ielts-conversion"
                element={<CalculatorMainPage />}
              />
              <Route
                path="/act-to-sat-score"
                element={<CalculatorMainPage />}
              />
              <Route path="/gmat-conversion" element={<CalculatorMainPage />} />
              <Route
                path="/sgpa-to-cgpa-conversion"
                element={<SGPAToCGPAConversion />}
              />
              <Route
                path="/sgpa-to-percentage-conversion"
                element={<SGPAToPercentagePage />}
              />
            </Routes>
          </MainLayout>
        </ScrollToTop>
      </Router>
    </>
  );
}
