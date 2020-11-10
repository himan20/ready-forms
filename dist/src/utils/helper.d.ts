import { Field, Form, ParentDataType } from "../schema/FormTypes";
export declare const mapToFinalState: (formJson: Form) => any;
export declare const initializeHashMapForKeyPositions: (fields: Field[], hashSlice: any, hashMap: any) => void;
export declare const updateValueAtKeyHelper: (value: any, key: string, parentData: ParentDataType, hashMap: any, formJson: any, formStateInternal: any, stateKeyToUse: string) => void;
export declare const getValueAtKeyHelper: (key: string, parentData: ParentDataType, hashMap: any, formJson: any) => any;
