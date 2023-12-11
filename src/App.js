import './App.css';
import FirstPage from "../src/FirstPage/FirstPage"
import SecondPage from "./SecondPage/SecondPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayData from './FirstPage/DisplayData';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" exact element={<FirstPage/>} />
        <Route path="/secondpage" element={<SecondPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
