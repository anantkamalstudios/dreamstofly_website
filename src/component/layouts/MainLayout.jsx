
import Footer from "../../component/Footer";

import Topbar from "../Header";
import Topbarnavigae from "../Topbar.jsx";

export default function MainLayout({ children }) {
    return (
        <>
            <Topbar />
            <Topbarnavigae />
            {/* <Navbar /> */}
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
