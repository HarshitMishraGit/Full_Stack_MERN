import "./index.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./routes/Home";
import Post from "./routes/Post";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
// import axios from "axios";
import Logout from "./Components/Logout";

// import { useEffect , useState} from 'react';
function App() {



  return (
    <div>
       <Router>
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/authL" element={<LoginPage/>} />
          <Route path="/authSU" element={<SignUpPage/>} />
          <Route path="/authL/logout" element={<Logout/>} />
          {/* <Route path="/" element={<PageOne/>} /> */}
        </Routes>
        </Router>
    </div>
  );
}

export default App;
