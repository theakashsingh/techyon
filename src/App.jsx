import "./App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sideBar/SideBar";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
