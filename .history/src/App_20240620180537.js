import "./App.css";
import DashBoard from "./components/dashboard/dashboard";
import SideNav from "./components/dashboard/sections/side_nav/side_nav";

function App() {
  return (
    <div className="App overflow-x-hidden ">
      <div className="w-fit lg:w-[13%]">
        <SideNav />
      </div>
      <DashBoard />
    </div>
  );
}

export default App;
