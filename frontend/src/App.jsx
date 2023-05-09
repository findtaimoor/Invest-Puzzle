import React, {useState}from "react";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./screens/SignIn";
import Registration from "./screens/signup/Registration";
import Payment from "./screens/signup/Payment";
import EmailVerification from "./screens/signup/EmailVerification";
import AccessCode from "./screens/signup/AccessCode";
import Pricing from "./screens/WebsitePages/Pricing";
import WhatWeDo from "./screens/WebsitePages/WhatWeDo";
import AboutUs from "./screens/WebsitePages/AboutUs";
import Home from "./screens/WebsitePages/Home";
import AdminDashboard from "./screens/admin/AdminDashboard";
import ForgetPassword from "./screens/password/ForgetPassword";
import ValidateEmail from "./screens/password/ValidateEmail";
import NewPassword from "./screens/password/NewPassword";
import { useEffect } from "react";
import Team from "./screens/WebsitePages/Team";
import Profile from "./screens/profile/Profile";
import ProfileSettings from "./screens/profile/ProfileSettings";
import ChangeEmail from "./screens/profile/ChangeEmail";
import ChangeUsername from "./screens/profile/ChangeUsername";
import ChangePassword from "./screens/profile/ChangePassword";
import ActivePlan from "./screens/admin/ActivePlan";
import Indesign from "./components/Indesign";

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
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profileSettings" element={<ProfileSettings/>}/>
          <Route path="/changeEmail" element={<ChangeEmail/>}/>
          <Route path="/changeUsername" element={<ChangeUsername/>}/>
          <Route path="/changePassword" element={<ChangePassword/>}/>
          <Route path="/activePlan" element={<ActivePlan/>}/>



        </Routes>
      </main>
    </>
  );
};

export default App;
