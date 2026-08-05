import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import ScrollToTop from "@/components/scrolltop/ScrollToTop";
export default function MainLayout() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
