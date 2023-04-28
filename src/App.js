import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Societies from "./routes/Societies/Societies";
import Community from "./routes/Community/Community";
import BugReport from "./routes/Bug-Report/BugReport";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/societies" element={<Societies />} />
        <Route path="/community" element={<Community />} />
        <Route path="/bugreport" element={<BugReport />} />
      </Routes>
      <Navbar />
    </div>
  );
}
