import React, {Fragment} from 'react';
import { Col } from 'reactstrap';
import DynamicControl from '../../DynamicControl';
import ButtonControl from '../../FormComponents/ButtonControl/ButtonControl';
import LabelControl from '../../FormComponents/LabelControl/LabelControl';

const BasicFormElementTemplate = ({control}: any) => {
  return (
    <Fragment>
            <LabelControl
              value={control.label}
              k={control.k}
              type={control.type}
            >
              {control.toolbar &&
              control.toolbar.buttons &&
              control.toolbar.buttons.length > 0
                ? control.toolbar.buttons.map((button: any, index: number) => (
                    <Col key={index}>
                      <ButtonControl {...button}></ButtonControl>
                    </Col>
                  ))
                : ""}
            </LabelControl>
            <DynamicControl
              control={control}
            ></DynamicControl>
          </Fragment>
  )
}

export default BasicFormElementTemplate;