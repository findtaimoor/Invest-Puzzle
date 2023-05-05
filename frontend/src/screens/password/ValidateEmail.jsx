import React, { useState, useRef } from "react";
import FormContainrLogin from "../../components/FormContainrLogin";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import OTPtimer from "../../components/OTPtimer";
import Message from "../../components/Message";

const ValidateEmail = () => {
  const navigate = useNavigate();

  let [message, setMessage] = useState(null);

let otpRef = useRef();

  const recoveryEmail = localStorage.getItem('recoveryEmail');

  const [otp, setOtp] = useState(new Array(5).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };


  const submitHandler = (e) =>{
    e.preventDefault();

    let otp = otpRef.current.value;

    if(otp){
      navigate('/newPassword')
    }else{
      setMessage('OTP is required to validate email.')
    }
  }

  return (
    <>
      <FormContainrLogin
        title="Validate Email"
        detail="If you don't receive email within 2 minutes, please check junk file folder of your mail box."
      >
        <Form className="signUp-form " onSubmit={submitHandler}>
          <div className="px-3 px-md-5">
            {message ? <Message>{message}</Message>: null}
            <div className="row text-center">
              
              <OTPtimer seconds={300} />
             
            </div>
            <Form.Group className="mb-4 text-center">
              <div className="row">
                <div className="d-flex justify-content-between">
                  {otp.map((data, index) => {
                    return (
                      <input
                        className="text-center otp-input shadow-none fw-bold "
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        ref={otpRef}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                      />
                    );
                  })}
                </div>
              </div>

              <Form.Label className="mt-3 validate-label">
                Send to {recoveryEmail}
              </Form.Label>
            </Form.Group>

            <div className="d-grid mt-5 mb-3">
              <Button className="btn btn1" type="submit" >
                Validate
              </Button>
            </div>

            <div className="d-grid mb-3">
              <Button className="btn btn14">Resend code</Button>
            </div>

            <div className="d-grid mb-5">
              <Button className="btn btn15" onClick={() => navigate(-1)}>
                Back
              </Button>
            </div>
          </div>
        </Form>
      </FormContainrLogin>
    </>
  );
};

export default ValidateEmail;
