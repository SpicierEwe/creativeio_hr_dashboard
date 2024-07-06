import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import DashBoard from "./components/dashboard/dashboard";
import SideNav from "./components/side_nav/side_nav";
import { useRef } from "react";
import AccountDetails from "./components/account-details/account-details";

function App() {
  const sideRef = useRef(null);
  return (
    <Router>
      <div className="App overflow-x-hidden ">
        <div className="flex max-w-screen-2xl w-screen">
          {/* side and top nav  */}
          <div ref={sideRef} className="">
            <SideNav />
          </div>
          {/* right content */}
          <div className="w-[100%] pt-14">
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/account-details" element={<AccountDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
