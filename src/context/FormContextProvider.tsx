import React, { createContext, useContext, useState, useEffect } from "react";
import { ParentDataType } from "../schema/FormTypes";
import { getValueAtKeyHelper, initializeHashMapForKeyPositions, mapToFinalState, updateValueAtKeyHelper } from "../utils/helper";

const FormContext = createContext({});
export const hashMap: any = {};

const FormContextProvider = ({children, initialData, setFormState}: any) => {
  const [formJson, setFormJson] = useState(initialData)
  const [formStateInternal] = useState(mapToFinalState(initialData))

  useEffect(() => {
    initializeHashMapForKeyPositions(initialData.fields, null, hashMap);
  }, [])

  const updateValueAtKey = (value: any, key: string, parentData: ParentDataType, stateKeyToUse: string) => {
    updateValueAtKeyHelper(value, key, parentData, hashMap, formJson, formStateInternal, stateKeyToUse);
    setFormJson(formJson);
    setFormState(formStateInternal);
  }

  const getValueAtKey = (key: string, parentData: ParentDataType) => {
    return getValueAtKeyHelper(key, parentData, hashMap, formJson);
  }

  return <FormContext.Provider value={{formJson, setFormJson, updateValueAtKey, getValueAtKey}}> {children} </FormContext.Provider>;
};

export const useFormContext = () => useContext(FormContext);
export default FormContextProvider;
