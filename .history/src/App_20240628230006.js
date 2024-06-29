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
          <div className="w-[20%]">
            <SideNav />
          </div>
          {/* right content */}
          <div className=" pt-14 bg-red-500 pl-[20%] w-[100%] ">
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
