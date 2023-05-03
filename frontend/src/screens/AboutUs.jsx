import React from 'react';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
      <div className="container about">
        <div className="row">
          <div className="col-md-6 about-img ">
            <img
              src="./images/girl.jpg"
              alt=""
              className="img-fluid about-radius"
            />
          </div>
          <div className="col-md-6 about-box pt-5">
            <h1 className="about-heading pb-2">About Us</h1>
            <p className=" about-para">
              InvestPuzzle LLC was founded by Ano Glonti in 2022. Ano has earned
              a Bachelor's Degree in Finance from George Mason University and a
              Master's Degree in Global Finance from Fordham University. Ano has
              taken multiple Finance Classes, but she particularly distinguishes
              Student Managed Investment Fund (SMIF) at GMU." The first time I
              had a real stock market experience was as a Co-President of the
              Risk Committee at SMIF. Universities provide all the theoretical
              knowledge we need to succeed in the stock market; however, they do
              not provide enough practical tools to make students feel what
              investing in the stock market is like.
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
