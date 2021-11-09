import Welcome from "./components/Welcome";
import Sidebar from "./components/Sidebar";
import PersonalSide from "./components/PersonalSide";
// import BuySell from "./components/Buy&Sell/BuySell";
import Dashboard from "./components/Dashboard/Dashboard";
import Transactions from "./components/Dashboard/Transactions";
import Profile from "./components/Profile/Profile";
import LogOut from "./components/LogOut/LogOut";
import Statistics from "./components/Statistics/Statistics";
import Wallet from "./components/Wallet/Wallet";
import Notif from "./components/Notif";
import Messages from "./components/Messages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="w-full flex flex-row justify-center p-12">
        <Sidebar />
        <Routes>
          <Route path="" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/transactions" element={<Transactions />} />
          {/* <Route path="/buysell" element={<BuySell />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/notif" element={<Notif />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
        <PersonalSide />
      </div>
    </Router>
  );
}

export default App;
