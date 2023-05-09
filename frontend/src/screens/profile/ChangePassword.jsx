import React from 'react'
import ProfileSettingCard from "../../components/ProfileSettingCard";



const ChangePassword = () => {
  return (
    <>
    <ProfileSettingCard
        pageTitle="Change Password"
        pageDescription="Please write your new password and confirm it."
        inputTitle="New Password"
        confirmInput="Confirm New Password"
        buttonTitle="Change Password"
        placeholder="Type your password.."
        successTitle="Password"
        successTitletext="password"
      />
   
    
    </>
  )
}

export default ChangePassword