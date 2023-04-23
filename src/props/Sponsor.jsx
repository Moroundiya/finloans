import React from 'react';

function Sponsor(props) {
  return (
    <div className="item"><img src={props.img} alt='sponsor-img' /></div>
  )
}

function createSponsor(details) {
    <Sponsor key={details.id} img={details.img} />
}

export default Sponsor;
export { createSponsor };