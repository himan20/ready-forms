import React from "react";
import { Row, Col, FormGroup } from "reactstrap";
import { AvField } from "availity-reactstrap-validation";
import { useFormContext } from "../../../../context/FormContextProvider";

const Dropdown = (props: any) => {
  let { updateValueAtKey }: any = useFormContext();

  return (
    <Row form className="flexed-form-row">
      <Col md={12}>
        <FormGroup>
          <AvField
            type="select"
            name="select"
            value={
              props.value === "true"
                ? true
                : props.value === "false"
                ? false
                : props.value
            }
            className={
              !props.validations ||
              !props.validations.required ||
              !props.validations.required.value
                ? "optional-fields"
                : ""
            }
            disabled={props.isDisabled}
            onChange={(event: any) =>
              updateValueAtKey(
                event &&
                  event.nativeEvent &&
                  event.nativeEvent.target &&
                  event.nativeEvent.target.value
                  ? event.nativeEvent.target.value
                  : null,
                props.k,
                props.parentData,
                props.stateKeyToUse
              )
            }
          >
            {props.options
              ? props.options.map((option: any, index: any) => (
                  <option key={index} value={option.key}>
                    {option.text}
                  </option>
                ))
              : ""}
          </AvField>
        </FormGroup>
      </Col>
    </Row>
  );
};
export default Dropdown;
