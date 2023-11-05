import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="main-container">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
