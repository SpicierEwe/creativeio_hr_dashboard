import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import DashBoard from "./components/dashboard/dashboard";
import SideNav from "./components/dashboard/sections/side_nav/side_nav";

function App() {
  return (
    <Router>
      <div className="App overflow-x-hidden ">
        <div className="flex max-w-screen-2xl w-screen">
          <div className="w-fit lg:w-[13%]">
            <SideNav />
          </div>
          <div className="p-5 w-full pt-10 lg:pt-20 ml-14  lg:pr-10 lg:ml-[9%] xl:ml-14">
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
