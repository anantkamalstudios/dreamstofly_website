import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../component/Footer";
import Header from "../Header";
import Topbar from "../Topbar";

export default function MainLayout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <Header />
      <Topbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
