import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function RootLayout() {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "80vh" }}>
        <div className="container">
          {" "}
          <Outlet />
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;