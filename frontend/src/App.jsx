import React, {useState}from "react";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./screens/SignIn";
import Registration from "./screens/Registration";
import Payment from "./screens/Payment";
import EmailVerification from "./screens/EmailVerification";
import AccessCode from "./screens/AccessCode";
import Pricing from "./screens/Pricing";
import WhatWeDo from "./screens/WhatWeDo";
import AboutUs from "./screens/AboutUs";
import Home from "./screens/Home";
import AdminDashboard from "./screens/admin/AdminDashboard";
import ForgetPassword from "./screens/password/ForgetPassword";
import ValidateEmail from "./screens/password/ValidateEmail";
import NewPassword from "./screens/password/NewPassword";
import { useEffect } from "react";
import Team from "./screens/Team";

const App = () => {

  const [isLoggedIn, setisLoggedIn] = useState(false);

  
  useEffect(() => {

   setisLoggedIn(Number(localStorage.getItem('isLoggedIn') != undefined ? localStorage.getItem('isLoggedIn') : 0));
    
  }, []);

  
 
  return (
    <>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/emailVerification" element={<EmailVerification />} />
          <Route path="/accessCode" element={<AccessCode />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/whatWeDo" element={<WhatWeDo />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          {/* <Route path="/adminDashboard" element={ isLoggedIn? <AdminDashboard /> : <Navigate to = '/signIn'/>} /> */}
          <Route path="/adminDashboard" element={ <AdminDashboard />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/validateEmail" element={<ValidateEmail />} />
          <Route path="/newPassword" element={<NewPassword />} />
          <Route path="/team" element={<Team/>}/>

        </Routes>
      </main>
    </>
  );
};

export default App;
