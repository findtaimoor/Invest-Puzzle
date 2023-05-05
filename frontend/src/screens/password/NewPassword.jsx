import React, { useState, useRef } from "react";
import FormContainrLogin from "../../components/FormContainrLogin";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import Message from "../../components/Message";
import SuccessCard from "../../components/SuccessCard";

const NewPassword = () => {
  let Passwordref = useRef();
  let ConfirmPasswordref = useRef();

  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(null);
  const [showConfirmPassword, setShowConfirmPassword] = useState(null);


  // const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);



  const submitHandler = async (e) => {
    e.preventDefault();
    let password = Passwordref.current.value;
    let confirmPassword = ConfirmPasswordref.current.value;

if(password && confirmPassword){
  if (password !== confirmPassword) {
    setMessage("Password not match.");
  }


}else{
  setMessage('Fill all fields.')
}


  };

  return (
    <>
      <FormContainrLogin
        title="New Password"
        detail="Please write your new password and confirm it."
      >
        <Form className="signUp-form " onSubmit={submitHandler}>
          <div className="px-3 px-md-5">
            {message ? <Message>{message}</Message> : null}
            <Form.Group className="mb-4 ">
              <Form.Label className="fw-bold fs-6"> Password</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  ref={Passwordref}
                  className="form-cells"
                  
                  placeholder="Type your password.."
                />
                <div
                  className="showpass"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </div>
              </div>
            </Form.Group>

            <Form.Group className="mb-4 ">
              <Form.Label className="fw-bold fs-6">Confirm Password</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type={showConfirmPassword ? "text" : "password"}
                  ref={ConfirmPasswordref}
                  className="form-cells"
                
                  placeholder="Type your password.."
                />

                <div
                  className="showpass "
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </div>
              </div>
            </Form.Group>

            <div className="d-grid mt-5 mb-3">
              <Button className="btn btn1" type="submit" >
                Change Password
              </Button>
            </div>

            <div className="d-grid mb-5">
              <Button className="btn btn14" onClick={() => navigate(-1)}>
                Back
              </Button>
            </div>
          </div>
        </Form>
      </FormContainrLogin>




      <div class="modal fade" id="modal">
      <div class="modal-dialog-centered modal-dialog modal-md">
        <div class="modal-content">
          

          <div className="modal-body">
            <SuccessCard title="Password" titleText="password"/>
          </div>
          
        </div>
      </div>
    </div>




    </>
  );
};

export default NewPassword;
