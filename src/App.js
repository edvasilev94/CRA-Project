import { Routes, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
