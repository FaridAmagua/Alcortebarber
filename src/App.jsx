import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from "./pages/Home";

function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>  
          <Route path="/" element={<Home/>}/>   
          {/* <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
