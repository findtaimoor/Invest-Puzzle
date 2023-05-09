import React from "react";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="container about">
        <div className="row mt-md-5">
          <div className="col-md-6 about-img d-flex align-items-center">
           
            <img
              src="./images/circle.png"
              alt=""
              className="img-fluid about-radius"
            />
           
          </div>
          <div className="col-md-6 about-box px-4 px-md-0 mt-md-5">
            <h1 className="about-heading pb-2 fs-3 fw-bold">
              Mission Statement
            </h1>
            <p className=" about-para">
              WaffleStock is an app that creates a healthy competitive
              environment for SMIF students to practice trading, understand the
              market, learn from each other and make connections.
            </p>

            <h1 className="about-heading pb-2 fs-3 fw-bold">Our goal</h1>
            <p className=" about-para">
              We strive to make students comfortable in the stock market and
              have enough practice to make intelligent trading decisions in the
              real world.
            </p>

            <h1 className="about-heading pb-2 fs-3 fw-bold">
              Vision Statement
            </h1>
            <p className=" about-para">
              To create a community of SMIF students that enables them to be a
              better traders.
            </p>
          </div>
        </div>
      </div>

      <div className="home-container-2">
        <div className="container  py-1 py-md-5 my-5">
          <div className="row uni">
            <div className="col-md-7 uni-box pb-5 pb-md-0 px-3">
              <p className=" uni-para ">
                InvestPuzzle LLC was founded by Ano Glonti in 2022. Ano has
                earned a Bachelor's Degree in Finance from George Mason
                University and a Master's Degree in Global Finance from Fordham
                University. Ano has taken multiple Finance Classes, but she
                particularly distinguishes Student Managed Investment Fund
                (SMIF) at GMU." The first time I had a real stock market
                experience was as a Co-President of the Risk Committee at SMIF.
                Universities provide all the theoretical knowledge we need to
                succeed in the stock market; however, they do not provide enough
                practical tools to make students feel what investing in the
                stock market is like.
              </p>
            </div>
            <div className="col-md-5 uni-img px-1 ps-md-5 d-flex align-items-center">
              <div>
                <img
                  src="./images/Frame 14310.png"
                  alt=""
                  className="img-fluid uni-radius"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-5 uni-img text-center">
            <div>
            <img
              src="./images/aboutUs mobile.png"
              alt=""
              className="img-fluid"
            />
            </div>
          </div>
          <div className="col-md-7 uni-box pb-5 pt-5 pt-md-3 px-4">
            <p className=" uni-para ">
              I know many brilliant A-star students who have lost money in the
              stock market because they "did not know what they were doing". Not
              many students can afford to keep investing in the stock market
              after a significant loss. The idea of WaffleStock came to me when
              I took my first big loss in the market; I thought to myself, what
              if there was a place where people could practice investing without
              negative consequences? I wanted to create an environment where
              people can be in the "game we call a stock market" without any
              cost, where they can learn from each other and understand what's
              happening in the market. I wanted this app to be a syrup to SMIF's
              Waffle." – says Ano.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
