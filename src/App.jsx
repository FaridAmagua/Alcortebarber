import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Help from "./pages/Help"
import Login from "./pages/Login"
import NotFound from "./pages/Notfound"
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter basename="/">
      
        <Navbar />
        <div className="page-container">

        <Routes>        
          <Route path="/" element={<Home />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} /> {/* Ruta para 404 */}

        </Routes>
        </div>

    </BrowserRouter>
  );
}

export default App;
