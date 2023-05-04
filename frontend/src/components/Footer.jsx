import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid footer">
          <div className="col-12">
            <div className="px-5  fw-bold">
              <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                <div className="align-items-end text-center text-lg-start">
                  <h1 className="fs-6 fw-bold text-md-end mb-4">
                    Follow us on
                  </h1>

                  <div className="d-flex justify-content-center justify-content-lg-start">
                    <div className=" me-3 mb-3 ">
                      <Link to=""><img src="./images/Vector.png" alt="Linkdin" /></Link>
                    </div>
                    <div className=" me-3 mb-3 ">
                    <Link to=""><img src="./images/Vector (1).png" alt="instagram" /></Link>
                    </div>
                    <div>
                    <Link to=""><img src="./images/Vector (2).png" alt="instagram" /></Link>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div className=" d-md-flex align-items-center mt-4 ">
                <div className=" pe-5 pb-2">Privacy Policy</div>
                <div className=" pe-5 pb-2">Terms and Conditions</div>
                <div className=" pe-5 pb-2">info@investpuzzle.com</div>
                <div className=" pe-5 pb-2">703-901-3144</div>
                <div className="ms-auto pb-2">InvestPuzzle, LLC</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
