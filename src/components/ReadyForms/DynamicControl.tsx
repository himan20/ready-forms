import React from "react";
import { DEFAULT_CONTROLS } from "../../schema/FormTypes";
import { CONTROL_TYPES } from "../../schema/FormTypes";
import BasicFormElementTemplate from "./FormControlTemplates/BasicFormControlTemplate/BasicFormControlTemplate";

const DynamicControl = (props: any) => {
  let returnObject = <></>;
  let field = props.control;
  field.parentData = props.parentData;

  const defaults: any = DEFAULT_CONTROLS

  if (defaults[field.type]) {
    // CUSTOM FORM CONTROLS
    if (field.formControls && field.formControls[field.type]) {
      let ComponentToRender = field.formControls[field.type];
      returnObject = <ComponentToRender {...field}></ComponentToRender>;
    }
    // USING DEFAULT FORM CONTROLS
    else {
      let ComponentToRender = defaults[field.type];
      returnObject = (
        <ComponentToRender
          {...field}
        ></ComponentToRender>
      );
    }
  } else if (field.type === CONTROL_TYPES.array) {
    returnObject = field.children.map((data: any, index: any) => (
      <DynamicControl key={index} control={data} controlTemplate={props.controlTemplate ? props.controlTemplate: BasicFormElementTemplate}></DynamicControl>
    ));
  }

  if (props.controlTemplate) {
    const Template = props.controlTemplate;
    return (
      <Template {...props}>
        {returnObject}
      </Template>
    )
  } else {
    return returnObject;
  }
};

export default DynamicControl;
