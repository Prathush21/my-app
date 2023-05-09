import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NewForm from "./newform";

function App() {
  return (

    <Router>
          
    <Routes>
    
      <Route path="/" element={<NewForm />} />

      























      























    </Routes>
  </Router>
    
  );
}

export default App;
