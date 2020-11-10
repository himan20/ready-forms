import React from "react";
import AvForm from "availity-reactstrap-validation/lib/AvForm";
import FormContextProvider from "../../context/FormContextProvider";
import DynamicFormRenderer from "./DynamicFormRenderer/DynamicFormRenderer";

const ReactDynamicForm = (props: any) => {

  const renderForm = () => {
    return (
      <AvForm>
        <DynamicFormRenderer
          controlTemplate={props.formControlTemplate}
          setFormState={props.setFormState}
        ></DynamicFormRenderer>
      </AvForm>
    );
  };

  if (props.formTemplate) {
    const ParentComponent = props.formTemplate;
    return (
      <FormContextProvider initialData={props.formData} setFormState={props.setFormState}>
        <ParentComponent {...props} >{renderForm()}</ParentComponent>
      </FormContextProvider>
    );
  } else {
    return <FormContextProvider initialData={props.formData} setFormState={props.setFormState}>
      {renderForm()}
    </FormContextProvider>;
  }
};

export default ReactDynamicForm;
