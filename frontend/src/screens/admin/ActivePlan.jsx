import React from "react";
import { useNavigate } from "react-router-dom";

import ActivePlanCard from "../../components/ActivePlanCard";

const ActivePlan = () => {
  const descriptionList = [
    `15,000+ stock data`,
    `5 different exchanges`,
    `Portfolio Analysis`,
    `Ranking`,
    `Daily News`,
    `Upcoming IPOs`,
    `What if Scenarios`,
    `Cancel Anytime`,
  ];
  const name = [`Small Cap`, `Mid Cap`, `Large Cap`];
  const pricing = [`$11,760`, `$18,000`, `$24,000`];

  let userFullName = localStorage.getItem("fullName");
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid px-3 px-md-5 pt-4 py-md-5">
        <div className="px-md-5">
          <div className="row">
            <div className="col-12 d-flex">
              <div style={{ cursor: "pointer" }} className="d-flex align-items-center" onClick={() => navigate(-1)}>
                <img
                  src="./images/back arrow.png"
                  alt="back"
                  className="pe-3"
                />
              </div>
              <h1 className=" fs-1 fw-bold ">{userFullName}</h1>
              <div className="ps-3">
                <button
                  type="submit"
                  className="btn btn-admin1 fw-light "
                  
                >
                  Change plan
                </button>
              </div>
            </div>
           <div className=" d-flex align-items-center">
           <h1 className="fs-5 home-desc fw-bold pt-5">Active plan</h1>
           </div>
          </div>

          <div className="row py-5">
            <div className="col-md-10 col-12">
              <div className="border rounded-5">
                <div className="py-3 px-md-5 px-2 d-lg-flex align-items-center">
                  <ActivePlanCard
                    name={name[0]}
                    pricing={pricing[0]}
                    time="yearly"
                    users="0-20 Users"
                    list={descriptionList}
                  ></ActivePlanCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivePlan;
