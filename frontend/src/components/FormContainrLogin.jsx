import React from 'react'


const FormContainrLogin = ({ title,detail,children }) => {
  return (
    <div className="container-fluid app-main1">
    <div className="row">
      <div className="offset-md-4 col-md-4 column1">
        <div className="mt-5 mb-4">
        <div className="border-form my-5">
                <h1 className="text-center fw-bold font1 mt-3">{title}</h1>
                <p className=" px-4 text-center font">{detail}</p>
        {children}
        
        </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default FormContainrLogin