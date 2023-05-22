import React, { useState, useRef } from "react";
import FormContainrLogin from "../../components/FormContainrLogin";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faEye,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import Message from "../../components/Message";
import SuccessCard from "../../components/SuccessCard";

import Modal from "react-bootstrap/Modal";
const NewPassword = () => {

  let Passwordref = useRef();
  let ConfirmPasswordref = useRef();

  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(null);
  const [showConfirmPassword, setShowConfirmPassword] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = async (e) => {
    e.preventDefault();
    let password = Passwordref.current.value;
    let confirmPassword = ConfirmPasswordref.current.value;


    if(password && confirmPassword){
      if(password !== confirmPassword){
        setMessage("Password not match.")
      }else{
        handleShow();
      }
    }else if(!password || !confirmPassword){
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
                  className="position-absolute top-0 end-0 pe-4 pt-3 showpass"
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
                  className="position-absolute top-0 end-0 pe-4 pt-3 showpass "
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
              <Button className="btn btn1" type="submit">
                Change Password
              </Button>
            </div>

            <div className="d-grid mb-5">
              <Button className="btn btn14" onClick={() => {navigate(-1); window.scrollTo(0,0)}}>
                Back
              </Button>
            </div>
          </div>
        </Form>
      </FormContainrLogin>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Body>
          <div
            className=" d-flex justify-content-end"
            onClick={handleClose}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faCircleXmark} size="2xl" />
          </div>

          <SuccessCard title="Password" titleText="password" />

          <div className="d-grid m-4">
            <button className="btn btn1 text-light" onClick={handleClose}>
              Dismiss
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewPassword;
