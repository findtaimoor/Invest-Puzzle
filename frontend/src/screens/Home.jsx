import React from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row home-title text-center mb-5">
          <h1 className="home-heading fw-bold fs-2">
            InvestPuzzle presents{" "}
            <span className="title-color">WaffleStock</span>
          </h1>
          <p className="home-desc mt-3 fs-5 lh-sm px-3 px-md-5">
            <span className="fw-bold">WaffleStock</span> is an app designed for
            SMIF students to practice trading, interect with each other, and
            compete for the highest ranking.
          </p>
        </div>

        <div className="row">
          <video
            id="vid"
            src="./videos/video.mp4"
            type="video/mp4"
            muted={true}
            autoPlay
            controls
            playsinline
            data-wf-ignore="true"
          />
        </div>

        <div className="row">
          <div className="col-md-6 d-md-flex align-items-center">
            <div className="row">
              <div className="col-lg-6 text-center pe-lg-0">
                <div>
                  <img src="./images/Frame 14272.png" alt="mobile 1" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 text-center pt-lg-5 ps-lg-0">
                <div className="pt-lg-5">
                  <img src="./images/Frame 14277.png" alt="mobile 2" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 ps-3 ps-md-5 d-flex align-items-center home-heading">
            <div className="align-items-center text-center text-lg-start">
              <h1 className="fs-3 fw-bold px-0 px-md-5">
                JOIN SIMF'S COMMUNITY Download WaffleStack
              </h1>

              <div className="d-flex px-3 px-md-5 my-3 justify-content-center justify-content-lg-start">
                <div className=" me-md-3 mb-3 ">

                  
                  <img src="./images/image 1.png" alt="play store" />
                </div>
                <div>
                  <img src="./images/image 2.png" alt="play store" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <script>
          document.getElementById('vid').play();
        </script> */}
      </div>

      <div className="container-fluid home-container-2 py-3 py-md-5 my-5">
        <div className="row pt-5 pb-4 pb-md-5">
          <div className="col-12 text-center">
            <h1 className="fs-2 fw-bold">Our Data Providers</h1>
          </div>
        </div>
        <div className="row text-center px-0 px-lg-5">
          <div className="col-md-6 ps-lg-5">
            <h1 className="fs-5 fw-bold mb-4">FactSet Research System Inc</h1>
            <div className="mb-4">
              <img src="./images/image 3.png" alt="research image" />
            </div>

            <Link to="www.facset.com" className="link-1">
              <h1 className="fs-6 home-links">www.facset.com</h1>
            </Link>
          </div>
          <div className="col-md-6 pe-lg-5">
            <h1 className="fs-5 fw-bold mb-4">Financial Modeling Prep</h1>
            <div className="mb-4">
              <img src="./images/image 5.png" alt="research image" />
            </div>

            <Link to="site.financialmodelingprep.com" className="link-1">
              <h1 className="fs-6 home-links">site.financialmodelingprep.com</h1>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
