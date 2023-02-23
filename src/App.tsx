import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/reset.css";

//component
import Header from "./components/Header/Header";

// views
import Homepage from "./views/Homepage/Homepage";
import Countries from "./views/Countries/Countries";
import Training from "./views/Training/Training";
import GeoGame from "./views/GeoGame/GeoGame";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/countries" element={<Countries />}></Route>
          <Route path="/training" element={<Training />}></Route>
          <Route path="/geo-game" element={<GeoGame />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
