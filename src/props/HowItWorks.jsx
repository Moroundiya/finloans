import React from 'react'
import { Col } from 'react-bootstrap';

function HowItWorks(props) {
  return (
    <Col lg={4}>
        <div className='work-item d-flex justify-content-center align-items-center flex-column p-4' data-aos="zoom-in-down">
            <span className='work-item-number rounded-circle fs-5 fw-semibold d-flex justify-content-center align-items-center'>{props.number}</span>
            <h4 className='my-3 work-item-title'>{props.title}</h4>
            <p className='work-item-description text-center'>{props.info}</p>
        </div>
    </Col>
  )
}


export default HowItWorks;
