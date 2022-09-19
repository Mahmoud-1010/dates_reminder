import React from "react";
import { Col, Row } from "react-bootstrap";
const DatesCount = ({person}) => {
    return (
        <div>
            <Row className="justify-content-center my-2">
                <Col className="" sm="8">
                    you have {person.length} dates
                </Col>
            </Row>
        </div>
    )
}
export default DatesCount