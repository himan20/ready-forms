import React from "react";
import { AvField } from "availity-reactstrap-validation";
import { Row, Col, FormGroup } from "reactstrap";
import { COMMON_REGEX } from "../../../../utils/regex";
import { useFormContext } from "../../../../context/FormContextProvider";

const WebsiteInput = (props: any) => {
  let { updateValueAtKey }: any = useFormContext();

  const websiteValidationPattern = COMMON_REGEX.WEBSITE;

  return (
    <Row form className="flexed-form-row">
      <Col md={12}>
        <FormGroup>
          <AvField
            type="text"
            name={props.k}
            validate={{ ...props.validations,
              pattern: {
                value: websiteValidationPattern,
                errorMessage: "Please enter a valid Website address",
              },
            }}
            value={props.value}
            disabled={props.isDisabled}
            onChange={(event: any) =>
              updateValueAtKey(event.target.value, props.k, props.parentData, props.stateKeyToUse)
            }
            placeholder={props.placeholder}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};
export default WebsiteInput;
