import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Visitors from "./pages/Visitors";
import Communication from "./pages/Communication";
import Residents from "./pages/Residents";
import Staff from "./pages/Staff";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import StickyPost from "./pages/StickyPost";
function App() {
  return (
   <>
   <Router>
     <Sidebar>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/Staff" element={<Staff/>} />
        <Route path="/communication" element={<Communication/>} />
        <Route path="/communication/post" element={<StickyPost/>} />
        <Route path="/Residents" element={<Residents/> }/>
        <Route path="/Visitors" element={<Visitors/>} />
        <Route path="*" element={<>Not Found</>}/>
        </Routes>
        </Sidebar>
        </Router>


   </>
  );
}

export default App;
