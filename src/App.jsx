import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./component/layouts/MainLayout";
import Home from "./component/pages/Home";
import "./App.css";
import ScrollToTop from "./component/ScrollToTop";
import UserProtectedRoute from "./utils/UserProtectedRoute";

// Lazy loaded components
const Blogs = lazy(() => import("./component/pages/blogs/Blogs"));
const MainModal = lazy(() => import("./component/Loginregister/MainModal"));
const LoginRegisterPage = lazy(() =>
  import("./component/Loginregister/LoginRegisterPage")
);
const Login = lazy(() => import("./component/Loginregister/Login"));
const CourseFinder = lazy(() =>
  import("./component/pages/courseFinder/CourseFinder")
);
const BlogDetails = lazy(() => import("./component/pages/blogs/BlogDetails"));
const SopMaker = lazy(() => import("./component/pages/sopmaker/SopMaker"));
const Connect = lazy(() => import("./component/pages/connect/Connect"));
const PostAdmitServices = lazy(() =>
  import("./component/pages/postadmitservices/PostAdmitServices")
);
const ExamPrep = lazy(() => import("./component/pages/examprep/ExamPrep"));
const FreeCourses = lazy(() =>
  import("./component/pages/freecourses/FreeCourses")
);
const Travel = lazy(() => import("./component/pages/travel/Travel"));
const ContactUs = lazy(() => import("./component/footerpages/ContactUs"));
const Aboutus = lazy(() => import("./component/footerpages/AboutUs"));
const CareerPage = lazy(() => import("./component/footerpages/CareerPage"));
const TermsPage = lazy(() => import("./component/footerpages/TermsCondition"));
const Advertise = lazy(() => import("./component/footerpages/Advertise"));
const IELTSPrep = lazy(() => import("./component/pages/examprep/IELTSPrep"));
const IeltsAcademic = lazy(() =>
  import("./component/pages/examprep/IeltsAcademic")
);
const PTEAcademic = lazy(() => import("./component/pages/examprep/PTE"));
const ToeflIBT = lazy(() => import("./component/pages/examprep/Toefl_IBT"));
const DuolingoTest = lazy(() =>
  import("./component/pages/examprep/DuolingoTest")
);
const GREPrep = lazy(() => import("./component/pages/examprep/GREPrep"));
const Services = lazy(() => import("./component/pages/services/Services"));
const ServiceRouter = lazy(() =>
  import("./component/pages/services/ServiceRouter")
);
const SOPHomePage = lazy(() =>
  import("./component/pages/sopmaker/SOPHomePage")
);
const LorMaker = lazy(() => import("./component/pages/sopmaker/LorMaker"));
const CourseFinderDetailPage = lazy(() =>
  import("./component/pages/courseFinder/CourseFinderDetailPage")
);
const UniversityDetailPage = lazy(() =>
  import("./component/pages/courseFinder/UniversityDetailPage")
);
const AccommodationListing = lazy(() =>
  import("./component/pages/accomodation/AccommodationListing")
);
const AccomodationDetail = lazy(() =>
  import("./component/pages/accomodation/components/AccomodationDetail")
);
const ListYourPropertyPage = lazy(() =>
  import("./component/pages/accomodation/ListYourPropertyPage")
);
const AccommodationForm = lazy(() =>
  import("./component/pages/accomodation/AccomodationFormPage")
);
const TravelInsuranceBook = lazy(() =>
  import("./component/pages/services/pages/TravelInsuranceBook")
);
const FlightSearchResults = lazy(() =>
  import("./component/pages/services/pages/FlightSearchResults")
);
const CalculatorMainPage = lazy(() =>
  import("./component/pages/calculator/CalculatorMainPage")
);
const SGPAToCGPAConversion = lazy(() =>
  import("./component/pages/calculator/SGPAToCGPAConversion")
);
const SGPAToPercentagePage = lazy(() =>
  import("./component/pages/calculator/SGPAToPercentagePage")
);
const PTEtoIELTSConversion = lazy(() =>
  import("./component/pages/calculator/PTEtoIELTSConversion")
);
const ACTToSATConversion = lazy(() =>
  import("./component/pages/calculator/ACTToSATConversion")
);
const GMTPage = lazy(() => import("./component/pages/calculator/GMTPage"));
const ForgotPassword = lazy(() =>
  import("./component/Loginregister/ForgotPassword")
);
const AdminPage = lazy(() => import("./admin/AdminPage"));
const MyListingsPage = lazy(() => import("./admin/pages/MyListingsPage"));
const AddProperties = lazy(() => import("./admin/pages/AddProperties"));
const Dashboard = lazy(() => import("./admin/pages/Dashboard"));
const EnquiryPage = lazy(() => import("./admin/pages/EnquiryPage"));
const BookingRequestPage = lazy(() =>
  import("./admin/pages/BookingRequestPage")
);
const AccountPage = lazy(() => import("./admin/pages/AccountPage"));

// import About from "./component/pages/";
// import Contact from "./pages/Contact";

export default function App() {
  // Loading component for Suspense fallback
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <>
      <Router>
        <ScrollToTop>
          <MainLayout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Loginregister" element={<MainModal />} />
                <Route path="/register" element={<LoginRegisterPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Forget-Password" element={<ForgotPassword />} />
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
                <Route
                  path="/sop-form"
                  element={
                    <UserProtectedRoute>
                      <SopMaker />
                    </UserProtectedRoute>
                  }
                />
                <Route
                  path="/lor-form"
                  element={
                    <UserProtectedRoute>
                      <LorMaker />
                    </UserProtectedRoute>
                  }
                />
                <Route path="/connect" element={<Connect />} />
                <Route
                  path="/post-admit-services"
                  element={<PostAdmitServices />}
                />
                <Route path="/exam-prep" element={<ExamPrep />} />
                <Route path="/free-cources" element={<FreeCourses />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/services" element={<Services />} />
                <Route
                  path="/services/student-flight-tickets/search"
                  element={<FlightSearchResults />}
                />
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
                  path="/act-to-sat-score"
                  element={<ACTToSATConversion />}
                />
                <Route path="/gmat-conversion" element={<GMTPage />} />
                <Route
                  path="/sgpa-to-cgpa-conversion"
                  element={<SGPAToCGPAConversion />}
                />
                <Route
                  path="/sgpa-to-percentage-conversion"
                  element={<SGPAToPercentagePage />}
                />
                <Route
                  path="/pte-to-ielts-conversion"
                  element={<PTEtoIELTSConversion />}
                />
                <Route path="/admin" element={<AdminPage />}>
                  <Route index element={<Dashboard />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="addproperties" element={<AddProperties />} />
                  <Route
                    path="booking-requests"
                    element={<BookingRequestPage />}
                  />
                  <Route path="listing" element={<MyListingsPage />} />
                  <Route path="enquiry" element={<EnquiryPage />} />
                  <Route path="account" element={<AccountPage />} />
                </Route>
              </Routes>
            </Suspense>
          </MainLayout>
        </ScrollToTop>
      </Router>
    </>
  );
}
