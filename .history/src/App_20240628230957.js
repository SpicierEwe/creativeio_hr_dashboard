import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import DashBoard from "./components/dashboard/dashboard";
import SideNav from "./components/side_nav/side_nav";
import { useRef } from "react";

function App() {
  const sideRef = useRef(null);
  return (
    <Router>
      <div className="App overflow-x-hidden ">
        <div className="flex max-w-screen-2xl w-screen">
          {/* side and top nav  */}
          <div ref={sideRef} className="w-[20%]">
            <SideNav />
          </div>
          {/* right content */}
          <div className=" pt-14 bg-secondary pl-[17%] lg:pl-[23%] xl:pl-[16%] w-[100%] " style={{
            paddingLeft: {
              sideRef.current?.clientWidth
                ? `${
                    sideRef.current?.clientWidth + 20
                  }px`
                : "20%",
            
            }
          }}>
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
