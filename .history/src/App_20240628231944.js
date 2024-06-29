import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import DashBoard from "./components/dashboard/dashboard";
import SideNav from "./components/side_nav/side_nav";

function App() {
  const sideRef = useRef(null);
  const [sideWidth, setSideWidth] = useState(0);

  useEffect(() => {
    const updateSideWidth = () => {
      if (sideRef.current) {
        setSideWidth(sideRef.current.clientWidth);
      }
    };

    // Initial width setting
    updateSideWidth();

    // Update width on window resize
    window.addEventListener("resize", updateSideWidth);

    return () => {
      window.removeEventListener("resize", updateSideWidth);
    };
  }, []);

  return (
    <Router>
      <div className="App overflow-x-hidden ">
        <div className="flex max-w-screen-2xl w-screen">
          {/* side and top nav  */}
          <div ref={sideRef} className="">
            <SideNav />
          </div>
          {/* right content */}
          <div
            className="pt-20"
            style={{
              paddingLeft: `${sideWidth}px`,
              width: `calc(100% - ${sideWidth}px)`,
            }}
          >
            <Routes>
              <Route path="/" element={<DashBoard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
