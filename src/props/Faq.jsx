import React, { useRef, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Icon } from "@iconify/react";
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("working perfectly!")
  );
  return (
    <button
      type="button"
      className="accordion-collapse-header"
      style={{ border: "none" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
function Faq(props) {
  const toggleArrow = useRef();
  const [showClass, setShowClass] = useState(
    "material-symbols:keyboard-arrow-down-rounded"
  );
  function clickShow() {
    setShowClass(
      !toggleArrow.current.props.nodeRef.current.classList.contains("show")
        ? "material-symbols:keyboard-arrow-up-rounded"
        : "material-symbols:keyboard-arrow-down-rounded"
    );
  }
  return (
    <div className="faq-container mb-1" onClick={clickShow}>
      <Accordion defaultActiveKey="">
        <Card>
          <Card.Header id="accordion-header">
            <CustomToggle eventKey={props.key}>
              <div className="faq-question-container d-flex align-items-center w-auto pb-2">
                <Icon icon={showClass} className="faq-down-arrow fs-4 me-2" />
                <p className="p-0 m-0 faq-question">{props.question}</p>
              </div>
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={props.key} ref={toggleArrow}>
            <Card.Body className="faq-anwser">{props.answer}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
function createFaq(details) {
  <Faq key={details.id} question={details.question} answer={details.answer} />;
}
export default Faq;
export { createFaq };
