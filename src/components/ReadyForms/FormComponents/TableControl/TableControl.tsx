import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import DynamicControl from "../../DynamicControl";

const TableControl = (props: any) => {
  return (
    <Fragment>
      <Row style={{ marginLeft: "50px", marginBottom: "20px" }}>
        {props.columns.map((column: any, index: number) => (
          <Col key={index}>{column.label}</Col>
        ))}
      </Row>
      {props.rows.map((row: any, rowIndex: number) => {
        return (
          <Row style={{ marginLeft: "50px" }} key={rowIndex}>
            {row.map((control: any, index: number) => (
              <Col key={index}>
                <DynamicControl
                  parentData={{ k: props.k, index: rowIndex }}
                  control={control}
                  onChange={props.onChange}
                ></DynamicControl>
              </Col>
            ))}
          </Row>
        );
      })}
    </Fragment>
  );
};

export default TableControl;
