import React, { useRef, useState } from "react";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  let CardnameRef = useRef();
  let CardNumberRef = useRef();
  let ExpiryDateRef = useRef();
  let CvvRef = useRef();
  let BillingCycleRef = useRef();
  let PlanRef = useRef();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    let cardName = CardnameRef.current.value;
    let cardNumber = CardNumberRef.current.value;
    let expiryYear = new Date(ExpiryDateRef.current.value).getFullYear();
    console.log(expiryYear)
    let expiryMonth = new Date(ExpiryDateRef.current.value).getMonth();
    let cvv = CvvRef.current.value;
    let billingCycle = BillingCycleRef.current.value;
    let plan = PlanRef.current.value;

    try {
      let res = await fetch("http://localhost:9000/users/chargepayment", {
        method: "POST",
        body: JSON.stringify({
          nameOnCard: cardName,
          cardNumber: cardNumber,
          expiryYear: expiryYear,
          expiryMonth: expiryMonth,
          CVC: cvv,
          billingCycle: billingCycle,
          planType: plan,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      let data = await res.json();
      console.log(data);
      navigate("/accessCode");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <div className="conatiner px-5">
        <FormContainer formTitle="Payment">
          <Form onSubmit={submitHandler}>
            <div className="col-md-6 offset-md-3">
              <Form.Group className="mb-3">
                <Form.Label className="font2 mt-5">Name of Card</Form.Label>
                <Form.Control
                  type="text"
                  required
                  ref={CardnameRef}
                  className="form-cells1 mb-5"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="font2">Card Number</Form.Label>
                <Form.Control
                  type="number"
                  required
                  ref={CardNumberRef}
                  className="form-cells1 mb-5"
                />
              </Form.Group>

              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <Form.Group className="mb-3">
                    <Form.Label className="font2">Expiry Date</Form.Label>
                    <Form.Control
                      type="date"
                      required
                      ref={ExpiryDateRef}
                      className="form-cells1 mb-5"
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                  <Form.Group className="mb-3">
                    <Form.Label className="font2">CVV</Form.Label>
                    <Form.Control
                      type="number"
                      required
                      ref={CvvRef}
                      className="form-cells1 mb-5"
                    />
                  </Form.Group>
                </div>
              </div>

              <Form.Group className="">
                <Form.Label className="font2 d-block">Billing Cycle</Form.Label>

                <div className="d-grid">
                  <select
                    type="text"
                    ref={BillingCycleRef}
                    className="form-cells2 mb-5"
                    required
                  >
                    <option value="Semester">Semester</option>
                    <option value="value2">Yearly</option>
                  </select>
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="font2 d-block">
                  Choose your plan
                </Form.Label>
                <div className="d-grid">
                  <select
                    type="text"
                    ref={PlanRef}
                    className="form-cells2 mb-5"
                    required
                  >
                    <option value="smallCap">Small Cap</option>
                    <option value="value2">Mid Cap</option>
                    <option value="value3">Large Cap</option>
                  </select>
                </div>
              </Form.Group>
              <hr />
              <div className="py-4 my-3 ">
                <h1 className="font2 d-inline">Small cap . 0-20 Users</h1>
                <h1 className="font2 float-end">$4,900</h1>
                <h1 className="font3 my-2">
                  Save 20% yearly?{" "}
                  <span className="font4">Choose your billing!</span>
                </h1>
              </div>

              <hr />
              <div className="pt-4 pb-5 my-3 ">
                <h1 className="font5 d-inline">Total/Semester</h1>
                <h1 className="font5 float-end">$4,900 USD</h1>
              </div>
            </div>
            <hr />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3 col-4 d-grid mt-3 mb-5">
                  <Button className="btn btn4" onClick={() => navigate(-1)}>
                    Back
                  </Button>
                </div>

                <div className="col-md-3 col-4 d-grid ms-auto mt-3 mb-5">
                  <Button className="btn btn3" type="submit">
                    Pay Now
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </FormContainer>
      </div>
    </>
  );
};

export default Payment;
