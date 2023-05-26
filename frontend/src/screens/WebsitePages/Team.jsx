import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  const members = [
    {
      id: 1,
      name: "Ano Glonti",
      jobDesc: "Founder and CEO",
      image: "./images/team/ano.png",
      linkdin: "https://www.linkedin.com/in/ano-glonti-11b93970",
    },
    {
      id: 2,
      name: "Tata Tavdishvili",
      jobDesc: "Chief Marketing Officer ",
      image: "./images/team/tata.png",
      linkdin: "https://www.linkedin.com/in/tata-tavdishvili-757bb0142",
    },
    {
      id: 3,
      name: "Eduardo Aquino",
      jobDesc: "Creative Director",
      image: "./images/team/eduardo.png",
      linkdin: "https://www.linkedin.com/in/eduardo-aquino-a0472736",
    },
    {
      id: 4,
      name: "Mariam Giorgadze",
      jobDesc: "Digital Strategist",
      image: "./images/team/mariam.png",
      linkdin: "https://www.linkedin.com/in/mariam-giorgadze-392778211",
    },
    {
      id: 5,
      name: "Zhen Shijun",
      jobDesc: "iOS Developer",
      image: "./images/team/zhen1.png",
      linkdin: "https://www.linkedin.com/in/zhen-shijun-a80a5b1a8",
    },
    {
      id: 6,
      name: "Viktor Kostic",
      jobDesc: "Android Developer",
      image: "./images/team/viktor1.png",
      linkdin: "https://www.linkedin.com/in/viktor-kostic-770a8b236",
    },
    {
      id: 7,
      name: "Hongwei Zhao",
      jobDesc: "Backend Developer",
      image: "./images/team/hongwei1.png",
      linkdin: "https://www.linkedin.com/in/hongwei-zhao-2255b6160/",
    },
    {
      id: 8,
      name: "Usman Hussain",
      jobDesc: "Front End Developer",
      image: "./images/team/usman1.png",
      linkdin: "https://www.linkedin.com/in/findusman",
    },
  ];

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center fs-3 text-color  fw-bold mt-5">
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
            <div className="col-md-4 col-lg-3 my-2 my-md-4 " key={member.id}>
              <div className="p-3">
                <div className="img-class-team">
                  <img
                    src={member.image}
                    alt="team"
                    className="img-fluid rounded-3 px-3 px-md-0 img-class-team"
                  />
                </div>
                <div className="mt-4 mx-1">
                  <h1 className="fs-6 job-desc my-3 fw-bold">{member.name}</h1>
                  <h1 className="fs-6 job-desc mb-3 fw-light">
                    {member.jobDesc}
                  </h1>
                  <div>
                    <Link to={member.linkdin} target="_blank">
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
