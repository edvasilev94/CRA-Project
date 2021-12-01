import { Routes, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from './components/HomePage/HomePage';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CrateRecipe from './components/CrateRecipe/CrateRecipe'


function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<><Home/><HomePage /></>} />
        <Route path="/crate" element={<CrateRecipe/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
