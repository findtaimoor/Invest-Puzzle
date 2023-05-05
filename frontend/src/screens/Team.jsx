import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  const members = [
    {
      id: 1,
      name: "Ano Glonti",
      jobDesc: "Founder and CEO",
      image: "./images/girl.JPG",
      linkdin: "/someLink"
    },
    // {
    //   id: 2,
    //   name: "Name",
    //   jobDesc: "Job Description",
    //   image: "./images/Rectangle 3.png",
    //   linkdin: "/someLink"
    // },
    // {
    //   id: 3,
    //   name: "Name",
    //   jobDesc: "Job Description",
    //   image: "./images/Rectangle 3.png",
    //   linkdin: "/someLink"
    // },
    // {
    //   id: 4,
    //   name: "Name",
    //   jobDesc: "Job Description",
    //   image: "./images/Rectangle 3.png",
    //   linkdin: "/someLink"
    // },
    // {
    //   id: 5,
    //   name: "Name",
    //   jobDesc: "Job Description",
    //   image: "./images/Rectangle 3.png",
    //   linkdin: "/someLink"
    // },
    // {
    //   id: 6,
    //   name: "Name",
    //   jobDesc: "Job Description",
    //   image: "./images/Rectangle 3.png",
    //   linkdin: "/someLink"
    // },
  ];

  return (
    <>
      <div className="container my-5">
        <div className="row pt-5">
          <div className="col-12">
            <h1 className="text-center fs-3 text-color  fw-bold mt-md-5">
              Meet our team
            </h1>
            <p className="text-center text-color fs-5 mt-3 lh-sm">
              We are a group of dedicated professionals who are passionate about
              what we do.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          {members.map((member) => (
            <div className="col-md-4 my-2 my-md-4 " key={member.id}>
              <div className="team-card p-3 p-md-4 rounded-3">
                <div className="img-class-team">
                  <img
                    src={member.image}
                    alt="team"
                    className="img-fluid rounded-3 img-class-team"
                  />
                </div>
                <div className="mt-4 mx-1">
                  <h1 className="fs-6 job-desc my-3 fw-bold">{member.name}</h1>
                  <h1 className="fs-6 job-desc mb-3 fw-light">{member.jobDesc}</h1>
                  <div>
                  <Link to={member.linkdin}>
                    <img
                      src="./images/linkdin.png"
                      alt="linkdin"
                      className="img-fluid my-2"
                    />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
