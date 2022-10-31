import { Route, Routes } from "react-router-dom";
import "./App.css";
import ABC from "./components/ABC";
import Dummy from "./components/Dummy";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<TodoApp />} />
        <Route path="products" element={<Products />} />
        <Route path="dummy" element={<Dummy />} />
        <Route path=":abc" element={<ABC />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
