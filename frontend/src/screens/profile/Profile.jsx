import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Dropdown } from "react-bootstrap";
import Indesign from "../../components/Indesign";

const Profile = () => {
  const navigate = useNavigate();

  let users = [
    {
      id: 1,
      name: "Full Name",
      email: " user@schoolmail.com",
      status: "Activated",
    },
    {
      id: 2,
      name: "Full Name",
      email: " user@schoolmail.com",
      status: "Activated",
    },
    {
      id: 3,
      name: "Full Name",
      email: " user@schoolmail.com",
      status: "Pending",
    },
    {
      id: 4,
      name: "Full Name",
      email: " user@schoolmail.com",
      status: "Activated",
    },
    {
      id: 5,
      name: "Full Name",
      email: " user@schoolmail.com",
      status: "Pending",
    },
    {
      id: 6,
      name: "Full Name",
      email: " user@schoolmail.com",
      status: "Activated",
    },
    {
      id: 7,
      name: "Full Name",
      email: " user@schoolmail.com",
      status: "Activated",
    },
    {
      id: 8,
      name: "Full Name",
      email: " user@schoolmail.com",
      status: "Activated",
    },
  ];

  let isLoggedIn = Number(
    localStorage.getItem("isLoggedIn") != undefined
      ? localStorage.getItem("isLoggedIn")
      : 0
  );

  let userFullName = localStorage.getItem("fullName");



  if (isLoggedIn == 0) {navigate("/signin"); window.scrollTo(0,0)}
  else
    return (
      <>
        {/* <div className="container-fluid px-3 px-md-5 pt-4 py-md-5">
          <div className="px-md-5">
            <div className="row">
              <div className="col-12">
                <div className="d-flex">
                  <h1 className="fs-1 fw-bold pb-3">{userFullName}</h1>

                  <div className="ps-3">
                    <button
                      type="submit"
                      className="btn btn-profile1 fw-light "
                      onClick={() => {navigate("/activePlan"); window.scrollTo(0,0)}}
                    >
                      Change plan
                    </button>
                  </div>
                </div>

                <div className="d-md-flex justify-content-between pt-md-5 pt-3 pb-4">
                  <h1 className="fs-4 home-desc1 fw-bold d-flex align-items-center">
                    Small Cap
                  </h1>
                  <h1 className="fs-5 home-desc py-2 py-md-0 d-flex align-items-center">
                    Billed semester • 15 users
                  </h1>
                  <button
                    type="submit"
                    className="btn signUp-button text-light fw-bold"
                  >
                    Add a user
                  </button>
                </div>

                <hr />

                <h1 className="fs-5 py-4 home-desc fw-bold">Users added</h1>

                <div className="row">
                  {users.map((user) => (
                    <>
                      <div
                        className="col-md-3 d-flex align-items-center pb-3"
                        key={user.id}
                      >
                        <h1 className="fs-6 home-desc fw-light">{user.name}</h1>
                      </div>
                      <div className=" col-md-5 d-flex align-items-center pb-3 justify-content-md-center">
                        <h1 className="fs-6 home-desc fw-light">
                          {user.email}
                        </h1>
                      </div>

                      <div className="col-md-4 d-flex justify-content-md-between pb-3">
                        <div className="col-4 ">
                          {user.status == "Activated" ? (
                            <button className="btn btn-profile px-md-4">
                              {user.status}
                            </button>
                          ) : (
                            <Dropdown className="d-inline">
                              <Dropdown.Toggle
                                className="d-flex align-items-center border-0 btn btn-profile2 px-md-4"
                                variant="bg-light"
                              >
                                {user.status}

                                <Dropdown.Menu className="dropdown-menu py-0">
                                                                      
                                     <Dropdown.Item className="NavItem text-center border-bottom py-2"> 
                                    Accept 
                                  </Dropdown.Item>

                                  <Dropdown.Item className="NavItem text-center py-2">
                                    Deny
                                  </Dropdown.Item>
                                  
                                </Dropdown.Menu>
                              </Dropdown.Toggle>
                            </Dropdown>
                          )}
                        </div>

                        <div className="col-1  d-flex align-items-center">
                          <img src="./images/delete icon.svg" />
                        </div>
                      </div>
                      <hr className="d-md-none" />
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <Indesign/>
      </>
    );
};

export default Profile;
