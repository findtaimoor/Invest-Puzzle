import React from 'react'

const SuccessCard = ({title, titleText}) => {
  return (
    <>

    <div className="container px-3">
        <div className="row">
            <div className="col-12 my-3">
                <div>
                    <img src="./images/success.png" className='img-fluid' alt="success"/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 text-center py-3">
                <h1 className='fs-4 fw-bold'>{title} changed!</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <h1 className="fs-6 text-center titleText">
                    Congratulations, you have changed your {titleText}.
                </h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="d-grid my-4">
                    <button type="dismiss" className='btn btn1 text-light' data-bs-dismiss="modal">Dismiss</button>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default SuccessCard