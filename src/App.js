import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NewForm from "./newform";
import Report from "./report";

function App() {
  return (

    <Router>
          
    <Routes>
    
      <Route path="/" element={<NewForm />} />
      <Route path="/report" element={<Report />} />


      























      























    </Routes>
  </Router>
    
  );
}

export default App;
