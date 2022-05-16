import "./index.css";
import {BrowserRouter as Router,Routes,Route,Link, useRoutes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./routes/Home";
import Post from "./routes/Post";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import axios from "axios";
import Logout from "./Components/Logout";
let userloggedin = null;
let userData = null;
function App() {
  // we have to check whether the user has loggedin or not so that we can show them the login and register button respectively
  axios.get("http://localhost:3001/authL", (response) => {
    console.log(response);
   if(!response.data.error){
     userloggedin = true;
     userData = response.data;
   }
   else {
     userloggedin = false;

    }
  })
  // use effect is for loading the page to get the data from the api
  // the empty array in the end is for reloading once

  return (
    <div>
       <Router>
        <Navbar userloggedin={userloggedin} userData={userData} />
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
