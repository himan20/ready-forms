import React from "react";
import { Row, Col, FormGroup } from "reactstrap";
import { AvField } from "availity-reactstrap-validation";
import { useFormContext } from "../../../../context/FormContextProvider";

const Currency = (props: any) => {
  let { updateValueAtKey }: any = useFormContext();

  return (
    <Row form className="flexed-form-row">
      <Col md={12}>
        <FormGroup>
          <AvField
            name={props.k}
            type="number"
            validate={props.validations}
            value={props.value}
            min={props.min}
            step={props.step}
            disabled={props.isDisabled}
            onChange={(event: any) =>
              updateValueAtKey(event.target.value, props.k, props.parentData, props.stateKeyToUse)
            }
          />
        </FormGroup>
      </Col>
    </Row>
  );
};
export default Currency;
