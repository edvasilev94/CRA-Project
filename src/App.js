import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from './components/HomePage/HomePage';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CrateRecipe from './components/CrateRecipe/CrateRecipe'
import AllRecipes from './components/AllRecipes/AllRecipes';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import Logout from './components/Logout/Logout';


function App() {
  return (
    <AuthProvider>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<><Home /><HomePage /></>} />
          <Route path="/recipes" element={<AllRecipes />} />
          <Route path="/crate" element={<CrateRecipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipe/details/:recipeId" element={<RecipeDetail />} />
        </Routes>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
