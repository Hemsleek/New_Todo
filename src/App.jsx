import { Route, Routes } from "react-router-dom";

// components
import ABC from "./components/ABC";
import Dashboard from "./components/Dashboard";
import DashboardAccount from "./components/DashboardAccount";
import DashboardPhone from "./components/DashboardPhone";
import DashboardWear from "./components/DashboardWear";
import Dummy from "./components/Dummy";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import TodoApp from "./components/TodoApp";
import Invoices from "./components/Invoices";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="home" element={<TodoApp />} />
        <Route path="products" element={<Products />} />
        <Route path="dummy" element={<Dummy />} />
        <Route path=":bde" element={<ABC />} />x
        <Route path="/dashboard">
          <Route index={true} element={<Dashboard />} />
          <Route path="wear" element={<DashboardWear />} />
          <Route path="account" element={<DashboardAccount />} />
          <Route path="phones" element={<DashboardPhone />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
