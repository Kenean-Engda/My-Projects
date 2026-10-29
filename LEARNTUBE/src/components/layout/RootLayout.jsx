import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Navbar />
      <main className="main-page">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
