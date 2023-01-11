import "./App.css";
import Sidebar from "./components/SideBar/Sidebar";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="App">
        <div></div>
        <Layout/>

      </div>
    </div>
  );
}

export default App;
