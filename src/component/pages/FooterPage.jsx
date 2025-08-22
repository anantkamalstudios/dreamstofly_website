import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from '../footerpages/AboutUs';
import CareerPage from '../footerpages/CareerPage';
import TermsAndConditions from '../footerpages/TermsCondition';
import Advertise from '../footerpages/Advertise';
import ContactUs from '../footerpages/ContactUs';

function FooterPage() {
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<AboutUs />} />
                <Route path="/career" element={<CareerPage />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/advertising" element={<Advertise />} />
                <Route path="/contact" element={<ContactUs/>} />
            </Routes>
        </Router>

    )
}

export default FooterPage;