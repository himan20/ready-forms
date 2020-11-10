import React from 'react';
import { useFormContext } from '../../../context/FormContextProvider';
import { Field } from '../../../schema/FormTypes';
import DynamicControl from '../DynamicControl';
import BasicFormElementTemplate from '../FormControlTemplates/BasicFormControlTemplate/BasicFormControlTemplate';

const DynamicFormRenderer = ({controlTemplate}: any, ref: any) => {

  const { formJson }: any = useFormContext();

  return formJson.fields.map((field: Field, index: number) => (
    <DynamicControl key={index} control={field} controlTemplate={controlTemplate ? controlTemplate : BasicFormElementTemplate}></DynamicControl>
  ))
};

export default DynamicFormRenderer;