import React from "react";
import { AvField } from "availity-reactstrap-validation";
import { Row, Col, FormGroup } from "reactstrap";
import { TextInputType } from "../../../../schema/FormTypes";
import { useFormContext } from "../../../../context/FormContextProvider";

const TextInput = (props: TextInputType) => {

  let { updateValueAtKey }: any = useFormContext();

  return (
    <Row form className="flexed-form-row">
      <Col md={12}>
        <FormGroup>
          {
            <AvField
              type="text"
              name={props.k}
              validate={props.validations}
              disabled={props.isDisabled}
              value={props.value}
              onChange={(event: any) =>
                updateValueAtKey(event.target.value, props.k, props.parentData, props.stateKeyToUse)
              }
              placeholder={props.placeholder}
              {...props.dataProps}
            />
          }
        </FormGroup>
      </Col>
    </Row>
  );
};
export default TextInput;
