import React from "react";
import ProfileSettingCard from "../../components/ProfileSettingCard";


const ChangeEmail = () => {
  return (
    <>
      <ProfileSettingCard
        pageTitle="Change Email"
        pageDescription="Please write your new email and confirm it."
        inputTitle="New Email"
        confirmInput="Confirm New Email"
        buttonTitle="Change email"
        placeholder="Type your email"
        successTitle="Email"
        successTitletext="email"
       
      />





    </>
  );
};

export default ChangeEmail;
