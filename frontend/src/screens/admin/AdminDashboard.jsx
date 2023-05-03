import React from 'react'
import { useNavigate } from 'react-router'


const AdminDashboard = () => {

  const navigate = useNavigate()
  let isLoggedIn = Number(localStorage.getItem('isLoggedIn') != undefined ? localStorage.getItem('isLoggedIn') : 0);


  if (isLoggedIn == 0)
    navigate('/signin')
  else

    return (
      <>
        <h1 className='admin-main text-center'>
          This is Admin Dashboard.
        </h1>
      </>)
}

export default AdminDashboard