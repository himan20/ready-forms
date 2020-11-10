/// <reference types="react" />
interface ValidationType {
    required?: BaseValidationStructure<Boolean>;
    pattern?: BaseValidationStructure<string>;
    minLength?: BaseValidationStructure<number>;
    maxLength?: BaseValidationStructure<number>;
    date?: DateFormatValidationStructure;
    dateRange?: RelativeDateRangeValidationStructure | AbsoluteDateRangeValidationStructure;
    datetime?: Boolean;
    email?: Boolean;
    match?: ValueValidationStructure<string>;
    max?: ValueValidationStructure<number>;
    min?: ValueValidationStructure<number>;
    npi?: Boolean;
    number?: Boolean;
    tel?: Boolean;
    step?: ValueValidationStructure<number>;
    async?: Function;
}
interface BaseValidationStructure<T> extends ValueValidationStructure<T> {
    pattern?: string;
}
interface BaseErrorMessageStructure {
    errorMessage?: string;
}
interface DateFormatValidationStructure extends BaseErrorMessageStructure {
    format: string;
}
interface RelativeDateRangeValidationStructure extends BaseErrorMessageStructure {
    start?: RelativeDateRangeStructure;
    end?: RelativeDateRangeStructure;
}
interface AbsoluteDateRangeValidationStructure extends BaseErrorMessageStructure {
    format?: string;
    start: AbsoluteDateRangeStructure;
    end: AbsoluteDateRangeStructure;
}
interface RelativeDateRangeStructure extends ValueValidationStructure<number> {
    value: number;
    units: 'years' | 'months' | 'days';
}
interface AbsoluteDateRangeStructure {
    value: number;
}
interface ValueValidationStructure<T> extends BaseErrorMessageStructure {
    value: T;
}
export interface Form {
    fields: Array<Field>;
    data?: any;
}
export interface Field {
    type: CONTROL_TYPES | string;
    validations?: ValidationType;
    children?: Array<Field>;
    value?: any;
    onChange?: Function;
    placeholder?: string;
    dataProps?: any;
    label?: string;
    k: string;
    options?: Array<SelectOption>;
    data?: any;
    header?: string;
    columns?: Array<Column>;
    rows?: Array<Array<Field>>;
    min?: number;
    max?: number;
    step?: number;
    isDisabled?: boolean;
    stateKeyToUse?: string;
}
export interface ParentDataType {
    k: string;
    index: number;
}
export interface TextInputType {
    k: string;
    validations: ValidationType;
    label: string;
    value: any;
    onChange: Function;
    placeholder: string;
    dataProps: any;
    parentData?: ParentDataType;
    isDisabled?: boolean;
    stateKeyToUse?: string;
}
export interface Column {
    label: string;
    stateKeyToUse?: string;
}
interface SelectOption {
    text: string;
    key: number | Boolean | string;
}
export declare enum CONTROL_TYPES {
    "text" = 0,
    "website" = 1,
    "number" = 2,
    "dropdownList" = 3,
    "zipcode" = 4,
    "currency" = 5,
    "label" = 6,
    "percentage" = 7,
    "date" = 8,
    "table" = 9,
    "year" = 10,
    "radio" = 11,
    "array" = 12
}
export declare enum REFLECTION_TYPES {
    "shouldBeSame" = 0,
    "replicateValue" = 1
}
export declare const DEFAULT_CONTROLS: {
    0: (props: TextInputType) => JSX.Element;
    1: (props: any) => JSX.Element;
    2: (props: any) => JSX.Element;
    3: (props: any) => JSX.Element;
    4: (props: any) => JSX.Element;
    5: (props: any) => JSX.Element;
    6: (props: any) => JSX.Element;
    7: (props: any) => JSX.Element;
    8: (props: any) => JSX.Element;
    9: (props: any) => JSX.Element;
    10: (props: any) => JSX.Element;
    11: (props: any) => JSX.Element;
};
export declare const ERROR_MESSAGES: {
    REQUIRED: string;
    MIN_LENGTH_5: string;
};
export {};
