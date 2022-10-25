import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import WelcomeBody from "./pages/WelcomeBody";

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/welcome/*" element={<Welcome />}>
          <Route path=":new-user" element={<WelcomeBody />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/" element={<Navigate to="/welcome" />} />
      </Routes>
    </div>
  );
}

export default App;
