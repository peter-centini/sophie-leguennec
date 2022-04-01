import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mission from './components/Mission/Mission';
import Navbar from './components/Nav/Navbar';
import Proceder from './components/Proceder/Proceder';
import Contact from './pages/contact/Contact';
import Home from './pages/Home/Home';
import Infos from './pages/information/Infos';
import ScrollToTop from "react-scroll-to-top"

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Proceder" element={<Proceder />} />
        <Route path="/Infos" element={<Infos />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <ScrollToTop
        top="450"
        smooth
        color="#DB5AA7"
        // viewBox="0 0 24 24"
      />
    </div>
  );
}

export default App;
