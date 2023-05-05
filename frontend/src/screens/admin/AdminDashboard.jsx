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
       <div className="container">
        <div className="row">
          <div className="col-12">
          <h1 className='admin-main text-center mt-5'>
          This is Admin Dashboard.
        </h1>
          </div>
        </div>
       </div>
      </>)
}

export default AdminDashboard