import React from "react";
import { Label, Row, Col } from "reactstrap";

const LabelControl = (props: any) => {
  const renderWithToolbar = () => {
    return (
      <Label style={{ width: "100%" }} for={props.k} className={props.classes}>
        <Row>
          <Col md={10}>
            <Row style={{ margin: "0px" }}>{props.value}</Row>
          </Col>
          <Col md={2}>{props.children}</Col>
        </Row>
      </Label>
    );
  };

  const renderNormal = () => {
    return (
      <Row style={{ margin: "0px" }}>
        <Label for={props.k} className={props.classes}>
          {props.value}
        </Label>
      </Row>
    );
  };

  return props.children ? renderWithToolbar() : renderNormal();
};
export default LabelControl;
