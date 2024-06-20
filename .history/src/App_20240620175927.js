import logo from "./logo.svg";
import "./App.css";
import DashBoard from "./components/dashboard/dashboard";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <div className="w-fit lg:w-[13%]">
        <SideNav />
      </div>
      <DashBoard />
    </div>
  );
}

export default App;
