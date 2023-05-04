import React, { useEffect, useRef, useState } from "react";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";

const Payment = () => {
  let CardnameRef = useRef();
  let CardNumberRef = useRef();
  let ExpiryDateRef = useRef();
  let CvvRef = useRef();
  let BillingCycleRef = useRef();
  let PlanRef = useRef();

  // let price = '';
  // let studentCount = '';

  const navigate = useNavigate();

  let [message, setMessage] = useState(null);
  let [price, setPrice] = useState("$4,900");
  let [studentCount, setStudentCount] = useState("0-20");
  let [studentCountInNumbers, setstudentCountInNumbers] = useState(20);

  let [billingCycleText, setbillingCycleText] = useState("Semester");
  let [planText, setplanText] = useState("Small Cap");

  const priceArraySemester = ["$4,900", "$7,500", "$10,000"];
  const priceArrayNnually = ["$11,760", "$18,000", "$24,000"];

  const submitHandler = async (e) => {
    e.preventDefault();

    let cardName = CardnameRef.current.value;
    let cardNumber = CardNumberRef.current.value;
    let expiryYear = new Date(ExpiryDateRef.current.value).getFullYear();
    let expiryMonth = new Date(ExpiryDateRef.current.value).getMonth();
    let cvv = CvvRef.current.value;
    let billingCycle = BillingCycleRef.current.value;
    let plan = PlanRef.current.value;
    var currency = price;
    var priceInNumber = Number(currency.replace(/[^0-9.-]+/g, ""));

    console.log(
      cardName,
      cardNumber,
      expiryYear,
      expiryMonth,
      cvv,
      billingCycle,
      plan,
      priceInNumber,
      studentCountInNumbers
    );

    if (
      expiryYear < new Date().getFullYear() &&
      expiryMonth < new Date().getMonth()
    ) {
      setMessage("Incorrect Card Details.");
    } else {
      const jwtbyOtp = localStorage.getItem("jwtbyOtp");
      try {
        let res = await fetch(
          process.env.REACT_APP_BASE_URL + "/users/chargepayment",
          {
            method: "POST",
            body: JSON.stringify({
              nameOnCard: cardName,
              cardNumber: cardNumber,
              expiryYear: expiryYear,
              expiryMonth: expiryMonth,
              CVC: cvv,
              billingCycle: billingCycle,
              planType: plan,
              studentCount: studentCountInNumbers,
              amount: priceInNumber,
            }),

            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${jwtbyOtp}`,
            },
          }
        );

        let data = await res.json();

        console.log(data);

        if (res.status !== 200) {
          setMessage("Card details are incorrect.");
        } else {
          if (data.status == "Successful") {
            navigate("/accessCode");
            localStorage.setItem("accessCode", data.accessCode);
          } else {
            setMessage("Payment is not successful.");
          }
        }
      } catch (error) {
        console.log(error);
        setMessage("Payment is not successful, Contact Customer Support");
      }
    }
  };

  function adjustValues() {
    let billingCycle = BillingCycleRef.current.value;
    let plan = PlanRef.current.value;

    setbillingCycleText(billingCycle);
    setplanText(plan);

    if (billingCycle === "Semester") {
      if (plan === "Small Cap") {
        setPrice(priceArraySemester[0]);
        setStudentCount("0-20");
        setstudentCountInNumbers(20);
      } else if (plan === "Mid Cap") {
        setPrice(priceArraySemester[1]);
        setStudentCount("21-40");
        setstudentCountInNumbers(40);
      } else if (plan === "Large Cap") {
        setPrice(priceArraySemester[2]);
        setStudentCount("40+");
        setstudentCountInNumbers(20000);
      }
    } else {
      if (plan === "Small Cap") {
        setPrice(priceArrayNnually[0]);
        setStudentCount("0-20");
        setstudentCountInNumbers(20);
      } else if (plan === "Mid Cap") {
        setPrice(priceArrayNnually[1]);
        setStudentCount("21-40");
        setstudentCountInNumbers(40);
      } else if (plan === "Large Cap") {
        setPrice(priceArrayNnually[2]);
        setStudentCount("40+");
        setstudentCountInNumbers(200000);
      }
    }
  }

  useEffect(() => {
    document.querySelectorAll('input[type="number"]').forEach((input) => {
      input.oninput = () => {
        if (input.value.length > input.maxLength)
          input.value = input.value.slice(0, input.maxLength);
      };
    });
  });

  let isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn == 1) {
    navigate("/adminDashboard");
  } else {
    if (isLoggedIn == 0 ) {
      navigate("/registration");
    } else {




      return (
        <>
          <CheckoutSteps step1 step2 step3 />
          <div className="conatiner px-md-5 px-3">
            {/* <input type="button" value="clicl" onClick={checkValue} /> */}

            <FormContainer formTitle="Payment">
              <Form onSubmit={submitHandler}>
                <div className="col-md-6 offset-md-3">
                  {message ? <Message>{message}</Message> : null}

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
                      placeholder="1234 5678 1234 5678"
                      maxLength={16}
                    />
                  </Form.Group>

                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <Form.Group className="mb-3">
                        <Form.Label className="font2">Expiry Date</Form.Label>
                        <Form.Control
                          type="month"
                          required
                          ref={ExpiryDateRef}
                          className="form-cells1 mb-5"
                          placeholder="mm/yy"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <Form.Group className="mb-3">
                        <Form.Label className="font2">CVV</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="•••"
                          required
                          ref={CvvRef}
                          className="form-cells1 mb-5"
                          maxLength="3"
                        />
                      </Form.Group>
                    </div>
                  </div>

                  <Form.Group className="">
                    <Form.Label className="font2 d-block">
                      Billing Cycle
                    </Form.Label>

                    <div className="d-grid select-wrapper">
                      <select
                        type="text"
                        ref={BillingCycleRef}
                        className="form-cells2 mb-5 "
                        onChange={adjustValues}
                        required
                      >
                        <option value="Semester">Semester</option>
                        <option value="Yearly">Yearly</option>
                      </select>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="font2 d-block">
                      Choose your plan
                    </Form.Label>
                    <div className="d-grid select-wrapper">
                      <select
                        type="text"
                        ref={PlanRef}
                        onChange={adjustValues}
                        className="form-cells2 mb-5"
                        required
                      >
                        <option value="Small Cap">Small Cap</option>
                        <option value="Mid Cap">Mid Cap</option>
                        <option value="Large Cap">Large Cap</option>
                      </select>
                    </div>
                  </Form.Group>

                  <hr />
                  <div className="py-4 my-3 ">
                    <h1 className="font2 d-inline">
                      {planText} . {studentCount} Users
                    </h1>
                    <h1 className="font2 float-end">{price}</h1>
                    <h1 className="font3 my-2">
                      Save 20% yearly?{" "}
                      <span className="font4">Choose your billing!</span>
                    </h1>
                  </div>

                  <hr />
                  <div className="pt-4 pb-3 pb-md-5 my-3 ">
                    <h1 className="font5 d-inline">Total/{billingCycleText}</h1>
                    <h1 className="font5 float-md-end my-2">{price} USD</h1>
                  </div>
                </div>
                <hr />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3 col-12 mt-3">
                      <div className="d-grid">
                        <Button
                          className="btn btn4"
                          onClick={() => navigate(-1)}
                        >
                          Back
                        </Button>
                      </div>
                    </div>

                    <div className="col-md-3 col-12 ms-auto mt-3 mb-5">
                      <div className="d-grid">
                        <Button className="btn btn3" type="submit">
                          Pay Now
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

export default Payment;
