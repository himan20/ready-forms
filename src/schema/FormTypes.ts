
import TextInput from "../components/ReadyForms/FormComponents/TextInput/TextInput";
import WebsiteInput from "../components/ReadyForms/FormComponents/WebsiteInput/WebsiteInput";
import NumberInput from "../components/ReadyForms/FormComponents/NumberInput/NumberInput";
import Dropdown from "../components/ReadyForms/FormComponents/DropdownList/DropdownList";
import Currency from "../components/ReadyForms/FormComponents/CurrencyInput/CurrencyInput";
import ZipcodeInput from "../components/ReadyForms/FormComponents/ZipcodeInput/ZipcodeInput";
import LabelControl from "../components/ReadyForms/FormComponents/LabelControl/LabelControl";
import PercentageInput from "../components/ReadyForms/FormComponents/PercentageInput/PercentageInput";
import DateControl from "../components/ReadyForms/FormComponents/DateControl/DateControl";
import TableControl from "../components/ReadyForms/FormComponents/TableControl/TableControl";
import YearInput from "../components/ReadyForms/FormComponents/YearInput/YearInput";
import Radio from "../components/ReadyForms/FormComponents/Radio/Radio";

interface ValidationType {
    required?: BaseValidationStructure<Boolean>,
    pattern?: BaseValidationStructure<string>,
    minLength?: BaseValidationStructure<number>,
    maxLength?: BaseValidationStructure<number>,
    date?: DateFormatValidationStructure,
    dateRange?: RelativeDateRangeValidationStructure | AbsoluteDateRangeValidationStructure,
    datetime?: Boolean,
    email?: Boolean,
    match?: ValueValidationStructure<string>,
    max?: ValueValidationStructure<number>,
    min?: ValueValidationStructure<number>,
    npi?: Boolean,
    number?: Boolean,
    tel?: Boolean,
    step?: ValueValidationStructure<number>,
    async?: Function
}

interface BaseValidationStructure<T> extends ValueValidationStructure<T> {
    pattern?: string,
}

interface BaseErrorMessageStructure {
    errorMessage?: string
}

interface DateFormatValidationStructure extends BaseErrorMessageStructure {
    format: string
}

interface RelativeDateRangeValidationStructure extends BaseErrorMessageStructure {
    start?: RelativeDateRangeStructure,
    end?: RelativeDateRangeStructure
}

interface AbsoluteDateRangeValidationStructure extends BaseErrorMessageStructure {
    format?: string,
    start: AbsoluteDateRangeStructure,
    end: AbsoluteDateRangeStructure
}

interface RelativeDateRangeStructure extends ValueValidationStructure<number> {
    value: number,
    units: 'years' | 'months' | 'days'
}

interface AbsoluteDateRangeStructure {
    value: number
}

interface ValueValidationStructure<T> extends BaseErrorMessageStructure {
    value: T
}

export interface Form {
    fields: Array<Field>
    data?: any
}

interface Reflection {
    k: string;
    reflectionType: REFLECTION_TYPES
}

export interface Field {
    type: CONTROL_TYPES | string,
    validations?: ValidationType,
    children?: Array<Field>,
    value?: any,
    onChange?: Function,
    placeholder?: string,
    dataProps?: any,
    label?: string,
    k: string,
    options?: Array<SelectOption>,
    data?: any,
    header?: string,
    columns?: Array<Column>,
    rows?: Array<Array<Field>>,
    min?: number,
    max?: number, // DON'T USE FOR NOW - IT CAUSES THE PAGE TO HANG FOR SOME REASON
    step?: number,
    isDisabled?: boolean,
    stateKeyToUse?: string
    // reflects?: Reflection
}

export interface ParentDataType {
    k: string;
    index: number;
}


export interface TextInputType {
    k: string,
    validations: ValidationType,
    label: string,
    value: any,
    onChange: Function,
    placeholder: string,
    dataProps: any,
    parentData?: ParentDataType;
    isDisabled?: boolean;
    stateKeyToUse?: string;
}

export interface Column {
    label: string;
    stateKeyToUse?: string;
}

interface SelectOption {
    text: string,
    key: number | Boolean | string
}

export enum CONTROL_TYPES {
    "text",
    "website",
    "number",
    "dropdownList",
    "zipcode",
    "currency",
    "label",
    "percentage",
    "date",
    "table",
    "year",
    "radio",
    "array"
}

export enum REFLECTION_TYPES {
    "shouldBeSame",
    "replicateValue"
}

export const DEFAULT_CONTROLS = {
    [CONTROL_TYPES.text]: TextInput,
    [CONTROL_TYPES.website]: WebsiteInput,
    [CONTROL_TYPES.number]: NumberInput,
    [CONTROL_TYPES.dropdownList]: Dropdown,
    [CONTROL_TYPES.zipcode]: ZipcodeInput,
    [CONTROL_TYPES.currency]: Currency,
    [CONTROL_TYPES.label]: LabelControl,
    [CONTROL_TYPES.percentage]: PercentageInput,
    [CONTROL_TYPES.date]: DateControl,
    [CONTROL_TYPES.table]: TableControl,
    [CONTROL_TYPES.year]: YearInput,
    [CONTROL_TYPES.radio]: Radio
}

export const ERROR_MESSAGES = {
    REQUIRED: "This is a required field",
    MIN_LENGTH_5: "Should be at least 5 characters"
}