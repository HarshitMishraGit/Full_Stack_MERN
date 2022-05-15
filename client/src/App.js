import "./index.css";
import {BrowserRouter as Router,Routes,Route,Link, useRoutes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./routes/Home";
import Post from "./routes/Post";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";

function App() {
  // use effect is for loading the page to get the data from the api
  // the empty array in the end is for reloading once

  return (
    <div>
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post/:id" element={<Post/>} />
          <Route path="/authL" element={<LoginPage/>} />
          <Route path="/authSU" element={<SignUpPage/>} />
          {/* <Route path="/" element={<PageOne/>} /> */}
        </Routes>
        </Router>
    </div>
  );
}

export default App;
