import React, { useState } from "react";
import { Button } from "reactstrap";
import { ReadyForm, FormInCardTemplate, BasicFormControlTemplate } from "../dist/index";
import { example, example2 } from "./exampleSchema";

const Example = () => {
  const [formState, setFormState] = useState();
  const [formState2, setFormState2] = useState();

  const logState = () => {
    console.log(formState);
  };

  return (
    <>
      <ReadyForm
        formData={example}
        formTemplate={FormInCardTemplate}
        formControlTemplate={BasicFormControlTemplate}
        title="My Dynamic Form"
        formState={formState}
        setFormState={setFormState}
      ></ReadyForm>
      <Button onClick={logState}>OUTSIDE BUTTON</Button>

      <ReadyForm
        formData={example2}
        formTemplate={FormInCardTemplate}
        formControlTemplate={BasicFormControlTemplate}
        title="My Second Dynamic Form"
        formState={formState2}
        setFormState={setFormState2}
      ></ReadyForm>
    </>
  );
};

export default Example;
