import React, {useEffect, useState } from "react";
import CheckoutSteps from "../../components/CheckoutSteps";
import FormContainer from "../../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Message from "../../components/Message";
import { useRef } from "react";


const EmailVerification = () => {
  let Coderef = useRef();

  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const email = localStorage.getItem("email");

  
  const submitHandler = async (e) => {
    e.preventDefault();
    let code = Coderef.current.value;

    const jwtbyRegister = localStorage.getItem("jwt");
    try {
      let res = await fetch(
        process.env.REACT_APP_BASE_URL + "/common/confirmOtp",
        {
          method: "POST",
          body: JSON.stringify({
            code: code,
            type: "1",
          }),
          headers: {
            Authorization: `Bearer ${jwtbyRegister}`,
            "Content-type": "application/json",
          },
        }
      );
      let data = await res.json();

      if (res.status !== 200) {
        window.scrollTo(0,0)
        setMessage(
          data.message.charAt(0).toUpperCase() + data.message.slice(1)
        );
      } else {
        navigate("/payment");

        localStorage.setItem("jwtbyOtp", data.data.user.jwt);
        localStorage.removeItem("jwt");
        localStorage.removeItem("email");
      }
    } catch (error) {
      console.log(error);
      window.scrollTo(0,0)
      setMessage("Problem In Verify Email, COntact Customer Support");
    }
  };


  let isLoggedIn = localStorage.getItem("isLoggedIn");







  if (isLoggedIn == 1) {
    navigate("/profile");
  } else {
    if (isLoggedIn == 0) {
      navigate("/registration");
    } else {
      return (
        <>
          <CheckoutSteps step1 step2 />
          <div className="px-3 px-md-5 mb-5">
            <FormContainer
              formTitle="Email Verification"
              formDescription={`Please enter the verification code sent to you at ${email}`}
            >
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3 col-md-6 offset-md-3">
                  {message ? <Message>{message}</Message> : null}
                  <Form.Label className="font2 mt-5">Code</Form.Label>
                  <Form.Control
                    type="text"
                    ref={Coderef}
                    className="form-cells1 mb-5"
                  
                  />
                </Form.Group>
                <hr />
                <div className="container-fluid">
                  <div className="row d-flex flex-md-row flex-column-reverse">
                    <div className="col-md-3 col-12 mt-3">
                      <div className="d-grid ">
                        <Button
                          className="btn btn4"
                          onClick={() => navigate(-1)}
                        >
                          Back
                        </Button>
                      </div>
                    </div>

                    <div className="col-md-3 col-12 ms-auto mt-3">
                      <div className="d-grid">
                        <Button className="btn btn3" type="submit">
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </FormContainer>
          </div>
        </>
      );
      }
  }
};

export default EmailVerification;
