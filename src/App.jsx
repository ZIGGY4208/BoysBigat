import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Events from "./components/event/Events";
import Organisation from "./components/organisation/Organisation";
import RegisterForm from "./components/ragistration/RegisterForm";
import RegistrationForm from "./components/ragistration/ValidForm";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Organisation" element={<Organisation />} />
        <Route path="/Log in" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
