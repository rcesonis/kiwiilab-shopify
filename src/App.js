import { Routes, Route, Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/Cart";
import NavMenu from "./components/NavMenu";

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
      <p>Footer</p>
    </div>
  );
}

export default App;
