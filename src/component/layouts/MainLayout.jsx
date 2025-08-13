
import Footer from "../../component/Footer";
import Navbar from "../Navbar"
import Topbar from "../Topbar";

export default function MainLayout({ children }) {
    return (
        <>
            <Topbar />
            {/* <Navbar /> */}
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
