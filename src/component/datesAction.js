import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesAction = ({deleteData,onViewData}) => {
    return(
        <Row className="justify-content-center my-2">
          <Col className="d-flex justify-content-between" sm="8">
            <button onClick={deleteData} className="btn_style p-2">delete all</button>
            <button onClick={onViewData} className="btn_style p-2">show all</button>
          </Col>
        </Row>
    )
}
export default DatesAction