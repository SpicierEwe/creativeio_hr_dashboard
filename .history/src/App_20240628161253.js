import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import DashBoard from "./components/dashboard/dashboard";
import SideNav from "./components/side_nav/side_nav";
import Courses from "./components/courses/courses";
import Schedule from "./components/schedule/schedule";
import Discussion from "./components/discussion/discussion";
import Settings from "./components/settings/settings";
import Leaderboard from "./components/leaderboard/leaderboard";

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
