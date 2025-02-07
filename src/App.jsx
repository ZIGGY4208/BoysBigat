import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Events from "./components/event/Events";
import Organisation from "./components/organisation/Organisation";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Organisation" element={<Organisation />} />
      </Routes>
    </Router>
  );
};

export default App;
