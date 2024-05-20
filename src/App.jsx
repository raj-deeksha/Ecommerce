import Navbar from "./Component/Navbar/Navbar";
// import Slider from './ImageSlider/Slider'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women"
import Kids from "./pages/Kids/Kids";
import Home from "./pages/Home/Home";
import Beauty from "./pages/Beauty/Beauty";
import Signin from "./Form/Signin/Signin";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <div className="gap" style={{height:"10vh"}}></div>
      <Routes>
          
          <Route path="/men" element={<Men/>}/>
          <Route path="/women" element={<Women/>}/>
          <Route path="/kids" element={<Kids/>}/>
          <Route path="/beauty" element={<Beauty/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/" element={<Home/>}/>

        
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
