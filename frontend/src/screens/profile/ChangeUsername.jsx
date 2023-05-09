import React from 'react'
import ProfileSettingCard from "../../components/ProfileSettingCard";


const ChangeUsername = () => {
  return (
    <>
    <ProfileSettingCard
        pageTitle="Change Username"
        pageDescription="Please write your new username and confirm it."
        inputTitle="New Username"
        confirmInput="Confirm New Username"
        buttonTitle="Change Username"
        placeholder="@newusername"
        successTitle="Username"
        successTitletext="username"
      />


    </>
  )
}

export default ChangeUsername