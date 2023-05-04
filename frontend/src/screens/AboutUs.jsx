import React from "react";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="container about">
        <div className="row">
          <div className="col-md-6 about-img ">
            <img
              src="./images/circle.png"
              alt=""
              className="img-fluid about-radius"
            />
          </div>
          <div className="col-md-6 about-box px-4 px-md-0">
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
        <div className="row uni">
          <div className="col-md-6 uni-box pb-5 ps-0 ">
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
          <div className="col-md-6 uni-img px-0">
            <img
              src="./images/university.webp"
              alt=""
              className="img-fluid uni-radius"
            />
          </div>
        </div>
      </div>

      <div className=" stock-color">
        <div className="container">
          <div className="row">
            <div className="col-md-6 uni-img">
              <img
                src="./images/stock.webp"
                alt=""
                className="img-fluid uni-radius"
              />
            </div>
            <div className="col-md-6 uni-box pb-5 pt-3 px-4">
              <p className=" uni-para ">
                Idea Behind the name of the Mobile App – WaffleStock: The name
                of WaffleStock comes from the first pancake theory: "The first
                one turns out messed up because you're out of practice or
                haven't made pancakes before. The second and following pancakes
                come out perfectly round and golden." The same thinking applies
                to waffles. Making waffles is our metaphor for investing in the
                stock market, where WaffleStock is the practice place to make
                profitable real investments.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
