import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";

function SignIn() {
  const [showPassword, setShowPassword] = useState(null);
  const [message, setMessage] = useState(null);

  let Emailref = useRef();
  let Passwordref = useRef();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    let email = Emailref.current.value;
    let password = Passwordref.current.value;

    console.log(email, password);
    try {
      // let res = await fetch("http://localhost:9000/auth/login", {
      let res = await fetch(process.env.REACT_APP_BASE_URL + "/auth/login", {
        method: "POST",
        body: JSON.stringify({
          password: password,
          emailOrUsername: email,
          loginType: "0",
          socialId: "",
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      let data = await res.json();
      console.log(data);

      if (res.status === 400) {
        setMessage("Username or password is wrong.");
      } else if(data.message === 'Please verify Payment source'){
        setMessage(`${data.message}.`)
      } else if (data.message === 'Email verification code has been sent to your email account'){
        setMessage('Your email has not verified.')
      }else {
        if (res.status === 200) {
          localStorage.removeItem("isLoggedIn");
          localStorage.setItem("isLoggedIn", 1);
          localStorage.setItem("fullName" , data.data.user.userFullName)

          navigate("/profile");
          window.scrollTo(0,0)
        } else {
          setMessage("User not found.");
          localStorage.removeItem("isLoggedIn");
          localStorage.setItem("isLoggedIn", 0);
        }
      }
    } catch (err) {
      console.error(err);
      setMessage("Problem with login, Contact Customer Support");
    }
  };

  let isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn == 1) {
   
    navigate("/profile");
    window.scrollTo(0,0)
  } else {
    return (
      <>
        <div className="container-fluid app-main1">
          <div className="row ">
            <div className="offset-lg-4 col-lg-4 col-12 column1 ">
              <div className="border-form my-5">
                <h1 className=" text-center fw-bold font1 mt-3">
                  Sign in to your account
                </h1>

                <Form className="signUp-form " onSubmit={submitHandler}>
                  <div className="px-3 px-md-5 py-4">
                    {message ? <Message>{message}</Message> : null}
                    <Form.Group className="mb-3 ">
                      <Form.Label className="fw-bold fs-6">Email</Form.Label>
                      <Form.Control
                        type="email"
                        ref={Emailref}
                        className="form-cells"
                        required
                        placeholder="yourmail@mail.com"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold fs-6">Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          ref={Passwordref}
                          type={showPassword ? "text" : "password"}
                          className="form-cells"
                          placeholder="Type your password.."
                          required
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

                    <div className="d-grid my-4">
                      <Button className="btn btn1" type="submit">
                        Sign In
                      </Button>
                    </div>
                    <div className="forget-password text-center">
                      {/* <Link to="/forgetPassword">Forget Password?</Link> */}
                      <Link to="/signIn">Forget Password?</Link>
                    </div>
                    <p className="text-center font mt-4">
                      Don't have an account?{" "}
                      <span className="text-dark">
                        <Link to="/registration">Sign Up</Link>
                      </span>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignIn;
