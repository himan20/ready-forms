import React from "react";
import { Row, Col, FormGroup } from "reactstrap";
import { AvField } from "availity-reactstrap-validation";
import { useFormContext } from "../../../../context/FormContextProvider";

const PercentageInput = (props: any) => {
  let { updateValueAtKey }: any = useFormContext();
  const onChange = (value: any) => {
    if (value > 0) {
      value = value / 100;
    }
    updateValueAtKey(value, props.k, props.parentData, props.stateKeyToUse);
  };

  return (
    <Row form className="flexed-form-row">
      <Col md={12}>
        <FormGroup>
          <AvField
            name={props.k}
            type="number"
            validate={props.validations}
            value={props.value ? props.value * 100 : 0}
            onChange={(event: any) => onChange(event.target.value)}
            disabled={props.isDisabled}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};
export default PercentageInput;
