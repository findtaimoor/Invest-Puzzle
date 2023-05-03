import React from 'react'
import FormContainrLogin from '../../components/FormContainrLogin'
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const ForgetPassword = () => {

  const navigate = useNavigate();

  return (
    <>
   <FormContainrLogin title="Forget Password" detail="Please write your email used for your accound to send you a code to complete the process." >
   <Form className="signUp-form ">
              

              <div className="px-3 px-md-5">
              
                <Form.Group className="mb-4 ">
                  <Form.Label className="fw-bold fs-6" >Email</Form.Label>
                  <Form.Control
                    type="email"
                   
                    className="form-cells"
                    required
                    placeholder="yourmail@mail.com"
                  />
                </Form.Group>

                <div className="d-grid mt-5 mb-3">
                  <Button className="btn btn1" type="submit" onClick={()=> navigate('/validateEmail')}>
                    Send Code
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
    </>
  )
}

export default ForgetPassword