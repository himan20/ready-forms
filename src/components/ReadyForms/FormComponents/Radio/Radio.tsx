import React from "react";
import { Row, Col, FormGroup } from "reactstrap";
import { AvRadio, AvRadioGroup } from "availity-reactstrap-validation";
import { useFormContext } from "../../../../context/FormContextProvider";

const Radio = (props: any) => {
    let { updateValueAtKey }: any = useFormContext();
  return (
    <Row form className="flexed-form-row">
      <Col md={12}>
        <FormGroup className="radio">
          {
            <AvRadioGroup
              inline
              name={props.k}
              disabled={props.isDisabled}
              value={props.value ? props.value : null}
              onChange={(e: any) => {
                e.persist();
                updateValueAtKey(e.nativeEvent.target.value, props.k, props.parentData, props.stateKeyToUse);
              }}
            >
              {props.options.map((option: any) => (
                <AvRadio customInput label={option.text} value={option.key} />
              ))}
            </AvRadioGroup>
          }
        </FormGroup>
      </Col>
    </Row>
  );
};
export default Radio;
