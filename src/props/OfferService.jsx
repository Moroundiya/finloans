import React from 'react';
import { Col } from 'react-bootstrap';

function OfferService(props) {
  return (
    <Col lg={4} md={6} data-aos="zoom-in-down">
        <div className='offer-service rounded py-5 text-center'>
            <img src={props.imgURL} alt='home loan' />
            <p className='text-white service-loan'>{props.serviceTitle}</p>
            <h2 className='service-amount'>{props.amount}</h2>
            <div className='px-5 offer-service-item-container'>
                <ul className='d-block text-start offer-service-item text-white lh-base'>
                        <li>{props.serviceList1}</li>
                        <li>{props.serviceList2}</li>
                        <li>{props.serviceList3}</li>
                        <li>{props.serviceList4}</li>
                </ul>
                <a href="https://google.com" className='d-block mt-5 mb-2 rounded offer-apply-btn text-decoration-none text-white'>Apply Now</a>
            </div>
        </div>
    </Col>
  )
}

function createOfferService(details){
    return(
        <OfferService key={details.id} imgURL={details.imgURL} serviceTitle={details.serviceTitle} amount={details.amount} 
        serviceList1={details.serviceList1} serviceList2={details.serviceList2} serviceList3={details.serviceList3} 
        serviceList4={details.serviceList4}
        />
    )
}

export default OfferService;
export {createOfferService};