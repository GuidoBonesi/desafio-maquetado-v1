import "./App.css";
import { Home } from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { ListProducts } from "./components/ListProducts/ListProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/listproducts" element={<ListProducts />}></Route>
      </Routes>
    </>
  );
}

export default App;
