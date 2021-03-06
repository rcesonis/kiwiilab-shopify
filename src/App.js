import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/Cart";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Cart />
      <NavMenu />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products/:handle" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
