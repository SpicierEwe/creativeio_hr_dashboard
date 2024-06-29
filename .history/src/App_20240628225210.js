import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import DashBoard from "./components/dashboard/dashboard";
import SideNav from "./components/side_nav/side_nav";

function App() {
  return (
    <Router>
      <div className="App overflow-x-hidden ">
        <div className="flex max-w-screen-2xl w-screen">
          {/* side and top nav  */}
          <div className="">
            <SideNav />
          </div>
          {/* right content */}
          <div className="pl-[11%] md:pl-[5%] lg:pl-[17%] pt-14 bg-red-500 w-screen">
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
