import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Citizen from "./FormCard/Citizen.js";
import Citizenship from "./citizenship/Citizenship.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Citizenship />} />
        <Route path="/new" element={<Citizen />} />
      </Routes>
    </Router>
  );
}

export default App;
