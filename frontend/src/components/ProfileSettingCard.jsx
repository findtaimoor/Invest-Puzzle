import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Message from "./Message";
import SuccessCard from "../components/SuccessCard";

const ProfileSettingCard = ({
  pageTitle,
  pageDescription,
  buttonTitle,
  inputTitle,
  confirmInput,
  placeholder,
  successTitle,
  successTitletext,
}) => {
  const navigate = useNavigate();
  let [message, setMessage] = useState();

  let inputRef = useRef();
  let confirmInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let input = inputRef.current.value;
    let confirmInput = confirmInputRef.current.value;

    if (input && confirmInput) {
      if (input !== confirmInput) {
        setMessage("Fields are not same.");
      }
    } else {
      setMessage("Enter new credentials.");
    }
  };

  return (
    <>
      <div className="container-fluid px-3 px-md-5 py-4 py-md-5">
        <div className="px-md-5">
          <div className="row">
            <div className="col-12 d-flex">
              <div style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
                <img
                  src="./images/back arrow.png"
                  alt="back"
                  className="pe-3 mt-1"
                />
              </div>
              <h1 className="text-color fs-3 fw-bold ">Profile Settings</h1>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h1 className="fs-5 fw-bold home-desc">{pageTitle}</h1>
              <p className="home-desc py-1">{pageDescription}</p>

              <div className="row pt-3 pb-md-3">
                <form method="post" onSubmit={submitHandler}>
                  {message ? (
                    <div className="mb-5">
                      <Message>{message}</Message>
                    </div>
                  ) : null}
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="mb-3">
                          <label className="font2 fw-bold form-label">
                            {inputTitle}
                          </label>
                          <input
                            type="text"
                            ref={inputRef}
                            className="form-cells1 mb-5 form-control"
                            placeholder={placeholder}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="mb-3">
                          <label className="font2 fw-bold form-label">
                            {confirmInput}
                          </label>
                          <input
                            type="text"
                            ref={confirmInputRef}
                            className="form-cells1 mb-5 form-control"
                            placeholder={placeholder}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row my-4">
                      <div className="col-md-6">
                        <div className="d-grid">
                          <button
                            className="btn signUp-button text-light fw-bold"
                            // data-bs-toggle="modal" data-bs-target="#modal"
                          >
                            {buttonTitle}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modal">
        <div class="modal-dialog-centered modal-dialog modal-md">
          <div class="modal-content">
            <div className="modal-body">
              <SuccessCard title={successTitle} titleText={successTitletext} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettingCard;
