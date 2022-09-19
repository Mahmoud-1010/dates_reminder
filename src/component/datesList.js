import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesList = ({person})=>{
    return (
        <div>
            <Row className="justify-content-center">
          <Col className="" sm="8">
          <div className="rectangle p-2">
            {person.length ? (person.map((item)=>{
              return(
              <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                <img className="img_avatar" src="p1.jpg" alt="sdsd"/>
                <div className="px-3">
                  <p className="d-inline fs-5">{item.name}</p>
                  <p className=" fs-5">{item.date}</p>
                </div>
              </div>
              )
            })) : <h2 className="p-5 text-center">there are no dates</h2>}
            
          </div>
          </Col>
        </Row>
        </div>
    )
}
export default DatesList