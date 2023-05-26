import React, { useRef, useState } from "react";
import FormContainrLogin from "../../components/FormContainrLogin";
import { useNavigate } from "react-router-dom";
import Message from "../../components/Message";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const emailRef = useRef();

  const [message, setMessage] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    console.log(email);
    if (email) {
      navigate("/validateEmail");
      window.scrollTo(0, 0);
      localStorage.setItem("recoveryEmail", email);
    } else {
      setMessage("Enter Email to recover password.");
    }
  };

  return (
    <>
      <FormContainrLogin
        title="Forget Password"
        detail="Please write your email used for your accound to send you a code to complete the process."
      >
        <form className="signUp-form " onSubmit={submitHandler}>
          <div className="px-3 px-md-5">
            {message ? <Message>{message}</Message> : null}
            <div className="form-group mb-4 ">
              <label className="form-label fw-bold fs-6">Email</label>
              <input
                type="email"
                ref={emailRef}
                className="form-cells form-control"
                placeholder="yourmail@mail.com"
              />
            </div>

            <div className="d-grid mt-5 mb-3">
              <button className="btn btn1 text-light" type="submit">
                Send Code
              </button>
            </div>

            <div className="d-grid mb-5">
              <button
                className="btn btn14"
                onClick={() => {
                  navigate(-1);
                  window.scrollTo(0, 0);
                }}
              >
                Back
              </button>
            </div>
          </div>
        </form>
      </FormContainrLogin>
    </>
  );
};

export default ForgetPassword;
