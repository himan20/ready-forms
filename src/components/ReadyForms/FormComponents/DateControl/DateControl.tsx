import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Row, Col, FormGroup } from "reactstrap";
import { useFormContext } from "../../../../context/FormContextProvider";

const DateControl = (props: any) => {
  let { updateValueAtKey, getValueAtKey }: any = useFormContext();

  const [dateValue, setDateValue] = useState("");

  const onChange = (value: any) => {
    if (props.isDisabled) {
      return;
    }
    let formattedDate = value
      ? value.getFullYear().toString() +
        "-" +
        (value.getMonth() + 1).toString() +
        "-" +
        value.getDate().toString()
      : "";
    updateValueAtKey(formattedDate, props.k, props.parentData, props.stateKeyToUse);
    setDateValue(getValueAtKey(props.k));
  };

  const DateControlInput = ({ value, onClick }: any) => (
    <div
      className={`btn ${props.isDisabled ? "disabled-date-input" : ""}`}
      onClick={onClick}
    >
      {value}
    </div>
  );

  return (
    <Row form className="flexed-form-row">
      <Col md={12}>
        <FormGroup>
          <DatePicker
            className="form-control"
            selected={
              props.value
                ? new Date(props.value)
                : dateValue
                ? new Date(dateValue)
                : null
            }
            name={props.k}
            onChange={(val) => onChange(val)}
            dateFormat="MM/d/yyyy"
            customInput={props.isDisabled ? <DateControlInput /> : null}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default DateControl;
