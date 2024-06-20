import "./App.css";
import DashBoard from "./components/dashboard/dashboard";
import SideNav from "./components/dashboard/sections/side_nav/side_nav";

function App() {
  return (
    <div className="App overflow-x-hidden flex max-w-screen-2xl w-screen">
      <div className="w-fit lg:w-[13%]">
        <SideNav />
      </div>
      <DashBoard /> flex max-w-screen-2xl w-screen
    </div>
  );
}

export default App;
