import React from "react";
import {BrowserRouter ,Route , Routes}  from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SingOut from "./pages/SingOut";
import Header from "./components/Header";


export default function App() {
  return (
  
       <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signout" element={<SingOut />} />
         </Routes>
       </BrowserRouter>

  );
}
