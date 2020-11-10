import React from 'react';
// import InputMask from 'react-input-mask'
import {AvField} from 'availity-reactstrap-validation'
import { Row, Col, FormGroup } from 'reactstrap'
import { useFormContext } from '../../../../context/FormContextProvider';

const YearInput = (props: any) => {
    let { updateValueAtKey }: any = useFormContext();
    return (
        <Row form className="flexed-form-row">
            <Col md={12}>
                <FormGroup>
                <AvField name={props.k}
                 type="number"
                 validate={props.validations}
                 value={props.value ? props.value : ""}
                 disabled={props.isDisabled}
                 onChange={(event: any) => updateValueAtKey(parseInt(event.target.value), props.k, props.parentData, props.stateKeyToUse)} />
                </FormGroup>
            </Col>
        </Row>
    )
}
export default YearInput;