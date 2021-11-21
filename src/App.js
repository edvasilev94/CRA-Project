import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LatestRecepies from "./components/LatestRecepies/LatestRecepies";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


function App() {
  return (
    <div>
      <Header />
      <Banner />
      <LatestRecepies />
      <Login />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
