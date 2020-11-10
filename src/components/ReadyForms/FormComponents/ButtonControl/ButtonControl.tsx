import React from 'react';
import { Row, Col, FormGroup, Button } from 'reactstrap'

const ButtonControl = (props: any) => {
    let keyName = "";
    if (Array.isArray(props.k) && props.k.length > 0){
        keyName = props.k.join('-');
    } else {
        keyName = props.k
    }

    return (
        <Row form>
            <Col md={12}>
                <FormGroup>
                    <Button name={keyName} onClick={props.onClick}>{props.text}</Button>
                </FormGroup>
            </Col>
        </Row>
    )
}
export default ButtonControl;