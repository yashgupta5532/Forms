import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Citizen from "./FormCard/Citizen.js";
import Citizenship from "./citizenship/Citizenship.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Citizenship />} />
      </Routes>
    </Router>
  );
}

export default App;
