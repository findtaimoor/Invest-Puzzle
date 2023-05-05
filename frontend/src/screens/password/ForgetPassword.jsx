import React, { useRef, useState } from 'react'
import FormContainrLogin from '../../components/FormContainrLogin'
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Message from '../../components/Message';


const ForgetPassword = () => {

  const navigate = useNavigate();
  const emailRef = useRef();

  const [message, setMessage] = useState(null)

  const submitHandler = (e) =>{
    e.preventDefault();
    let email = emailRef.current.value;
    console.log(email)
    if(email){
      navigate('/validateEmail')
      localStorage.setItem('recoveryEmail', email);
    }else{
      setMessage('Enter Email to recover password.')
    }

  }



  return (
    <>
   <FormContainrLogin title="Forget Password" detail="Please write your email used for your accound to send you a code to complete the process." >
   <Form className="signUp-form " onSubmit={submitHandler}>
              

              <div className="px-3 px-md-5">
              {message ? <Message>{message}</Message> : null}
                <Form.Group className="mb-4 ">
                  <Form.Label className="fw-bold fs-6" >Email</Form.Label>
                  <Form.Control
                    type="email"
                   ref={emailRef}
                    className="form-cells"
                    
                    placeholder="yourmail@mail.com"
                  />
                </Form.Group>

                <div className="d-grid mt-5 mb-3">
                  <Button className="btn btn1" type="submit" >
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