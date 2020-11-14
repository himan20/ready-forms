import React, { useState } from "react";
import { Button, Label } from "reactstrap";
import { ReadyForm, FormInCardTemplate, BasicFormControlTemplate } from "../dist/index";
import { example, example2 } from "./exampleSchema";

const Example = () => {
  const [formState, setFormState] = useState();
  const [formState2, setFormState2] = useState();
  const [formState1Stringified, setFormState1Stringified] = useState(JSON.stringify({formState1: formState}, null, 4))
  const [formState2Stringified, setFormState2Stringified] = useState(JSON.stringify({formState2: formState}, null, 4))

  const logState = () => {
    console.log(formState);
    setStateToJsonString(formState, 'form1');
  };

  const setFormStateFromInner1 = (state) => {
    setStateToJsonString(state, 'form1');
    setFormState(state);
  }

  const setFormStateFromInner2 = (state) => {
    setStateToJsonString(state, 'form2');
    setFormState2(state);
  }

  const setStateToJsonString = (state, type) => {
    switch (type) {
      case 'form1':
        setFormState1Stringified(JSON.stringify({formState1: state}, null, 4))
        break;
      case 'form2':
        setFormState2Stringified(JSON.stringify({formState2: state}, null, 4))
        break;
      default:
        console.log('not set');
        break;
    }
  }

  return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
        <div id="col1" style={{flex: 1}} >
          <ReadyForm
            formData={example}
            formTemplate={FormInCardTemplate}
            formControlTemplate={BasicFormControlTemplate}
            title="My Dynamic Form"
            formState={formState}
            setFormState={setFormStateFromInner1}
          ></ReadyForm>
          <Button onClick={logState}>BUTTON OUTSIDE THE FORM</Button>

          <ReadyForm
            formData={example2}
            formTemplate={FormInCardTemplate}
            formControlTemplate={BasicFormControlTemplate}
            title="My Second Dynamic Form"
            formState={formState2}
            setFormState={setFormStateFromInner2}
          ></ReadyForm>
        </div>
        <div id="col2" style={{flex: 1, textAlign: 'start'}}>
          <Label>Form 1: </Label>
          <pre id="form1">{formState1Stringified}</pre>
          <Label>Form 2: </Label>
          <pre id="form2">{formState2Stringified}</pre>
        </div>
    </div>
  );
};

export default Example;
