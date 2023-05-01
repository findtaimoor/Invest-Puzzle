import React, { useState } from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";

import Message from "../components/Message";

const AccessCode = () => {
  const [message, setMessage] = useState(null);

  const ACodebyLocalStorage = localStorage.getItem("accessCode");

  // const [text, setText] = useState("");

  // const inputHandler = (event) => {
  //   setText(event.target.value);
  // };

  const copy = async (e) => {
    e.preventDefault();
    await navigator.clipboard.writeText(ACodebyLocalStorage);
    setMessage("Code is copied to clipboard.");
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="px-5">
        <FormContainer
          formTitle="Welcome to the WaffleStock"
          formDescription="We are glad to see you in our community"
        >
          <Form className="col-md-6 offset-md-3" onSubmit={copy}>
            {message ? <Message variant="success">{message}</Message> : null}
            <div className="row pt-5">
              <Form.Group>
                <Form.Label className="checkout-link2 pb-3">
                  Here's your universities' unique access code:
                </Form.Label>
                <div className="row">
                  
                  <div className=" col-md-8 mb-3">
                    <div className="d-sm-grid">
                    <Form.Control
                      type="text"
                      onChange={(e) => e.target.value}
                      className="form-cells3"
                      value={ACodebyLocalStorage}
                    />
                  </div>
                  </div>
           
                 
                <div className="col-md-4">
                <div className="d-sm-grid ">
                    <Form.Group>
                      <div className="d-grid ">
                        <Button className="btn btn5" type="submit" >
                          Copy Code
                        </Button>
                      </div>
                    </Form.Group>
                  </div>
                </div>
              
                </div>


              </Form.Group>
            </div>


           



            <h1 className="checkout-link2 text-center pb-5 mb-5">
              Your students can access WaffleStock by using this code.{" "}
            </h1>
          </Form>
        </FormContainer>
      </div>
    </>
  );
};

export default AccessCode;
