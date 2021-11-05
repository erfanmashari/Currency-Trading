import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import PersonalSide from "./components/PersonalSide";

function App() {
  return (
    <div className="w-full flex flex-row justify-center p-12">
      <Sidebar />
      <Dashboard />
      <PersonalSide />
    </div>
  );
}

export default App;
